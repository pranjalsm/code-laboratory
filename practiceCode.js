import React, { useState } from "react";
import { data } from "./data/mockData"; // your mock file

export default function ProductList() {
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  // ✅ SEARCH (filter by product or name)
  const filtered = data.filter(item =>
    item.product.toLowerCase().includes(search.toLowerCase()) ||
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  // ✅ SORT by price
  const sorted = [...filtered].sort((a, b) =>
    sortOrder === "asc" ? a.price - b.price : b.price - a.price
  );

  // ✅ REDUCE (total price)
  const totalPrice = sorted.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: 20 }}>
      <h2>Product List</h2>

      {/* Search box */}
      <input
        placeholder="Search product or name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: 8, marginBottom: 20 }}
      />

      {/* Sort buttons */}
      <div>
        <button onClick={() => setSortOrder("asc")}>Sort Price ↑</button>
        <button onClick={() => setSortOrder("desc")}>Sort Price ↓</button>
      </div>

      <hr />

      {/* ✅ MAP : Display product list */}
      {sorted.map(item => (
        <div key={item.id} style={{ padding: "6px 0" }}>
          <strong>{item.product}</strong> — ₹{item.price}  
          <span style={{ color: "gray" }}> (User: {item.name})</span>
        </div>
      ))}

      <hr />

      {/* ✅ REDUCE result */}
      <h3>Total Price: ₹{totalPrice.toLocaleString()}</h3>
    </div>
  );
}
