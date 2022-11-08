import React from "react";
import Book from "../component/Book";

function Home() {
  return (
    <div className="bungkus">
      <div className="isi py-5">
        <h1>BELI ATAU BACA BUKU PRAKTIS HANYA DISINI</h1>
      </div>
      <Book />
    </div>
  );
}

export default Home;
