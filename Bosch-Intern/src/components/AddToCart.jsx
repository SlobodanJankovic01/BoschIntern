import { useCart } from "../context/CartContext";

function AddToCart(props) {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart(props.proizvod, props.brProizvoda);
  };

  return (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <button onClick={props.minus}>-</button>
      <span>{props.brProizvoda}</span>
      <button onClick={props.plus}>+</button>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default AddToCart;
