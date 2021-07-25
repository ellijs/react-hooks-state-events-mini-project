import React from "react";
import Button from "./Button"

function CategoryFilter({ categories, handleFilter }) {


  const categoryBtn = categories.map((category) => <Button key={category} category={category} handleFilter={handleFilter}/>)

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryBtn}
    </div>
  );
}

export default CategoryFilter;
