import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";

const RestaurentMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurentMenu(resId);
  if (resInfo === null) {
    return <Shimmer></Shimmer>;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;
  // const { cards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;
  console.log(resInfo);
  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(",")} {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name}- Rs:
            {item?.card?.info?.price / 100 ||
              item?.card?.info?.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurentMenu;

{
  /* <ul>
        {cards.map((menu, index)=>{
          if(menu?.card?.card?.title == undefined){
            return null
          }
         return <li key={index}>{menu?.card?.card?.title} 
         <ul>{(itemCards.map((item)=> <li key={item?.card?.info?.id}>{item?.card?.info?.name}- Rs:{item?.card?.info?.price/100}</li>))}</ul>
         </li>
        })}
      </ul> */
}
