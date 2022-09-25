import Image from "next/image";
import { Header } from "../components/Header";
import { useShoppingCart } from "use-shopping-cart";
import { HomeContainer } from "../styles/pages/app";
import HomeBack from "../../src/assets/blackpink_members_pink_venom.png";
import LogoPink from "../../src/assets/logo4.svg";
import { Cart } from "../components/Cart";


export default function Home() {
  const { addItem, shouldDisplayCart } = useShoppingCart();

 
  return (
    <>
      <Header />
      <HomeContainer>
        <Image src={LogoPink} alt="" />
        <Image src={HomeBack} alt="" />
      </HomeContainer>
      {shouldDisplayCart && <Cart />}
    </>
  );
}
