import { Button, Typography } from "@mui/material";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { FC } from "react";

interface IDummyButtonProps {
  onClick: () => void;
  text: string;
}

const DummyButton: FC<IDummyButtonProps> = ({ onClick, text }) => {
  return (
    <Button variant="contained" onClick={onClick}>
      <Typography variant="body1">{text}</Typography>
    </Button>
  );
};

export const ConnectWalletButton = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");

        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <DummyButton
                    onClick={openConnectModal}
                    text="Connect Wallet"
                  />
                );
              }

              if (chain.unsupported) {
                return (
                  <DummyButton onClick={openChainModal} text="Wrong network" />
                );
              }

              return (
                <DummyButton
                  onClick={openAccountModal}
                  text={account.displayName}
                />
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};
