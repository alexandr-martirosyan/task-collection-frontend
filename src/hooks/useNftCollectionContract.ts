import { publicProvider } from "@/constants/provider";
import { useCallback, useMemo } from "react"
import NftCollectionFactoryAbi from "@/contract/nftCollectionFactory.json"
import { Contract } from "ethers";
import { NftCollectionFactory } from "@/interfaces/typechain";

export const useNftCollectionContract = () => {
  const provider = useMemo(() => publicProvider(), []);

  const getContract =  useCallback(async () => {
    if (!provider) {
      return undefined
    }
    const signer = await provider.getSigner();
    return new Contract(
      import.meta.env.VITE_NFT_COLLECTION_CONTRACT,
      NftCollectionFactoryAbi,
      signer
    ) as NftCollectionFactory & Contract;
   
  }, [provider])


  return getContract;
}