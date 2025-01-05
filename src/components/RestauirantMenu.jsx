
import js from '@eslint/js';
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import {IMG_CDN_URL} from '../constant'
import ShimmerLoader from './shimmerUI';
import useRestaurantMenu from "../utils/useRestaurantMenu"
  

const RestaurantMenu = () =>{
// how to read dynamic URL params
    const params = useParams();
    const {id} = params;
    const restaurantsInfo = useRestaurantMenu(id);  
    const [restaurant, menuItem] = restaurantsInfo


        return (
            <div className='menu'>
            <div>
                <h1>Hello</h1>
                <h1>Restaurant id : {id}</h1>
                <h2>{restaurant?.name}</h2>
                <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId } className='Image' alt="Image" />
                <h2>{restaurant?.city}</h2>
                <h2>{restaurant?.areaName}</h2>
                <h2>{restaurant?.avgRating} stars</h2>
                <h2>{restaurant?.costForTwoMessage}</h2>
            </div>
            <div>
               <h1>Menu</h1>
               <ul>
                  {menuItem?.map((item) => (
                    <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
                  ))}
               </ul>
            </div>
            </div>
        );

    
    
    
}

export default RestaurantMenu;




















  // const [restaurant, setRestaurant] = useState({});
    // const [menuItem, setMenuItem] = useState();
    // useEffect(() =>{
    //    getResturantInfo();
    // },[])

    // async function getResturantInfo() {
    //     const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`)
    //     const json = await data.json();
    //     console.log(json)
    //     console.log(json?.data?.cards[2]?.card?.card);
    //     console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[13]?.card?.card?.itemCards);
       
    //     setRestaurant(json?.data?.cards[2]?.card?.card?.info);
    //     setMenuItem(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[13]?.card?.card?.itemCards)
    
    // }