import Image from "next/image";
import { Header } from "../components/Header";
import { HomeContainer } from "../styles/pages/app";
import HomeBack from "../../src/assets/blackpink_members_pink_venom.png";
import LogoPink from "../../src/assets/logo4.svg";

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

export default function Home({ product }: ProductProps) {
  const { addItem, shouldDisplayCart } = useShoppingCart();
  
  return (
    <>
      <Header />
      <HomeContainer>
        <Image src={LogoPink} alt=""/>
        <Image src={HomeBack} alt="" />
      </HomeContainer>
    </>
  );
}
