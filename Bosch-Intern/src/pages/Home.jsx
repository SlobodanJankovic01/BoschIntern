import React from "react";

function Home() {
  let proizvod = {
    naziv: "Busilica",
    slika: "https://example.com/busilica.jpg",
    kratakOpis: "Ovo je kratki opis busilice.",
    cena: 10000,
  };

  return (
    <div>
      <ProudctCard proizvod={proizvod} />
    </div>
  );
}

export default Home;
