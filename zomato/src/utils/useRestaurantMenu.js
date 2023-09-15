import { useEffect, useState } from "react";
import {
  MENU_API,
  RESTAURANT_TYPE_KEY,
  IMG_CDN_URL,
  CDN_URL,
  MENU_ITEM_TYPE_KEY,
  ITEM_IMG_CDN_URL,
} from "../utils/constant";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);

    const json = await data.json();

    console.log(json?.data?.cards,'menu');

    const restaurantData=
    json?.data?.cards
    ?.map((x)=>x.card)
    .find((x)=> x && x.card["@type"]=== RESTAURANT_TYPE_KEY)?.card?.info || null;

    setResInfo(restaurantData)
    
  };

  return resInfo;
};

export default useRestaurantMenu;
