import React from "react";
import { CDN_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {loggedInUser}=useContext(UserContext);

  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
    cloudinaryImageId,
    uuid,
    id,
  } = resData?.info  || {};;


  return (
    <div className="res-card m-5 p-5 w-[300px] shadow-lg hover:shadow-[#FC8019]  hover:bg-slate-50">
      <Link to={"/restaurant/" + id}>
        <img
          className="rounded-lg hover:scale-110 hover:border-1 border-rose-600"
          alt="hotel image"
          src={CDN_URL + cloudinaryImageId}
        />
      </Link>
      <h1 className="font-bold py-4 text-xl">{name}</h1>
      <h3 className="pb-2">{cuisines.join(", ")}</h3>

      <div className="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={
            avgRating >= 4.0
              ? { color: "green",fill:'green'}
              : avgRating > 4
              ? { color: "orange",fill:'orange' }
              : avgRating === "--"
              ? { backgroundColor: "white", color: "black" }
              : { color: "red" ,fill:'red'}
          }
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
          />
        </svg>
        <h3
          style={
            avgRating >= 4.0
              ? { color: "green" }
              : avgRating > 4
              ? { color: "orange" }
              : avgRating === "--"
              ? { backgroundColor: "white", color: "black" }
              : { color: "red"}
          }
        >
          {avgRating}
        </h3>
        <h4 className="px-2">{costForTwo}</h4>
      <h4 className="ps-2">{sla.slaString}</h4>
      <h4  className="ps-2">{loggedInUser}</h4>
      </div>

      
    </div>
  );
};

export default RestaurantCard;


//higher order conponent


//input - resturantcard  ==> ResturantCardPromoted


export const withPromtedLabel=(RestaurantCard)=>{

  return (props)=>{
    return(
      <div>
        <label  className='absolute bg-black text-white m-5 p-1 rounded-lg'>Promoted</label>
        <RestaurantCard  {...props}/>
      </div>
    )
  }
}
