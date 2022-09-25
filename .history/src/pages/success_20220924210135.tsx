import { GetServerSideProps } from "next";
import Link from "next/link";
import { stripe } from "../lib/stripe";
import { ImageContainer, ImageList } from "../styles/pages/success";
import { SuccessContainer } from "../styles/pages/success";
import Stripe from "stripe";
import Image from "next/future/image";
import { Header } from "../components/Header";

interface SuccessProps {
  customerName: string;
  products: {
    name: string;
    imageUrl: string;
  }[];
}
export default function Success({ customerName, products }: SuccessProps) {
  return (
    <>
      <Header />
      <SuccessContainer>
        <h1>Done! Tank you!</h1>
        <ImageList>
          {products.map((product) => {
            return (
              <ImageContainer key={product.name}>
                <Image
                  src={product.imageUrl}
                  width={120}
                  height={110}
                  alt={product.name}
                />
              </ImageContainer>
            );
          })}
        </ImageList>
        <p>
          Uhuul <strong>{customerName}</strong>, sua compra de {products.length}{" "}
          {products.length > 1 ? "camisetas" : "camiseta"}.
        </p>

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id || query.session_id.length === 0) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
      props: {},
    };
  }

  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  if (!session.id) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
      props: {},
    };
  }
  const customer = session.customer_details.name;
  const products = session.line_items.data.map((entry) => {
    const product = entry.price.product as Stripe.Product;
    return {
      name: product.name,
      imageUrl: product.images[0],
    };
  });

  return {
    props: {
      customerName: customer,
      products,
    },
  };
};
