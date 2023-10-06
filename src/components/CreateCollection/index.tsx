import { useNftCollectionContract } from "@/hooks/useNftCollectionContract";
import { Box, Button, TextField } from "@mui/material";
import { AbiCoder } from "ethers";
import { FC, useCallback, useState } from "react";
import { useAccount } from "wagmi";

const abiCoder = new AbiCoder()

export const CreateCollection:FC = () => {
  const getCollectionContract = useNftCollectionContract()
  const {address} = useAccount()
	const [loading, setLoading] = useState<boolean>(false)
	const [name, setName] = useState<string>();
	const [symbol, setSymbol] = useState<string>();

	const handleCreateCollection = useCallback(async () => {
    if (!name || !symbol || !address) return;

    try {
      setLoading(true);
      const collectionContract = await getCollectionContract();
      const tx = await collectionContract?.createCollection(
        name,
        symbol,
        address
      );
      const data = await tx?.wait();
      const decoded = abiCoder.decode(['address'], data?.logs[0]?.topics[1] || '');
      if (decoded?.[0]) {
        localStorage.setItem("collectionContract", decoded[0])
        setName("")
        setSymbol("")
        console.log("New Collection address is:", decoded[0]);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [getCollectionContract, name, symbol, address]);


	return (
    <Box
      sx={{
        display: "flex",
        gap: "10px",
      }}
    >
      <Box>
        <TextField
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          placeholder="symbol"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
        />
      </Box>
      <Button onClick={handleCreateCollection} disabled={loading}>
        Create collection
      </Button>
    </Box>
  );
}