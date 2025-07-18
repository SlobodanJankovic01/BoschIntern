import { useState } from "react";
import styles from "./ProductCard.module.css";
import { Link } from "react-router-dom";
import AddToCart from "./AddToCart";

function ProudctCard({ proizvod, viewMode }) {
  const [brProizvoda, setBrProizvoda] = useState(0);
  const cardClass = `${styles.card} ${
    viewMode === "list" ? styles.listView : styles.gridCard
  }`;

  function handlePlusClick() {
    setBrProizvoda((prevBr) => prevBr + 1);
  }

  function handleMinusClick() {
    setBrProizvoda((prevBr) => (prevBr > 0 ? prevBr - 1 : 0));
  }

  return (
    <div className={cardClass}>
      <div className={styles.imageContainer}>
        <Link to={`/product/${proizvod.id}`}>
          {console.log("Putanja slike:", proizvod.images[0])}
          <img src={proizvod.images[0]} alt="Slika proizvoda" />
        </Link>
      </div>

      <div className={styles.cardContent}>
        <h2>{proizvod.name}</h2>
        <p>{proizvod.shortDescription}</p>
      </div>

      <div className={styles.cardFooter}>
        <h3>Cena: {proizvod.price}</h3>
        <AddToCart
          brProizvoda={brProizvoda}
          minus={handleMinusClick}
          plus={handlePlusClick}
          proizvod={proizvod}
        />
      </div>
    </div>
  );
}

export default ProudctCard;
