import {
  metaMaskWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { configureChains, createConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import { hardhat, sepolia } from "viem/chains";

export const { chains, publicClient } = configureChains(
  [hardhat, sepolia],
  // [sepolia],
  [publicProvider()]
);

const connectors = connectorsForWallets([
  {
    groupName: "TEST TASK",
    wallets: [
      metaMaskWallet({
        projectId: "",
        chains,
      }),
    ],
  },
]);

export const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});
