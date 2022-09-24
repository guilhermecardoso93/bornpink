import Image from "next/image";
import Link from "next/link";
import { Handbag } from "phosphor-react";
import Logo from "../assets/logo.png";
import { HeaderContainer } from "../styles/pages/app";

export function Header() {
  return (
    <HeaderContainer>
      <Link href={"/"}>
        <Image src={Logo} alt="" width="110%" height="50%" />
      </Link>
      <div>
        <Link href={"/tracklist"}>Tracklist</Link>
        <Link href={"/"}>Products</Link>
        <button>
          <Handbag size={20} />
        </button>
      </div>
    </HeaderContainer>
  );
}

//{cartCount > 1 ? <CartCount>{cartCount}</CartCount> : ""}
