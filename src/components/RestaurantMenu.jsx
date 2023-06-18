import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN } from "../config";

const Restaurantmenu = () => {
  const { resId } = useParams();
    // const {resId} =params;
    const [restaurantInfo,setRestaurantInfo] = useState(null);

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  async function getRestaurantMenu(){
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.9002695&lng=75.8581159&restaurantId=${resId}&submitAction=ENTER`
    );    
    const json = await data.json();
    setRestaurantInfo(json?.data?.cards[0]?.card?.card?.info);
    console.log(json.data);
  }

  return(
    <div>
        <h1>Restaurantmenu id :{resId}</h1>
         <h2>{restaurantInfo?.name}</h2>
        <img src={IMG_CDN + restaurantInfo?.cloudinaryImageId} />
        <h3>{restaurantInfo?.area}</h3>
        <h3>{restaurantInfo?.city}</h3>
        <h3>{restaurantInfo?.avgRating} stars</h3>
        
    </div>
  );
};
export default Restaurantmenu;
