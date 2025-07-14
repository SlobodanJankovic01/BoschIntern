import { useCart } from "../context/CartContext";
import styles from "./Cart.module.css";
import BackButton from "../components/BackButton";

function Cart() {
  const { cartItems, totalPrice, updateQuantity, removeFromCart } = useCart();

  if (cartItems.length === 0)
    return (
      <>
        <BackButton />
        <p>Korpa je prazna.</p>
      </>
    );

  return (
    <div className={styles.cartContainer}>
      <BackButton />

      <h2>Korpa</h2>
      <ul className={styles.cartList}>
        {cartItems.map((item) => (
          <li key={item.id} className={styles.cartItem}>
            <h3>Naziv proizvoda: {item.name}</h3>
            <p>Cena: {item.price.toFixed(2)} RSD</p>
            <p>
              Količina:
              <input
                type="number"
                min={1}
                value={item.quantity}
                onChange={(e) =>
                  updateQuantity(item.id, Number(e.target.value))
                }
              />
            </p>
            <p>Ukupno: {item.total.toFixed(2)} RSD</p>
            <button onClick={() => removeFromCart(item.id)}>Ukloni</button>
          </li>
        ))}
      </ul>
      <h3 className={styles.total}>Ukupna cena: {totalPrice.toFixed(2)} RSD</h3>
    </div>
  );
}

export default Cart;
