import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  let [restaurantList, setRestaurantList] = useState(resList);
  return (
    <div className='body'>
      <div className='filter'>
        <button
          className='filter-btn'
          onClick={() => {
            const filteredRes = restaurantList.filter(
              (res) => res.data.avgRating >= 4
            );
            setRestaurantList(filteredRes);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className='res-container'>
        {restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant?.data?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
