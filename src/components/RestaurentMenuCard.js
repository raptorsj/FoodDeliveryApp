import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_RESTAURENT_MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";


const RestuarentMenuCard = () => {
    const [resInfo,setResInfo] = useState(null);
    const {resId} = useParams();
    console.log(resId);
    useEffect(() =>{
       fetchResMenuData()
    },[]);

    const fetchResMenuData = async () => {
        const data = await fetch(SWIGGY_RESTAURENT_MENU_URL+resId);
        const json = await data.json();
        setResInfo(json);
    }

    if(resInfo === null) {
        return <Shimmer/>
    }
   

    const {name,costForTwo,areaName,city} = resInfo?.data?.cards[2].card.card.info;
    const { itemCards} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    return (
    <div>
        <h2>{name}</h2>
        <p>{city}-{areaName}</p>

        <p>{`Cost for 2 : Rs:${costForTwo/100}/-`}</p>

        <h3>Menu</h3>
        <ul>
            {
            itemCards.map((item) =>(
                <li key = {item.card.info.id}>{item.card.info.name} - {`Rs:${(item.card.info.price||item.card.info.defaultPrice)/100}`}</li>
            ))
            }
        </ul>
    </div>)
}

export default RestuarentMenuCard;