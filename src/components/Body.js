import RestaurantCard, { withSuperFastLabel } from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { DOG_IMAGE_URL } from "../utils/constants";
const Body = () => {
  let [restaurantList, setRestaurantList] = useState([]);

  let [filteredRestaurants, setFilteredRestaurants] = useState(restaurantList);

  let [searchText, setSearchText] = useState("");

  let onlineStatus = useOnlineStatus();

  let RestaurantCardPromoted = withSuperFastLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
    // window.addEventListener("scroll", handleScroll);
    // return () => {
    //   window.removeEventListener("scroll", handleScroll);
    // };
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999"
    );
    const jsonData = await data.json();
    console.log(
      jsonData.data.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setRestaurantList(
      jsonData.data.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurants(
      jsonData.data.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const updateSearchBox = (e) => {
    setSearchText(e.target.value);
  };

  const searchRestaurants = () => {
    const filteredRestaurants = restaurantList.filter((res) => {
      if (res.info.name.toLowerCase().includes(searchText.toLowerCase())) {
        return res;
      }
    });
    setFilteredRestaurants(filteredRestaurants);
  };

  if (onlineStatus === false) {
    return (
      <div className='grid justify-center align-middle'>
        Hey, Seems you are offline!
      </div>
    );
  }

  if (restaurantList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className='body p-2  bg-white  dark:bg-black'>
      <div className='flex justify-center dark:'>
        <div className='pb-2'>
          <input
            type='text'
            className='w-96 h-8 rounded-lg border-solid border-blue-300 border-2 dark:border-gray-500'
            value={searchText}
            onChange={(e) => updateSearchBox(e)}
          ></input>
          <button
            className='ml-2 rounded-lg bg-blue-300 w-20 h-8 dark:bg-gray-500 dark:text-white'
            onClick={searchRestaurants}
          >
            Search
          </button>
        </div>
        <div className='ml-1'>
          <button
            className='ml-2 rounded-lg bg-blue-300 w-52  h-8  dark:bg-gray-500 dark:text-white'
            onClick={() => {
              const filteredRes = restaurantList.filter(
                (res) => res.info.avgRating >= 4.4
              );
              setFilteredRestaurants(filteredRes);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className='flex flex-wrap dark:bg-black'>
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            resData={restaurant}
            to={"/restaurants/" + restaurant?.info?.id}
          >
            {restaurant.info.sla.deliveryTime < 20 ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
