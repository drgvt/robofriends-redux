import React from "react";
import Card from "./Card";
const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map((zero, i) => {
        // zero parameter is not used, we need index only
        return (
          <Card
            key={i}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
