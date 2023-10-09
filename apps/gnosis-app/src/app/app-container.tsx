import { CosmosProvider, Toaster, WalletProvider } from '@haqq/shared';
import { PropsWithChildren, useMemo } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Connector, WagmiConfig, configureChains, createConfig } from 'wagmi';
import { SafeConnector } from '@wagmi/connectors/safe';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { publicProvider } from 'wagmi/providers/public';
import { haqqTestedge2, haqqMainnet } from '@wagmi/chains';
import {
  QueryClient as ReactQueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const SUPPORTED_CHAINS = [haqqMainnet, haqqTestedge2];

export function AppContainer({ children }: PropsWithChildren) {
  const debug = true;

  const wagmiConfig = useMemo(() => {
    const { publicClient, webSocketPublicClient, chains } = configureChains(
      SUPPORTED_CHAINS,
      [
        publicProvider(),
        jsonRpcProvider({
          rpc: (chain) => {
            return {
              http: chain.rpcUrls.default.http[0],
            };
          },
        }),
      ],
    );
    const connectors: Connector[] = [
      new SafeConnector({
        chains,
        options: {
          allowedDomains: [/app.safe.global$/, /safe.haqq.network$/],
          debug: debug,
        },
      }),
    ];

    return createConfig({
      publicClient,
      webSocketPublicClient,
      connectors,
      autoConnect: false,
    });
  }, [debug]);

  const queryClient = useMemo(() => {
    return new ReactQueryClient({
      defaultOptions: {
        queries: {
          retryDelay: (attemptIndex: number) => {
            return Math.min(1000 * 2 ** attemptIndex, 30000);
          },
        },
      },
    });
  }, []);

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <WagmiConfig config={wagmiConfig}>
          <WalletProvider>
            <CosmosProvider>
              {children}
              {debug && <ReactQueryDevtools />}
              <Toaster />
            </CosmosProvider>
          </WalletProvider>
        </WagmiConfig>
      </QueryClientProvider>
    </BrowserRouter>
  );
}
