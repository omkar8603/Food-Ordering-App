import { useState } from "react";
import ItemList from "./itemList";

const RestaurantCategory = ({data, showItems, setShowIndex}) => {
    

  const handeleClick = () => {
      showItems === true ?  setShowIndex(null) : setShowIndex();
  }
   
    return (
      <div className="w-screen">
       <div className="w-1/2 mx-auto my-4 bg-gray-50 shadow-lg p-4"> 
       <div className="flex justify-between cursor-pointer" onClick={handeleClick}>
         <span className="text-lg font-bold">{data?.title} ({data?.itemCards?.length})</span> 
        <span>⬇️</span>
        </div>
      {showItems &&  <ItemList items={data.itemCards}/>  }
      </div>
    </div>
    

    

      
    )
}

export default RestaurantCategory;