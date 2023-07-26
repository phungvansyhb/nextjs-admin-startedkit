import ErrorBoundary from '@/shared/components/layouts/ErrorBoudary';
// import DashBoardLayout from '@/shared/components/layouts/dashboard/DashboardLayout';
import { store } from '@/shared/stores';
import AbilityConfig from '@/shared/utils/functions/abilityBuild';
import '@/styles/global.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React, { ReactElement, ReactNode } from 'react';
import { Provider } from 'react-redux';
// import { useGetInfoByToken } from '@/shared/schema/models/IAppUser';
import { useAppSelector } from '@/shared/hooks/useRedux';
import useRouterChange from '@/shared/hooks/useRouterChange';
import DashBoardLayout from '@/shared/components/layouts/DashboardLayout';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import ProgressBarProvider from '@/shared/components/common/ui/progressbar';
import { Toaster } from "@/shared/components/common/ui/toaster"
import { MAX_RETRY_REQUEST } from '@/Settings';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
const queryClient = new QueryClient({ defaultOptions: { queries: { refetchOnWindowFocus: false, retry: MAX_RETRY_REQUEST } } });

export const AbilityContext = React.createContext(AbilityConfig());
AbilityContext.displayName = 'AbilityContext';

const Boostrap = ({
  children,
  getLayout,
}: {
  children: React.ReactElement;
  getLayout: (page: ReactElement) => ReactNode;
}) => {
  // useGetInfoByToken();
  // const isRouteLoading = useAppSelector(state => state.appSlice.isRouteLoading)
  // useReserveUrl();
  useRouterChange()
  // const roles = useAppSelector(state => state.appSlice.user?.rolePermissionActionDtos)
  return (
    <ProgressBarProvider>
      <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
        {getLayout(children)}
        <Toaster />
      </NextThemesProvider>
    </ProgressBarProvider>

    // <AbilityContext.Provider value={AbilityConfig(_.uniq(roles?.map(item => item.rolePermissionAction).flat(1)))}>
    //   {isRouteLoading && <div className='bg-slate-50 bg-opacity-70 absolute z-[9999] w-screen h-screen flex justify-center items-center'><HashLoader color="#016390"
    //     size={50} /></div>}
    //   {getLayout(children)}
    // </AbilityContext.Provider>
  )
}



function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? (page =>
    <DashBoardLayout>{page}</DashBoardLayout>
  );
  return (
    <ErrorBoundary>
      <Head>
        <title>AppName</title>
        {/* <link rel="icon" href="https://careerfinder.vn/wp-content/uploads/2020/05/vietnam-airline-logo.jpg" /> */}
        {/* <link rel="apple-touch-icon" href="https://careerfinder.vn/wp-content/uploads/2020/05/vietnam-airline-logo.jpg" /> */}
      </Head>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Boostrap getLayout={getLayout}>
            <Component {...pageProps} />
          </Boostrap>
        </QueryClientProvider>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
