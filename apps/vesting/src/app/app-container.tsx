import { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { environment } from '../environments/environment';
import { OnboardingContainer } from '../OnboardingContainer';
import { WagmiProvider, haqqLocalnet } from '@haqq/shared';
import { haqqMainnet, haqqTestedge2 } from '@wagmi/chains';

export function AppContainer({ children }: { children: ReactElement }) {
  return (
    <BrowserRouter>
      <WagmiProvider
        walletConnectProjectId={environment.walletConnectProjectId}
        supportedChains={[haqqMainnet, haqqTestedge2, haqqLocalnet]}
      >
        <OnboardingContainer>{children}</OnboardingContainer>
      </WagmiProvider>
    </BrowserRouter>
  );
}
