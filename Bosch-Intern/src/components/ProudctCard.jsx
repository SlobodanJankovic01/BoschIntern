import { useState } from "react";
import styles from "./ProductCard.module.css";

function ProudctCard(props) {
  const [brProizvoda, setBrProizvoda] = useState(0);

  function handlePlusClick() {
    setBrProizvoda((prevBr) => prevBr + 1);
  }

  function handleMinusClick() {
    setBrProizvoda((prevBr) => (prevBr > 0 ? prevBr - 1 : 0));
  }

  return (
    <div className={styles.card}>
      <img src={props.proizvod.images[0]} alt="Slika proizvoda" />
      <h2>{props.proizvod.name}</h2>
      <p>{props.proizvod.shortDescription}</p>
      <h3>{props.proizvod.price}</h3>
      <div className="buttons">
        <button>Add to cart</button>
        <button onClick={handleMinusClick}>-</button>
        <span>{brProizvoda}</span>
        <button onClick={handlePlusClick}>+</button>
      </div>
    </div>
  );
}

export default ProudctCard;
