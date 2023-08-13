import { CDN_URL } from "../utils/constants";

const RestaurentCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    sla,
    costForTwo,
  } = resData?.info;
  return (
    <div className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-400">
      <img
        className="w-52 h-52 rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4 className="break-words">{cuisines.join(",")}</h4>
      <div className="res-details">
        <h4>{avgRating}⭐</h4>
        <h4>{sla.deliveryTime}Min</h4>
        <h4>{costForTwo}</h4>
      </div>
    </div>
  );
};

export default RestaurentCard;
