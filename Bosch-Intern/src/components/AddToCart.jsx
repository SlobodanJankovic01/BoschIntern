import React from "react";

function AddToCart(props) {
  return (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <button>Add to cart</button>
      <button onClick={props.minus}>-</button>
      <span>{props.brProizvoda}</span>
      <button onClick={props.plus}>+</button>
    </div>
  );
}

export default AddToCart;
