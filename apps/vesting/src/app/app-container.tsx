import { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { environment } from '../environments/environment';
import { OnboardingContainer } from '../OnboardingContainer';
import { WagmiProvider } from '@haqq/shared';
import { Chain, haqqMainnet, haqqTestedge2 } from '@wagmi/chains';

export const haqqLocalnetFork: Chain = {
  id: 11235,
  name: 'HAQQ Localnet fork',
  network: 'haqq-localnet-fork-1',
  nativeCurrency: {
    decimals: 18,
    name: 'Islamic Coin',
    symbol: 'ISLMT',
  },
  rpcUrls: {
    default: {
      http: ['http://127.0.0.1:8545'],
    },
    public: {
      http: ['http://127.0.0.1:8545'],
    },
  },
  testnet: true,
};

export function AppContainer({ children }: { children: ReactElement }) {
  return (
    <BrowserRouter>
      <WagmiProvider
        walletConnectProjectId={environment.walletConnectProjectId}
        supportedChains={[haqqMainnet, haqqTestedge2, haqqLocalnetFork]}
      >
        <OnboardingContainer>{children}</OnboardingContainer>
      </WagmiProvider>
    </BrowserRouter>
  );
}
