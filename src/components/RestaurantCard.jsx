
import {IMG_CDN_URL} from  '../constant';

const ReastaurantCard = ({name,cloudinaryImageId, cuisines,avgRating}) => {

    return  (
          <div className='card'>
            <img src= {IMG_CDN_URL + cloudinaryImageId } alt="Item Image" />
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4> {avgRating} star</h4>
          </div>
     )
   }


export default ReastaurantCard;