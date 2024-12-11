import ItemList from "./Itemlist";
import { useState } from "react";

const RestaurantCategory = ({ data, showItems, toggleItemState }) => {
  const handleClick = () => {
    toggleItemState();
  };
  return (
    <div>
      <div
        className='bg-gray-50 mx-auto my-2 shadow-lg p-4 w-6/12'
        onClick={handleClick}
      >
        <div className='flex justify-between cursor-pointer'>
          <span className='font-bold text-lg'>
            {data.title} ({data.itemCards.length})
          </span>
          <span className='text-right'> +</span>
        </div>
        <div className='accordian-body'>
          {showItems && <ItemList items={data.itemCards} />}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
