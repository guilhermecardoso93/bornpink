import { Header } from "../components/Header";
import { ProductsContainer } from "../styles/pages/products";
import BlackVer from "../assets/black/black.png";
import Image from "next/image";

export default function Products() {
  return (
    <>
      <Header />
      <ProductsContainer>
        <h1>Products</h1>

        <div>
          <div>
            <Image src={BlackVer} alt="black" width="300" height="400" />
            <div>
              <h4>Born Pink - Black Version</h4>
              <span>R$ 290,90</span>
              <button>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </ProductsContainer>
    </>
  );
}
