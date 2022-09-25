import { Header } from "../components/Header";
import { stripe } from "../lib/stripe";
import { useShoppingCart } from "use-shopping-cart";
import { ProductsContainer, ProductsInfo } from "../styles/pages/products";
import BlackVer from "../assets/black/black.png";
import Image from "next/image";
import { Handbag } from "phosphor-react";
import { GetStaticProps } from "next";
import Stripe from "stripe";
import Link from "next/link";

interface ProductProps {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  priceId: string;
  priceNum: number;
}
interface HomeProps {
  products: ProductProps[];
}

export default function Products({ products }: HomeProps) {
  const { addItem, shouldDisplayCart } = useShoppingCart();

  function handleAddProduct(product: ProductProps) {
    addItem({
      name: product.name,
      id: product.id,
      price: product.priceNum,
      price_id: product.priceId,
      image: product.imageUrl,
      currency: "BRL",
    });
  }

  return (
    <>
      <Header />
      <ProductsContainer>
        <h1>Products</h1>
        <ProductsInfo>
          {products?.map((product) => {
            <div>
              return (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                prefetch={false}
              >
                <Image src={product.imageUrl} width={520} height={520} alt="" />
                <h2>{product.name}</h2>
                <h3>{product.price}</h3>
                <button onClick={() => handleAddProduct(product)}>
                  Add to Cart
                  <Handbag size={24} />
                </button>
              </Link>
              );
            </div>;
          })}
        </ProductsInfo>
      </ProductsContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      priceNum: price.unit_amount,
      priceId: price.id,
      price: new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(price.unit_amount / 100),
    };
  });
  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2,
  };
};
