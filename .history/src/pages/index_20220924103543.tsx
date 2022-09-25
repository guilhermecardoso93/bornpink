import Image from "next/image";
import { Header } from "../components/Header";
import { useShoppingCart } from "use-shopping-cart";
import { HomeContainer } from "../styles/pages/app";
import HomeBack from "../../src/assets/blackpink_members_pink_venom.png";
import LogoPink from "../../src/assets/logo4.svg";

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

export default function Home({ products }: HomeProps) {
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
      <HomeContainer>
        <Image src={LogoPink} alt="" />
        <Image src={HomeBack} alt="" />
      </HomeContainer>
    </>
  );
}
