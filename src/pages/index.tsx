import Image from "next/image";
import { Header } from "../components/Header";
import { HomeContainer } from "../styles/pages/app";
import HomeBack from "../../src/assets/blackpink_members_pink_venom.png";
import LogoPink from "../../src/assets/logo.png";

export default function Home() {
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
