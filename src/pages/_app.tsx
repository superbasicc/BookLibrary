import '@/styles/globals.css'
import type { AppProps, AppType } from 'next/app'
import { trpc } from '@/utilities/trpc'

// export default function App({ Component, pageProps }: AppType) {
//   return <Component {...pageProps} />
// }

const RootApp: AppType = ({ Component, pageProps }) => {
  return <Component { ...pageProps } />
}

export default trpc.withTRPC(RootApp)
