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
        <Image src={entry.image} width={320}
                  height={320} alt={entry.name} />
        <div>
          <h2>{entry.name}</h2>
          <span>
            {entry.formattedValue} | Qtd. {entry.quantity}
          </span>
          <button onClick={() => removeItem(entry.id)}>Remover</button>
        </div>
      </ProductsInfo>
    </CartEntryContainer>
  );
}
