import { useEffect, useState } from "react";
import {RESTAURANT_INFI_URL} from "../constant";


const useRestaurantInfo = () => {
    const [allRestaurant, SetAllRestaurant] = useState([])
    const [filterRestaurants , setFilterRestaurants] = useState([]);
    
    useEffect(() =>{
          getRestaurants();
    }, [])

    
       async function getRestaurants(){

        try {
           const data = await fetch(RESTAURANT_INFI_URL);
           const json = await data.json();

           console.log("Data ", json);
           console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
           SetAllRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
           setFilterRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }
        catch(error){
            console.log(error);
        }
       }
        
    

    return allRestaurant;
     

}

export default useRestaurantInfo;
