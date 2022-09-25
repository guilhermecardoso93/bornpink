import type { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import { CartProvider, useShoppingCart } from "use-shopping-cart";

globalStyles();

function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider
      cartMode="checkout-session"
      stripe={process.env.STRIPE_PRIVATE_KEY}
      currency="BRL"
    >
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default App;
