import RestaurentCard from "./RestaurentCard";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {
  // Local State Variable - Super powerful variable;
  const [listOfRestaurents, setListOfRestaurents] = useState(resList);
  
  // Normal JS variable
    let listOfRestaurentsJS = [
      {
        data: {
          id: "667962",
          name: "Paris Panini - Gourmet Sandwiches & Wraps",
          cloudinaryImageId: "33101e2fff3a071cbd8b85e73c0d4f45",
          cuisines: [
            "Continental",
            "Fast Food",
            "French",
          ],
          costForTwoString: "₹500 FOR TWO",
          avgRating: "4.5",
          deliveryTime: 30,
        }
      },
      {
          data: {
              id: "667963",
              name: "Dominos",
              cloudinaryImageId: "33101e2fff3a071cbd8b85e73c0d4f45",
              cuisines: [
                "Continental",
                "Pastas",
                "French",
              ],
              costForTwoString: "₹500 FOR TWO",
              avgRating: "3.8",
              deliveryTime: 30,
            },
      },
      {
          data: {
              id: "667964",
              name: "MCD",
              cloudinaryImageId: "33101e2fff3a071cbd8b85e73c0d4f45",
              cuisines: [
                "Continental",
                "Pastas",
                "French",
              ],
              costForTwoString: "₹500 FOR TWO",
              avgRating: "4.2",
              deliveryTime: 30,
            },
      }
    ];
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurents.filter(
              (res) => res.data.avgRating > 4.0
            );
            setListOfRestaurents(filteredList);
            console.log(filteredList);
          }}
        >
          Top Rated Restaurents
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurents.map((restaurent) => (
          <RestaurentCard key={restaurent.data.id} resData={restaurent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
