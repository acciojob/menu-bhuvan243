import React from "react";
import { capitalizeFirstLetter } from "./functions";

const Card = ({item}) => {
  return (
    <div className="card">
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
};
export default Card;
