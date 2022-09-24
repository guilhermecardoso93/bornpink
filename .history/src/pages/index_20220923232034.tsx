import Image from "next/image";
import { Header } from "../components/Header";
import { HomeContainer } from "../styles/pages/app";
import { gallery } from "../utils/gallery";

export default function Home(){
  return (
    <>
      <Header/>
      <HomeContainer>
        {
          gallery.map((image) => {
            return (
              <Image src={image} alt="" key={image} width="300" height='300'/>
            )
          })
        }
      </HomeContainer>
    </>
  )
}