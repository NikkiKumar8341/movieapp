import React, { useEffect, useState } from 'react'
import { MENU_API,RESTAURANT_TYPE_KEY,IMG_CDN_URL, CDN_URL,MENU_ITEM_TYPE_KEY,ITEM_IMG_CDN_URL } from '../utils/constant';


const useMenuUnique = (resId) => {


    const[uniqueMenuItems,setUniqueMenuItems]=useState([])

    useEffect(()=>{

    },[])


    const fetchMenuUnique=async()=>{

        const data=await fetch(MENU_API+resId)
        const json=await data.json();

        console.log(json,"uniquemenu")

        setUniqueMenuItems(json.data)

    }




  return uniqueMenuItems
}

export default useMenuUnique