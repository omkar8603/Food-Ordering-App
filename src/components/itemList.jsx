import {IMG_CDN_URL} from '../constant'
const ItemList = (props) =>{
     const {items} = props;
  
      
    return (
        <div>
     {items?.itemCards?.map((item) => 

         (
           
            <div className="border-b-2 shadow-lg m-2 p-6 flex justify-between text-left " key={item?.card?.info?.name}>
                <div >
            <span className="font-bold text-left">{item?.card?.info?.name}</span>

            <span className="flex font-bold">₹ {item?.card?.info?.defaultPrice/100 ?
             item?.card?.info?.defaultPrice/100 : 
             item?.card?.info?.finalPrice/100}
             </span> 

            <p className="text-xs text-left text-gray-500 ">{item?.card?.info?.description}</p>
            </div>
            
            <div className="relative top-auto w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
    
        <img
          className=" w-full h-full object-cover"
          src={IMG_CDN_URL + item?.card?.info?.imageId}
          alt="image"
        />

        <button
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 font-bold bg-white text-green-600 py-1 px-4 rounded-md hover:text-green-900">
          Add
        </button>
      </div>
            </div>
        )
     )}
        </div>
    )
}


export default ItemList;