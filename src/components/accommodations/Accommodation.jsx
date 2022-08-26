import React from "react";
import { useParams } from "react-router-dom";

function Accommodation() {
  const { id } = useParams();

  return <h1>{id}</h1>;
}

export default Accommodation;
