
import { useContext } from 'react';
import {IMG_CDN_URL} from  '../constant';
import UserContext from '../utils/UserContext';

const ReastaurantCard = (props) => {
    const {logedInUser} = useContext(UserContext);

    const {resData} = props;
    const  {name,cloudinaryImageId,cuisines,avgRating} = resData?.info;

    return  (
          <div className='w-[250px] p-4 m-3 shadow-xg rounded-md bg-pink-50'>
            <img src= {IMG_CDN_URL + cloudinaryImageId } alt="Item Image"  />
            <h2 className='font-bold text-xl'>{name}</h2>
            <h3>{cuisines?.join(", ")}</h3>
            <h4> {avgRating} star</h4>
            <h3>User : {logedInUser}</h3>
          </div>
     ) 
   }


   // higher Order Component

   // input - RestaurantCard  ==>> ResturantCardPramoted

  export const withPromotedLabel = (ReastaurantCard) =>{
   
    return (props) =>{
      
      return (
         <div>
          <label className="absolute bg-black text-white m-2 p-[6px] rounded-lg">Promoted</label>
          <ReastaurantCard {...props}/>
        
         </div>
      );
    }
    
   }

export default ReastaurantCard;