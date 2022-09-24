import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global';
import logo from '../../src/public/bornpinkbanner.png'

globalStyles();

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default App
