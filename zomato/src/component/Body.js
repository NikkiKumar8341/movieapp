import React, { useContext, useEffect, useState } from "react";
import RestaurantCard,{withPromtedLabel} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { type } from "@testing-library/user-event/dist/type";


const Body = () => {
  const [restaurantsData, setRestaurantData] = useState([]);

  const [searchText, setSearchText] = useState("");
  const onlineStatus=useOnlineStatus();

  const RestaurantCardPromoted=withPromtedLabel(RestaurantCard)

  const {loggedInUser,setUserName}=useContext(UserContext)

  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = async () => {
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&page_type=DESKTOP_WEB_LISTING');
    const json = await data.json();
    
    const resdetails= json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;



    console.log(resdetails,"resData");
    

     setRestaurantData(resdetails);
  };
const filterdedata = () =>{

  const filteredRestaurant =  restaurantsData.find(each =>(each.data.name.toLowerCase() == searchText.toLowerCase()))

  filteredRestaurant ?  setRestaurantData([filteredRestaurant]) : setRestaurantData(restaurantsData)

}


if(onlineStatus === false){
  return(
    <h1>
      Looks like you're offline!! Please check your internet connection
    </h1>
  )
}


const handleSearch=()=>{

  const filterdedata1=restaurantsData.filter((res)=>(
    res.data.name.toLowerCase().includes(searchText.toLowerCase())
  ))
  
  filterdedata1.length>0 ?  setRestaurantData(filterdedata1) : setRestaurantData(restaurantsData)

}

const topRated=()=>{
  const filteredList = restaurantsData.length >0 && restaurantsData.filter(
    (res) => res.info.avgRating > 4
  );

  setRestaurantData(filteredList);
}




  return restaurantsData.length === 0 ? (
    <div className="flex flex-row mx-10 flex-wrap justify-evenly">
    {Array(17).fill().map((_,index) => <Shimmer key={index} />)}
  </div>
  )
    
   : (
    <>
      <div className="row">
        <div className="flex justify-center items-center">
          <div className="search m-4 p-4">
            <input
              type="text"
              className="border w-[400px] px-1 border-solid border-black mr-3 "
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              className="px-3 py-1 bg-orange-400 rounded-md"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
          <div  className="flex">     
          <div className="m-4 p-4">
            <button
              className="px-3 py-1 bg-orange-400 rounded-md"
              onClick={topRated}
            >
              Top Rated Restaurants
            </button>
            <input 
             type="text"
             className="border w-[400px] px-1 border-solid border-black mr-3"
             placeholder="userName"
             value={loggedInUser}
             onChange={(e)=> setUserName(e.target.value)}
            />
          </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-evenly">
          {/* {restaurantsData?.map((restaurants) => (
            <>
            {
              restaurants.data.promoted ? <RestaurantCardPromoted resData={restaurants}  key={restaurants.data.id} />: 
              <RestaurantCard   resData={restaurants}  key={restaurants.data.id} />
            }
             
            </>          
          ))} */}
          {
            restaurantsData?.map((restaurants)=>(
              <RestaurantCard   resData={restaurants}  />
            ))
          }
        </div>
      </div>
    </>
  );
};

export default Body;
