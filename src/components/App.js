import React, { useState } from "react";
import "./../styles/App.css";
import menuList from "./../data/menuList.json";

const App = () => {
  const [displayList, setDisplayList] = useState(menuList);
  const categories = ["all", "breakfast", "lunch", "shakes"];
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
          <li name={category} key={index} onClick={showMenu}>
            {category}
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
                  <h5>{item.title}</h5>
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
