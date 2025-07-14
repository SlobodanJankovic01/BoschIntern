import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function HomeHeader({
  search,
  setSearch,
  sort,
  setSort,
  itemsPerPage,
  setItemsPerPage,
  handleView,
  list,
  filteredCount,
}) {
  const { totalItems } = useCart();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        marginBottom: "20px",
      }}
    >
      <div className="search-bar">
        <input
          type="text"
          placeholder="Pretraži proizvode..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {search && <button onClick={() => setSearch("")}>Obriši</button>}
        <p>Pronađeno: {filteredCount} proizvoda</p>
        <button onClick={handleView}>
          {list ? "Mrežni prikaz" : "Prikaz liste"}
        </button>
      </div>

      <div>
        <select onChange={(e) => setSort(e.target.value)} value={sort}>
          <option value="">Sortiraj</option>
          <option value="priceASC">Cena (rastuce)</option>
          <option value="priceDSC">Cena (opadajuce)</option>
          <option value="nameAZ">Naziv (A-Z)</option>
          <option value="nameZA">Naziv (Z-A)</option>
        </select>

        <select
          onChange={(e) => setItemsPerPage(+e.target.value)}
          value={itemsPerPage}
        >
          <option value={5}>5 po strani</option>
          <option value={10}>10 po strani</option>
          <option value={15}>15 po strani</option>
          <option value={20}>20 po strani</option>
        </select>

        <Link to="/cart">🛒 Korpa ({totalItems})</Link>
      </div>
    </div>
  );
}

export default HomeHeader;
