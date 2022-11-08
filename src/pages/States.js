import React, { useState } from "react";
import { Button } from "react-bootstrap";

function States() {
  const [hitung, setHitung] = useState(0);
  const [movies, setmovies] = useState("pengabdi setan");

  const addHitung = () => {
    setHitung(hitung + 1);
  };

  const minHitung = () => {
    setHitung(hitung - 1);
  };

  const changeMovie = () => {
    setmovies("pengabdi comber");
  };

  return (
    <div>
      <h1>States : {hitung}</h1>
      <Button onClick={addHitung} variant="primary">
        Add
      </Button>
      {""}
      <Button onClick={minHitung} variant="danger">
        Min
      </Button>
      <br />
      <h1>Film : {movies}</h1>
      <Button onClick={changeMovie} variant="success">
        Change
      </Button>
    </div>
  );
}

export default States;
