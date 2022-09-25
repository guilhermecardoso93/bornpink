import { Header } from "../../components/Header";
import { useShoppingCart } from "use-shopping-cart";
import { stripe } from "../../lib/stripe";
import { useState } from "react";
import { ProductsContainer, ProductsInfo } from "../../styles/pages/products";
import BlackVer from "../assets/black/black.png";
import Image from "next/image";
import { Handbag } from "phosphor-react";

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
          <Image src={BlackVer} alt="black" width="300" height="400" />
          <div>
            <h2>{product.name}</h2>
            <h3>R$ 290,90</h3>
            <button>
              Add to Cart
              <Handbag size={24} />
            </button>
          </div>
        </ProductsInfo>
      </ProductsContainer>
    </>
  );
}
