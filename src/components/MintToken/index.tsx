import { useNftCollectionContract } from "@/hooks/useNftCollectionContract";
import { Box, Button, TextField } from "@mui/material";
import { FC, useState } from "react";
import { useAccount } from "wagmi";

export const MintToken: FC = () => {
  const getCollectionContract = useNftCollectionContract();
  const {address} = useAccount()
  const [loading, setLoading] = useState<boolean>(false);
  const [tokenId, setTokenId] = useState<number | "">("");
  const [tokenUri, setTokenUri] = useState<string>();
  const [receiver, setReceiver] = useState<string>(address!);

  const handleCreateCollection = async () => {
    if (tokenId === "" || !tokenUri || !receiver) return;
    const collectionAddress = localStorage.getItem("collectionContract");

    if (!collectionAddress) {
      throw new Error("Collection does not exist")
    }

    try {
      setLoading(true);
      const collectionContract = await getCollectionContract();
      const tx = await collectionContract?.mintToken(
        collectionAddress,
        receiver,
        tokenId,
        tokenUri
      );
      const data = await tx?.wait();
      console.log(data);
      setTokenId("");
      setTokenUri("");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: "10px",
      }}
    >
      <Box>
        <TextField
          type="number"
          placeholder="token id"
          value={tokenId && tokenId < 0 ? -1000 : tokenId}
          onChange={(e) => setTokenId(+e.target.value)}
        />
        <TextField
          placeholder="token uri"
          value={tokenUri}
          onChange={(e) => setTokenUri(e.target.value)}
        />
        <TextField
          placeholder="receiver"
          value={receiver}
          onChange={(e) => setReceiver(e.target.value)}
        />
      </Box>
      <Button onClick={handleCreateCollection} disabled={loading}>
        Mint token
      </Button>
    </Box>
  );
};
