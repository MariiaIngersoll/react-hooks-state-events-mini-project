import React from "react";

function CategoryFilter({ categories, handleClick }) {
   function renderButtons() {
    return categories.map((category) => {
      return <button onClick={handleClick} key={category}>{category}</button>
    })
   }
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {renderButtons()}
    </div>
  );
}

export default CategoryFilter;
