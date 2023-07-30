import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurentMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.6287557&lng=79.4191795&restaurantId=80107&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  if (resInfo === null) {
    return  <Shimmer></Shimmer>
   }
   
  const {name,cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines.join(",")} {costForTwoMessage}</p>
      <ul>
        <li>Burgers</li>
        <li>Pizza</li>
        <li>Sandwich</li>
      </ul>
    </div>
  );
};

export default RestaurentMenu;
