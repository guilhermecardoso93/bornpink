import Image from "next/image";
import Link from "next/link";
import { Handbag } from "phosphor-react";
import Logo from "../assets/logo3.png";
import { CartCount, HeaderContainer } from "../styles/pages/app";
import { useShoppingCart } from "use-shopping-cart";

export function Header() {
  const { handleCartClick, cartCount } = useShoppingCart();

  return (
    <HeaderContainer>
      <Link href={"/"}>
        <Image src={Logo} alt="" width="250" height="100" />
      </Link>
      <div>
        <Link href={"/tracklist"}>Tracklist</Link>
        <Link href={"/products"}>Products</Link>
        <button>
          <Handbag size={20} onClick={handleCartClick}/>
        </button>
         {cartCount > 1 ? <CartCount>{cartCount}</CartCount> : ""}
      </div>
    </HeaderContainer>
  );
}

//{cartCount > 1 ? <CartCount>{cartCount}</CartCount> : ""}
