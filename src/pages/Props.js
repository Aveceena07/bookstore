import React, { useState } from "react";
import Book from "../component/Book";

function Props() {
  const [books, setBooks] = useState[{ id: 1, name: "hahahaha" }];

  return (
    <div>
      <Book books={books} />
    </div>
  );
}

export default Props;
