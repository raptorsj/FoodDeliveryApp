
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";


const RestuarentMenuCard = () => {
   
    const {resId} = useParams();
    // useRestaurentMenu - is a custom hook for fetching the data
    const resInfo = useRestaurentMenu(resId);
    console.log(resInfo)
   
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