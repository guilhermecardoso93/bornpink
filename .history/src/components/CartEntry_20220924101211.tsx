import Image from "next/future/image";
import { CartActions, CartEntry as ICartEntry } from "use-shopping-cart/core";
import BlackVer from "../assets/black/black.png";
import { CartEntryContainer, ProductsInfo } from "../styles/pages/cartEntry";

export function CartEntry({
  entry,
  removeItem,
}: {
  entry: ICartEntry;
  removeItem: CartActions["removeItem"];
}) {
  return (
    <CartEntryContainer>
      <ProductsInfo>
        <Image src={BlackVer} alt="black" width="300" height="400" />
        <div>
          <h2>Born Pink - Black Version</h2>
          <h3>R$ 290,90</h3>
          <span>
            {entry.formattedValue} | Qtd. {entry.quantity}
          </span>
          <button onClick={() => removeItem(entry.id)}>Remover</button>
        </div>
      </ProductsInfo>
    </CartEntryContainer>
  );
}
