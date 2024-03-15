import React, { useState } from "react";
import "./../styles/App.css";
import menuList from "./../data/menuList.json";
import { capitalizeFirstLetter } from "./functions";
import Card from "./Card";
import CategoryButton from "./CategoryButton";

const App = () => {
  const [displayList, setDisplayList] = useState(menuList);
  const [activeCategory, setActiveCategory] = useState("all");
  //   const categories = ["all", "breakfast", "lunch", "shakes"];
  console.log("Active category ", activeCategory);
  const categories = [
    { type: "all", id: "all", data_test_id: "menu-item-all" },
    {
      type: "breakfast",
      id: "filter-btn-1",
      data_test_id: "menu-item-breakfast",
    },
    { type: "lunch", id: "filter-btn-2", data_test_id: "menu-item-lunch" },
    { type: "shakes", id: "filter-btn-3", data_test_id: "menu-item-shakes" },
  ];
  function showMenu(event) {
    const selectedCategory = event.target.getAttribute("name");

    if (selectedCategory === "all") {
      setDisplayList(menuList);
    } else {
      const filteredList = menuList.filter(
        (item) => item.category === selectedCategory
      );
      setDisplayList(filteredList);
    }
    const selectedCategoryId = event.target.className;
    setActiveCategory(selectedCategoryId);
  }
  return (
    <div>
      <h1>Our Menu</h1>
      <ul>
        {categories.map((category, index) => (
          <CategoryButton
            category={category}
            key={index}
            showMenu={showMenu}
            activeCategory={activeCategory}
          />
        ))}
      </ul>
      <div className="menu-container">
        {displayList.map((item, index) => (
          <Card item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default App;
