
import js from '@eslint/js';
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import {IMG_CDN_URL} from '../constant'
import ShimmerLoader from './shimmerUI';
import useRestaurantMenu from "../utils/useRestaurantMenu"
import RestaurantCategory from './RestaurantCatagory';
  

const RestaurantMenu = () =>{
// how to read dynamic URL params
    const params = useParams();
    const {id} = params;
    const restaurantsInfo = useRestaurantMenu(id);  
    const [restaurant, pageDescription] = restaurantsInfo
 

    const categories = [
      ...(pageDescription?.filter(
        c => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      ) || []),
      ...(pageDescription?.filter(
        c => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
      ) || []),
    ];
 
 
    const [showIndex, setShowIndex] =  useState()

        return (  
            <div className='flex justify-center text-center'>
            <div>
                <h2 className='font-bold my-6 mx-p-2 text-2xl'>{restaurant?.name}</h2>
                {/* <img  className="h-40 ml-[630px]" src={IMG_CDN_URL + restaurant?.cloudinaryImageId }  alt="Image" /> */}
                <p className='font-bold text-lg my-2'>{restaurant?.cuisines?.join(", ")} = {restaurant?.costForTwoMessage}</p>

                {/* categories accordions */}
                {categories.map((category, index) =>  <RestaurantCategory 
                data={category?.card?.card} 
                key = {category?.card?.card?.title}
                
                showItems={index === showIndex ? true : false}
                setShowIndex={ ((val) => {
                   return  val === null ? setShowIndex(null) : setShowIndex(index);
                })}
                />
                  )}
            </div>
            
            </div>
        );



    // cards[12]?.card?.card?.itemCards
    
    
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