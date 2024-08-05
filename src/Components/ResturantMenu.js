import React, { useState } from 'react';
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useResturantMenu from "../Utils/useResturantMenu";
import MenuCategory from "./MenuCategory";

const ResturantMenu = () => {
  const { resId } = useParams();
  const menuInfo = useResturantMenu(resId); // Custom Hook which is getting menu data by API call
  const [showIndex, setShowIndex] = useState(-1);

  if (!menuInfo) return <Shimmer />;

  const {
    name,
    cuisines,
    locality,
    costForTwoMessage,
    avgRating,
  } = menuInfo?.cards[2]?.card?.card?.info;

  const categories = menuInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="menu">
      <h1>{name}</h1>
      <div className="res-detail">
        <h4>{avgRating}⭐</h4>
        <h5>{cuisines.join(",")}</h5>
        <h6>Outlet: {locality}</h6>
      </div>
      {/* Categories Accordions */}
      <div className="Menu-detail">
        <h1>Menu</h1>
        {categories.map((category, index) => (
          <MenuCategory
            key={category?.card?.card.title}
            data={category?.card?.card}
            showIndex={showIndex}
            setShowIndex={setShowIndex}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default ResturantMenu;
