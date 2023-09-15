import React from "react";
import { CDN_URL, ITEM_IMG_CDN_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  console.log(items, "items");

  const dispatch=useDispatch();


  const handleAddItem=(item)=>{

    //dispatch an action 

    dispatch(addItem(item));
  }

  return (
    <>
      {items.map((item) => (
        <div
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
          key={item.card.info.id}
        >
          <div>
            <div className="w-9/12">
              <span className="font-semibold">{item.card.info.name}</span>
              <span className="px-2 font-extrabold">
                {item.card.info.price > 0
                  ? new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: "INR",
                    }).format(item?.card?.info?.price / 100)
                  : " "}
              </span>
            </div>
            <p className="text-xs">{item?.card?.info?.description}</p>
          </div>
          <div className="w-3/12 relative">
            
            <div className="absolute ">
            <button  className="p-1 mx-16 bg-white shadow-lg rounded-lg "  onClick={()=>handleAddItem(item)}> Add+</button>
            </div>
            {item?.card?.info?.imageId ? (
              <img
              className="w-full"
                src={ITEM_IMG_CDN_URL + item?.card?.info?.imageId}
                alt={item?.name}
              />
            ) : (
              <></>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default ItemList;
