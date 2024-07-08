import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  let [restaurantList, setRestaurantList] = useState([]);

  let [filteredRestaurants, setFilteredRestaurants] = useState(restaurantList);

  let [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
    // window.addEventListener("scroll", handleScroll);
    // return () => {
    //   window.removeEventListener("scroll", handleScroll);
    // };
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();

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

  // const loadRestaurants = async () => {
  //   console.log("Scrolled");
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/update",
  //     {
  //       method: "POST",
  //       body: JSON.stringify({
  //         lat: "12.9351929",
  //         lng: "77.62448069999999",
  //         nextOffset: "CJhlELQ4KIDY7IKo9sbMHDCnEzgE",
  //         widgetOffset: {
  //           NewListingView_category_bar_chicletranking_TwoRows: "",
  //           NewListingView_category_bar_chicletranking_TwoRows_Rendition: "",
  //           Restaurant_Group_WebView_PB_Theme: "",
  //           Restaurant_Group_WebView_SEO_PB_Theme: "",
  //           collectionV5RestaurantListWidget_SimRestoRelevance_food_seo: "24",
  //           inlineFacetFilter: "",
  //           restaurantCountWidget: "",
  //         },
  //         filters: {},
  //         seoParams: {
  //           seoUrl: "https://www.swiggy.com/",
  //           pageType: "FOOD_HOMEPAGE",
  //           apiName: "FoodHomePage",
  //         },
  //         page_type: "DESKTOP_WEB_LISTING",
  //         _csrf: "567PNhzP9wBF-AdfvuCUsRbm4zZUheEVsPuuDcEo",
  //       }),
  //     }
  //   );

  //   const jsonData = await data.json();
  //   let newRestaurants =
  //     jsonData.data.cards[4]?.card?.card?.gridElements?.infoWithStyle
  //       ?.restaurants || [];

  //   setRestaurantList((prevList) => [...prevList, ...newRestaurants]);
  //   if (searchText.length() === 0) {
  //     setFilteredRestaurants((prevList) => [...prevList, ...newRestaurants]);
  //   }
  // };

  // const handleScroll = () => {
  //   loadRestaurants();
  // };

  if (restaurantList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className='body'>
      <div className='filter'>
        <div className='search'>
          <input
            type='text'
            className='search-box'
            value={searchText}
            onChange={(e) => updateSearchBox(e)}
          ></input>
          <button className='search-btn' onClick={searchRestaurants}>
            Search
          </button>
        </div>
        <button
          className='filter-btn'
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
      <div className='res-container'>
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
