import React from "react";

function AddToCart(props) {
  return (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <button onClick={props.minus}>-</button>
      <span>{props.brProizvoda}</span>
      <button onClick={props.plus}>+</button>
      <button>Add</button>
    </div>
  );
}

export default AddToCart;
