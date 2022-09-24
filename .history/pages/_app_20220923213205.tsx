import '../styles/globals.css'
import type { AppProps } from 'next/app'

globalStyles();

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default App
