import { useEffect, useState } from "react";
import {RESTAURANT_MENU_URL1, RESTAURANT_MENU_URL2} from "../constant";

 const useRestaurantMenu = (id) => {
   
    const [restaurant, setRestaurant] = useState({});
    const [menuItem, setMenuItem] = useState();

    useEffect(() => {
        console.log("inside use...")
       getRestaurantInfo(id);

    }, [])
    
    async function getRestaurantInfo(id) {
        try{
       
        const data = await fetch(RESTAURANT_MENU_URL1 + id + RESTAURANT_MENU_URL2)
        const json = await data.json();

        console.log("json->" , json)
       
        setRestaurant(json?.data?.cards[2]?.card?.card?.info)
        setMenuItem(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
        
     
      
        }

        catch (error) {
            console.error('Error fetching or parsing data:', error);
        }
    }
    return [restaurant, menuItem];
}

export default useRestaurantMenu;




 
// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER
// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=11239https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=