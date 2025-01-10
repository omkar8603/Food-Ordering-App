
import {IMG_CDN_URL} from  '../constant';

const ReastaurantCard = ({name,cloudinaryImageId, cuisines,avgRating}) => {

    return  (
          <div className='w-[250px] p-4 m-3 shadow-xg rounded-md bg-pink-50'>
            <img src= {IMG_CDN_URL + cloudinaryImageId } alt="Item Image" />
            <h2 className='font-bold text-xl'>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4> {avgRating} star</h4>
          </div>
     )
   }


export default ReastaurantCard;