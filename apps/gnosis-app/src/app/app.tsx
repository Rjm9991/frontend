import { lazy, Suspense, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { NotFoundPage, PendingPage } from '@haqq/shell-ui-kit';
import { useConnect } from 'wagmi';
// import { DebugPage } from '../components/debug-page';

// const ShellIndexPage = lazy(async () => {
//   const { ShellIndexPage } = await import('@haqq/shell/index-page');
//   return { default: ShellIndexPage };
// });
const DebugPage = lazy(async () => {
  const { DebugPage } = await import('../components/debug-page');
  return { default: DebugPage };
});
// const ShellAuthzPage = lazy(async () => {
//   const { ShellAuthzPage } = await import(
//     '../components/authz-page/authz-page'
//   );
//   return { default: ShellAuthzPage };
// });

const AUTOCONNECTED_CONNECTOR_IDS = ['safe'];

function useAutoConnect() {
  const { connect, connectors } = useConnect();

  useEffect(() => {
    AUTOCONNECTED_CONNECTOR_IDS.forEach((connector) => {
      const connectorInstance = connectors.find((c) => {
        return c.id === connector && c.ready;
      });

      if (connectorInstance) {
        connect({ connector: connectorInstance });
      }
    });
  }, [connect, connectors]);
}

export function App() {
  useAutoConnect();

  return (
    <Suspense fallback={<PendingPage />}>
      <Routes>
        {/* <Route path="/" element={<ShellIndexPage />} /> */}
        <Route path="/" element={<DebugPage />} />
        {/* <Route path="/authz" element={<ShellAuthzPage />} /> */}

        <Route path="not-found" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
    </Suspense>
  );
}
