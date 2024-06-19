import { http, createConfig } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";
import { coinbaseWallet, metaMask } from "wagmi/connectors";

export const config = createConfig({
  chains: [mainnet, sepolia],
  connectors: [metaMask(), coinbaseWallet({ appName: "Create Wagmi" })],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
});
