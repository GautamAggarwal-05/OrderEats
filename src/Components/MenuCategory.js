import React from 'react';
import ItemList from './ItemList';

function MenuCategory({ data, showIndex, setShowIndex, index }) {
  function handleClick() {
    setShowIndex(showIndex === index ? -1 : index);
  }

  const showItems = showIndex === index;

  return (
    <div className="w-[80%] mx-auto my-6 bg-white shadow-lg p-5">
      {/* header */}
      <div className='flex items-center justify-between cursor-pointer' onClick={handleClick}>
        <span className='font-semibold'>{data.title} ({data.itemCards.length})</span>
        <span className='text-xl'>🔽</span>
      </div>
      {/* Body */}
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
}

export default MenuCategory;
