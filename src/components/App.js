import React, { useState } from "react";
import "./../styles/App.css";
import menuList from "./../data/menuList.json";
import { capitalizeFirstLetter } from "./functions";

const App = () => {
  const [displayList, setDisplayList] = useState(menuList);
  //   const categories = ["all", "breakfast", "lunch", "shakes"];
  const categories = [
    { type: "all", id: "all", data_test_id: "menu-item-all" },
    { type: "breakfast", id: "filter-btn-1", data_test_id: "menu-item-breakfast"},
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
  }
  return (
    <div>
      <h1>Our Menu</h1>
      <ul>
        {categories.map((category, index) => (
          <li
            name={category.type}
            id={category.id}
            data-test-id={category.data_test_id}
            key={index}
            onClick={showMenu}
          >
            {capitalizeFirstLetter(category.type)}
          </li>
        ))}
      </ul>
      <div className="menu-container">
        {displayList.map((item, index) => {
          return (
            <div key={index} className="card">
              <img src={item.img} />
              <div>
                <div className="heading">
                  <h5>{capitalizeFirstLetter(item.title)}</h5>
                  <span>${item.price}</span>
                </div>
                <p>{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
