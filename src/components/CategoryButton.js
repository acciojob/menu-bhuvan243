import React from "react";
import { capitalizeFirstLetter } from "./functions";

const CategoryButton = ({ category, showMenu, activeCategory }) => {
  console.log("Inside category button", activeCategory);
  return (
    <li
      name={category.type}
      id={activeCategory === category.id ? category.id : ""}
      className={activeCategory === category.id ? "" : category.id}
      data-test-id={category.data_test_id}
      onClick={showMenu}
    >
      {capitalizeFirstLetter(category.type)}
    </li>
  );
};

export default CategoryButton;
