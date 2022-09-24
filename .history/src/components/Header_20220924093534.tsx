import Image from "next/image";
import Link from "next/link";
import { Handbag } from "phosphor-react";
import Logo from "../assets/logo3.png";
import { HeaderContainer } from "../styles/pages/app";

export function Header() {
  return (
    <HeaderContainer>
      <Link href={"/"}>
        <Image src={Logo} alt="" width="200%" height="100%" />
      </Link>
      <div>
        <Link href={"/tracklist"}>Tracklist</Link>
        <Link href={"/products"}>Products</Link>
        <button>
          <Handbag size={20} />
        </button>
      </div>
    </HeaderContainer>
  );
}

//{cartCount > 1 ? <CartCount>{cartCount}</CartCount> : ""}
