import React, { useEffect, useState } from 'react'
import { MENU_API,RESTAURANT_TYPE_KEY,IMG_CDN_URL, CDN_URL,MENU_ITEM_TYPE_KEY,ITEM_IMG_CDN_URL } from '../utils/constant';



const useRestaurantMenuItem = (resId) => {

    const[menuItems,setMenuItems]=useState([])

    useEffect(()=>{
        fetchData();
    },[])


    const fetchData=async()=>{
        const data=await fetch(MENU_API+resId)

        const json=await data.json();

        

        const menuItemsData =
        json?.data?.cards
        .find((x)=> x.groupedCard)
        ?.groupedCard?.cardGroupMap?.REGULAR?.cards
        ?.map((x)=> x.card?.card)
        ?.filter((x) => x["@type"] == MENU_ITEM_TYPE_KEY)
        // ?.map((x)=> x.itemCards)
        // ?.flat()
        // ?.map((x)=> x.card.info) 
        || null;

        console.log(menuItemsData,"useRestaurantmenuItem")


      //   const uniqueMenuItems = [];
      // menuItemsData.forEach((item) => {
      //   if (!uniqueMenuItems.find(x => x.id === item.id)) {
      //     uniqueMenuItems.push(item);
      //   }
      // })
      setMenuItems(menuItemsData);
    }

  return menuItems
}

export default useRestaurantMenuItem