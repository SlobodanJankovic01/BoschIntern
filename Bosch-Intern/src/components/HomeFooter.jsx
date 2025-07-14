function HomeFooter({ currentPage, setCurrentPage, totalItems, itemsPerPage }) {
  const max = Math.ceil(totalItems / itemsPerPage);

  return (
    <div style={{ marginTop: "20px" }}>
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage((p) => p - 1)}
      >
        Prethodna
      </button>
      <span style={{ margin: "0 10px" }}>{currentPage}</span>
      <button
        disabled={currentPage >= max}
        onClick={() => setCurrentPage((p) => p + 1)}
      >
        Sledeća
      </button>
    </div>
  );
}

export default HomeFooter;
