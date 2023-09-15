import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import {
  MENU_API,
  RESTAURANT_TYPE_KEY,
  IMG_CDN_URL,
  CDN_URL,
  MENU_ITEM_TYPE_KEY,
  ITEM_IMG_CDN_URL,
} from "../utils/constant";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useRestaurantMenuItem from "../utils/useRestaurantMenuItem";
import CategorieItems from "./CategorieItems";

const RestaurantMenu = () => {
  const { resId } = useParams();
  //restauarant basic details
  const resInfo = useRestaurantMenu(resId);
  // restaurant menu items
  const menuItems = useRestaurantMenuItem(resId);

  console.log(menuItems,"meuitem");

  const [showIndex,setShowIndex]=useState(0)

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage, cloudinaryImageId } = resInfo;

  // const {itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card

  // console.log(itemCards);

  return (
    <>
      <div className="text-center">
      <h1  className="font-extrabold font-mono my-6 text-2xl">{name}</h1>
       <div className="flex justify-center">
       <img
          src={CDN_URL + cloudinaryImageId}
          alt={name}
        />
       </div>
        
        
        <p  className="font-bold text-lg">
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
        <h2>Menu</h2>

{/* categories accoridion  */}
        {
          menuItems.map((item,index)=>(
            <CategorieItems  
            showItems={index=== showIndex ? true :false}
            setShowIndex={()=>setShowIndex(index)}
            key={item.title} 
            data={item} />
          ))
        }

       
      </div>
    </>
  );
};

export default RestaurantMenu;