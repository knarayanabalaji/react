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
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <div className="res-details">
        <h4>{avgRating}⭐</h4>
        <h4>{sla.deliveryTime}Min</h4>
        <h4>{costForTwo}</h4>
      </div>
    </div>
  );
};

export default RestaurentCard;
