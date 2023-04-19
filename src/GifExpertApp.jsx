import { useState } from "react";
import { AddCategory, Gifgrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["dragon ball"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>Buscador de Gifs</h1>
      <AddCategory onNewCategory={(event) => onAddCategory(event)} />

      {categories.map((category) => (
        <Gifgrid key={category} category={category} />
      ))}
    </>
  );
};
