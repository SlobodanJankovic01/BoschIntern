import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function AddToCart(props) {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart(props.proizvod, props.brProizvoda);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <button onClick={props.minus}>-</button>
        <span>{props.brProizvoda}</span>
        <button onClick={props.plus}>+</button>
      </div>
      <Link to="/cart">
        <button disabled={props.brProizvoda === 0} onClick={handleAdd}>
          Add
        </button>
      </Link>
    </div>
  );
}

export default AddToCart;
