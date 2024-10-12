import { SWIGGY_RESTAURENT_MENU_URL } from "../utils/constants";
import { useState,useEffect } from "react";

const useRestaurentMenu = (resId) => {
    const [resInfo,setResInfo] = useState(null);
    
    useEffect(() =>{
        fetchResMenuData()
     },[]);
 
     const fetchResMenuData = async () => {
         const data = await fetch(SWIGGY_RESTAURENT_MENU_URL+resId);
         const json = await data.json();
         setResInfo(json);
     }
    return resInfo;
}

export default useRestaurentMenu;