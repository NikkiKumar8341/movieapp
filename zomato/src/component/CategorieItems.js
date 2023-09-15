import React from 'react'
import ItemList from './ItemList';
import { useState } from 'react';


const CategorieItems = ({data,showItems,setShowIndex}) => {


  //showItems shows the index of the item


  const handleClick = () => {
   setShowIndex();
  }
 

  return (
    <>

    {/* categories accordion of different categories item  */}
    <div className="w-6/12 m-auto bg-gray-100 shadow-lg p-4 my-3 " >
        <div className='flex justify-between cursor-pointer' onClick={ handleClick}>
        <span className='font-semibold text-lg'>{data.title} ({data.itemCards.length})</span>
        <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" strokeLineCap="round" strokeLineJoin="round" strokeWidth="2px" d="M9 5 5 1 1 5"/>
      </svg>

        </div>
        

        {/*item list of categories */}

      {showItems && <ItemList  items={data?.itemCards}/>}
    </div>
    </>
  )
}

export default CategorieItems