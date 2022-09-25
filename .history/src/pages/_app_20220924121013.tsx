import type { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import { CartProvider, useShoppingCart } from "use-shopping-cart";
import { Container } from "../styles/pages/app";

globalStyles();

function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider
      cartMode="checkout-session"
      stripe={process.env.STRIPE_PRIVATE_KEY}
      currency="BRL"
    >
      <Container>
        <Component {...pageProps} />
      </Container>
    </CartProvider>
  );
}

export default App;
