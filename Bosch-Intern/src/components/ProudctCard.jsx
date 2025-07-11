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
      <img src={props.proizvod.slika} alt="Slika proizvoda" />
      <h2>{props.proizvod.naziv}</h2>
      <p>{props.proizvod.kratakOpis}</p>
      <h3>{props.proizvod.cena}</h3>
      <button>Add to cart</button>
      <button onClick={handleMinusClick}>-</button>
      <span>{brProizvoda}</span>
      <button onClick={handlePlusClick}>+</button>
    </div>
  );
}

export default ProudctCard;
