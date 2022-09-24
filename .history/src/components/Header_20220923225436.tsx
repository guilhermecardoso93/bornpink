import Image from "next/image";
import Link from "next/link";
import { Handbag } from "phosphor-react";
import Logo from "../assets/logo.png";
import { HeaderContainer } from "../styles/pages/app";

export function Header() {
  return (
    <HeaderContainer>
      <Link href={"/"}>
        <Image src={Logo} alt="" width="30%" height="25rem" />
      </Link>
      <div>
        <Link href={"/"}>
          Tracklist
        </Link>
        <Link href={"/"}>
          Products
        </Link>
        <button>
          <Handbag size={24} weight="bold" />
        </button>
      </div>
    </HeaderContainer>
  );
}

//{cartCount > 1 ? <CartCount>{cartCount}</CartCount> : ""}
