import React from "react";

function Stock({ item }) {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">{item.ticker}: {item.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
