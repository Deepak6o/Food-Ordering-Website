import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../config";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function filterData(searchText,allRestaurants){
  const filterData =allRestaurants.filter((restaurant)=> restaurant.data.name.toLowerCase().includes(searchText.toLowerCase()));
  return filterData;
}


const Body = () => {
  const [allRestaurants,setAllRestaurants] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [searchText,setSearchText]=useState("")

  useEffect(()=>{
    getRestaurants();
  },[])

  async function getRestaurants(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.9002695&lng=75.8581159&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilterRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
  if(!allRestaurants) return null;
    // if(filterRestaurants.length===0) return <h1>No restaurants match your filter</h1>
  

  return (allRestaurants?.length===0)? (<Shimmer/>) : (
    <>
      <div className="Search-bar">
        <input
          type="text"
          placeholder=" Search here..."
          value={searchText}
         onChange={(e)=>{
          setSearchText(e.target.value)
         }}
        ></input>
        <button onClick={()=>{
          const data = filterData(searchText,allRestaurants);
          setFilterRestaurants(data);
        }}> 🔍 Find Food</button>
      </div>
      <div className="restaurant-list">
        {/* <RestaurantCard {...restaurantList[0].data}/> */}
        {filterRestaurants.map((restaurant) => {
          return (
            <Link to={"/restaurant/" + restaurant?.data?.id}><RestaurantCard {...restaurant.data} key={restaurant?.data?.id}/></Link>
          );
        })}
      </div>
    </>
  );
};
export default Body;
