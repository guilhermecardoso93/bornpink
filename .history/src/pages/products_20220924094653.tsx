import { Header } from "../components/Header";
import { ProductsContainer, ProductsInfo } from "../styles/pages/products";
import BlackVer from "../assets/black/black.png";
import Image from "next/image";
import { Handbag } from "phosphor-react";

export default function Products() {
  return (
    <>
      <Header />
      <ProductsContainer>
        <h1>Products</h1>

        <ProductsInfo>
            <Image src={BlackVer} alt="black" width="300" height="400" />
            <div>
              <h2>Born Pink - Black Version</h2>
              <span>R$ 290,90</span>
              <button>
                Add to Cart
                <Handbag size={20} />
              </button>
            </div>
        </ProductsInfo>
      </ProductsContainer>
    </>
  );
}
