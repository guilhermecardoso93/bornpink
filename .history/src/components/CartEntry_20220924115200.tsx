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
        <Image src={entry.image} width={84} height={84} alt={entry.name} />
        <div>
          <h1>{entry.name}</h1>
          <span>
            {entry.formattedValue} | Qtd. {entry.quantity}
          </span>
          <button onClick={() => removeItem(entry.id)}>Remover</button>
        </div>
      </ProductsInfo>
    </CartEntryContainer>
  );
}
