import { ConnectWalletButton } from "@/components/ConnectWalletButton";
import { CreateCollection } from "@/components/CreateCollection";
import { MintToken } from "@/components/MintToken";
import { Box, Container } from "@mui/material";
import { useAccount } from "wagmi";

export const MainPage = () => {
	const {address, isConnected} = useAccount()

	return <Container maxWidth="xl">
		<ConnectWalletButton />


		{isConnected && address && (
			<Box sx={{
				marginTop: "20px",
				display: "flex",
				flexDirection: "column",
				gap: "20px"
			}}>
				<CreateCollection />

				<MintToken />
			</Box>
		)}
	</Container>;
}