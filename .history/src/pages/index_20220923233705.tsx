import Image from "next/image";
import { Header } from "../components/Header";
import { HomeContainer } from "../styles/pages/app";
import HomeBack from '../../src/assets/blackpink_members_pink_venom.png'

export default function Home(){
  return (
    <>
      <Header/>
      <HomeContainer>
              <Image src={HomeBack} alt="" width="300" height='300'/>
      </HomeContainer>
    </>
  )
}