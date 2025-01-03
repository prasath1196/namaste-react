import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items, page }) => {
  const dispatcher = useDispatch();
  const handleCartAdd = (item) => {
    dispatcher(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          className='p-2 m-2 border-gray-200 border-b-2 text-left flex'
          key={item?.card?.info?.id}
        >
          <div className='ml-2 w-9/12'>
            <span className='font-semibold'>{item?.card?.info?.name} </span>
            <span>
              Rs.
              {item?.card?.info?.price / 100 ||
                item?.card?.info?.defaultPrice / 100}
            </span>
            <div>
              <p>{item?.card?.info?.description}</p>
            </div>
          </div>
          <div className='item-image w-3/12 text-right p-2'>
            <div className='absolute'>
              <button
                className='p-2 rounded-md shadow-lg bg-black text-white border-green-200 border-2  m-auto'
                onClick={() => handleCartAdd(item)}
              >
                Add +
              </button>
            </div>
            <img src={CDN_URL + item?.card?.info.imageId}></img>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
