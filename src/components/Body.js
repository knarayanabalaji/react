import RestaurentCard from "./RestaurentCard";
import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {
  // Local State Variable - Super powerful variable;
  const [listOfRestaurents, setListOfRestaurents] = useState([]);
  const [filteredRestaurents, setFilteredRestaurents] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.6287557&lng=79.4191795&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(
      json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    );
    setListOfRestaurents(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurents(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  // Normal JS variable
  let listOfRestaurentsJS = [
    {
      data: {
        id: "667962",
        name: "Paris Panini - Gourmet Sandwiches & Wraps",
        cloudinaryImageId: "33101e2fff3a071cbd8b85e73c0d4f45",
        cuisines: ["Continental", "Fast Food", "French"],
        costForTwoString: "₹500 FOR TWO",
        avgRating: "4.5",
        deliveryTime: 30,
      },
    },
    {
      data: {
        id: "667963",
        name: "Dominos",
        cloudinaryImageId: "33101e2fff3a071cbd8b85e73c0d4f45",
        cuisines: ["Continental", "Pastas", "French"],
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
        cuisines: ["Continental", "Pastas", "French"],
        costForTwoString: "₹500 FOR TWO",
        avgRating: "4.2",
        deliveryTime: 30,
      },
    },
  ];

  return listOfRestaurents.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="searchbox"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              console.log(e);
            }}
          ></input>
          <button
            onClick={() => {
              const filteredRestaurent = listOfRestaurents.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              console.log(filteredRestaurent);
              setFilteredRestaurents(filteredRestaurent);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurents.filter(
              (res) => res.info.avgRating > 4.0
            );
            setFilteredRestaurents(filteredList);
            console.log(filteredList);
          }}
        >
          Top Rated Restaurents
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurents.map((restaurent) => (
          // console.log(restaurent),
          <RestaurentCard key={restaurent.info.id} resData={restaurent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
