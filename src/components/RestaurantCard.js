import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId,name, cuisines,avgRating,costForTwo,deliveryTime} = resData?.data
    return(
      <div className="res-card">
        <div className="res-image-container">
          <img
            className='res-logo'
            src={CDN_URL + cloudinaryImageId}
            />
        </div>
        <h3>{name}</h3>
        <h4>{cuisines.join(', ')}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo /100}</h4>
        <h4>{deliveryTime}  </h4>
  
      </div>
    )
  }

  export default RestaurantCard