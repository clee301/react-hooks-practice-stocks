import React, { useEffect, useState } from "react";
import Stock from "./Stock";

function StockContainer() {

const [stockItem, setStockItem] = useState([])

useEffect(() => {
  fetch(`http://localhost:3001/stocks`)
    .then((r) => r.json())
    .then((data) => {
      console.log(data);
      setStockItem(data);
    })
}, [])

  return (
    <div>
      <h2>Stocks</h2>
      {stockItem.map((item) => (
        <Stock key={item.id} item={item} />
      ))}
    </div>
  );
}

export default StockContainer;
