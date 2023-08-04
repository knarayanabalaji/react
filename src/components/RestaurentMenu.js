import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurentMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const {resId} = useParams();
  // console.log(params);
  const fetchMenu = async () => {
    // console.log( MENU_API+resId)
    const data = await fetch(
      MENU_API+resId
    );
    const json = await data.json();
    // console.log(json);
    // console.log(json.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    setResInfo(json.data);
  };

  if (resInfo === null) {
    return <Shimmer></Shimmer>;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;
  // const { cards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;
  const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(",")} {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {
          itemCards.map((item)=>
          <li key={item?.card?.info?.id}>{item?.card?.info?.name}- Rs:{item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}</li>)
        }
      </ul>
    </div>
  );
};

export default RestaurentMenu;



  {/* <ul>
        {cards.map((menu, index)=>{
          if(menu?.card?.card?.title == undefined){
            return null
          }
         return <li key={index}>{menu?.card?.card?.title} 
         <ul>{(itemCards.map((item)=> <li key={item?.card?.info?.id}>{item?.card?.info?.name}- Rs:{item?.card?.info?.price/100}</li>))}</ul>
         </li>
        })}
      </ul> */}
