import React, { useEffect, useState } from "react";
import "./App.css";
const App = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, settotalPages] = useState(0);

  const fetchData = async () => {
    const res = await fetch(
      `https://dummyjson.com/products?limit=10&skip=${page * 10 - 10}`
    );
    const data = await res.json();
    console.log(data);
    if (data && data.products) {
      setProducts(data.products);
      settotalPages(Math.ceil(data.total / 10));
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);
  console.log(totalPages);
  
  const selectPageHandler = (no) => {
    setPage(no);
  };

  const handlePrevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  return (
    <div>
      {products.length > 0 && (
        <div className="products">
          {products.map((product, id) => (
            <span className="products__single" key={id}>
              <img src={product.thumbnail} alt={product.title} />
              <span>{product.title}</span>
            </span>
          ))}
        </div>
      )}
      {products.length > 0 && (
        <div className="pagination">
          <span
            className={page > 1 ? "" : "pagination__disable"}
            onClick={handlePrevPage}
          >
            ◀️
          </span>

          {[...Array(totalPages)].map((_, index) => (
            <span
              className={page === index + 1 ? "pagination__selected" : ""}
              onClick={() => selectPageHandler(index + 1)}
              key={index}
            >
              {index + 1}
            </span>
          ))}

          <span
            className={page < totalPages ? "" : "pagination__disable"}
            onClick={handleNextPage}
          >
            ▶️
          </span>
        </div>
      )}
    </div>
  );
};

export default App;
