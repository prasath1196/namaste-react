import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  useEffect(() => {
    fetchMenu();
  }, []);

  const [restaurant, setRestaurant] = useState(null);

  const [showRecommended, setShowRecommended] = useState("hidden");
  console.log(showRecommended);
  const { resID } = useParams();
  console.log(resID);

  const fetchMenu = async () => {
    const res = await fetch(MENU_URL + resID);
    const menuData = await res.json();
    setRestaurant(menuData);
  };

  if (restaurant == null) return <Shimmer />;

  const { name, areaName, costForTwoMessage, cuisines, avgRating, sla } =
    restaurant?.data?.cards[2]?.card?.card?.info;

  const { itemCards } =
    restaurant?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
      ?.card?.card;
  console.log(itemCards);
  console.log(restaurant?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR);
  return (
    <div className='restaurant-menu'>
      <div className='res-name'>
        <h1> {name} </h1>
      </div>
      <div className='menu-categories'>
        <div className='flex justify-center'>
          <div className='section w-1/2'>
            <div className=' section-header bold p-3 items-start bg-cyan-50 justify-between flex-wrap flex border-stone-100 shadow-lg rounded-md'>
              <div className=''>Recommended</div>
              <div
                className='text-green-600'
                onClick={() => {
                  if (showRecommended == "hidden") {
                    setShowRecommended("");
                  } else {
                    setShowRecommended("hidden");
                  }
                }}
              >
                +
              </div>
            </div>
            <div className={"section-content " + showRecommended}>
              {itemCards.map((item) => (
                <div
                  class='item-card mt-10 h-28  shadow-lg border-b-stone-50 px-2 hover:bg-stone-50 hover:shadow-md '
                  key={item?.card?.info?.id}
                >
                  {item?.card?.info?.name} - Rs.
                  {item?.card?.info?.price / 100 ||
                    item?.card?.info?.defaultPrice / 100}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
