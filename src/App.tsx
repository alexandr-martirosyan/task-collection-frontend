

import "@rainbow-me/rainbowkit/styles.css";

import { darkTheme, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiConfig } from "wagmi";

import { chains, wagmiConfig } from "@/config/connection";
import { MainPage } from "@/pages/Main";
import { Typography } from "@mui/material";

function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        chains={chains}
        modalSize="compact"
        theme={darkTheme()}
        appInfo={{
          disclaimer: () => (
            <Typography>
              By connecting your wallet, you agree to the Terms of Service and
              acknowledge you have read and understand the protocol
            </Typography>
          ),
        }}
      >
        <MainPage />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;