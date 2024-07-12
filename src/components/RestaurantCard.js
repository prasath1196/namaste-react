import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;

  return (
    <div className='w-[250px] m-4 p-4 inline-block bg-stone-100 min-h-[450px] max-h-[450px] hover:bg-amber-100 hover:shadow-md shadow-xl flex flex-wrap dark:bg-gray-500 dark:text-white'>
      <div className='res-image'>
        <img
          className='w-full  max-h-[250px]'
          src={CDN_URL + cloudinaryImageId}
        />
      </div>
      <div className=''>
        <div className='block'>
          <h3 className='font-extrabold'>{name}</h3>
          <h4 className='text-green-900'>{avgRating} stars</h4>
        </div>
        <div className=''>
          <h4>{cuisines.join(", ")}</h4>
        </div>

        <div className='flex align-text-bottom justify-between mt-auto text-wrap'>
          <div>
            <h4>{costForTwo}</h4>
          </div>
          <div>
            <h4>{sla?.deliveryTime} minutes </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
