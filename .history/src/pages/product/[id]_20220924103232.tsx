import { Header } from "../../components/Header";
import { useShoppingCart } from "use-shopping-cart";
import { stripe } from "../../lib/stripe";
import { useState } from "react";
import { ProductsContainer, ProductsInfo } from "../../styles/pages/products";
import BlackVer from "../assets/black/black.png";
import Image from "next/image";
import { Handbag } from "phosphor-react";
import Stripe from "stripe";
import { GetStaticPaths, GetStaticProps } from "next";

interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    priceNum: number;
    defaultPriceId: string;
  };
}

export default function Products({ product }: ProductProps) {
  const { addItem, shouldDisplayCart } = useShoppingCart();
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false);

  function handleAddProduct() {
    addItem({
      name: product.name,
      id: product.id,
      price: product.priceNum,
      price_id: product.defaultPriceId,
      image: product.imageUrl,
      currency: "BRL",
    });
    console.log("added");
  }
    
  return (
    <>
      <Header />
      <ProductsContainer>
        <h1>Products</h1>

        <ProductsInfo>
          <Image src={product.imageUrl} alt="" width="300" height="400" />
          <div>
            <h2>{product.name}</h2>
            <h3>{product.price}</h3>
            <button onClick={handleAddProduct}>
              Add to Cart
              <Handbag size={24} />
            </button>
          </div>
        </ProductsInfo>
      </ProductsContainer>
    </>
  );
}


export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });

  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(price.unit_amount / 100),
        defaultPriceId: price.id,
        priceNum: price.unit_amount,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hora no cache
  };
};
