import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Link, LinkProps, SaasProvider } from '@saas-ui/react'

//export default function App({ Component, pageProps }: AppProps) {
//  return <Component {...pageProps} />
//}

export default function App({ Component, pageProps }: AppProps) {
  return <SaasProvider><Component {...pageProps} /></SaasProvider>
}
