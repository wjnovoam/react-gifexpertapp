import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = props => {
  const [categories, setCategories] = useState(["One punch"]);

  /* const handleAdd = e => {
    //Primera forma
    // setCategories([...categories, "Hola mundo"]);
    //Segunda forma
    setCategories(cats => [...categories, "Hola mundo"]);
  };*/

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map(category => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
