import { Header } from "../components/Header";
import { useShoppingCart } from "use-shopping-cart";
import { ProductsContainer, ProductsInfo } from "../styles/pages/products";
import BlackVer from "../assets/black/black.png";
import Image from "next/image";
import { Handbag } from "phosphor-react";

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
          <Image src={BlackVer} alt="black" width="300" height="400" />
            {products.map((product) => {
              return (
                <div key={product.id}>
                  <h2>Born Pink - Black Version</h2>
                  <h3>R$ 290,90</h3>
                  <button>
                    Add to Cart
                    <Handbag size={24} />
                  </button>
                </div>
              );
            })}
        </ProductsInfo>
      </ProductsContainer>
    </>
  );
}
