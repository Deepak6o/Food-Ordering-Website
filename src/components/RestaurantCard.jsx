import { IMG_CDN } from "../config";
const RestaurantCard = ({ name, cuisines, avgRating, cloudinaryImageId }) => {
  // const {name,cuisines,avgRating,cloudinaryImageId}=restaurant.data;

  return (
    <div className="card">
      <img src={IMG_CDN + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines.join(",")}</h3>
      <h3>{avgRating} stars</h3>
    </div>
  );
};
export default RestaurantCard;
