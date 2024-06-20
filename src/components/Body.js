import RestuarentCard from "./RestuarentCard";
import { data } from "../utils/data";
import { useEffect, useState } from "react";
import { SWIGGY_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
/**you can props inline also -   <RestuarentCard resName="Meghana Foods" cuisine="Biryani, SouthIndia"/> */

/**
 * KEY should be added while looping over the componenets as it avoids re rendering all the componenets while removel or adding a 
 * new data to componenet(eg:if new restaurant added or removed)
 * Never use INDEXS(Array Indexs ) as Key eg:
 *  {data.restaurants.map((restaurant, index) => <RestuarentCard key={index} resData={restaurant} />)}
 *  As componenet order might change if any CRUD operation done data and it causes performance issue
 * 
 * 
 * */


const Body = () => {
    /**
     * listOfRestaurants - set the initial state of the variable i.t assign the initial data
     * setListOfRestaurants - called when it needs to update the satate(Ract introduced this to initiate the 
     * diff algorthim that helps in rendiring the UI)
    */
    let [listOfRestaurants, setListOfRestaurants] = useState([]);
    let [filterdRestaurants, setFilteredRestaurants] = useState([]);
    /**
     * local state variable of search text - for getting the input typed value
     */

    let [searchText, setSearchText] = useState("");
/**
 * This hook will be invoked(cb function) after componenet rendered
 */
    useEffect(()=> {
       fecthData();
    },[]);

    const fecthData = async () => {
        console.log('Fetch data invoked')
        const data = await fetch(SWIGGY_URL);
        const json = await data.json();
        console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setListOfRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setFilteredRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    }

    /* if(listOfRestaurants.length === 0) {
        return <Shimmer/>
    } */

    return (<div className='body'>
        <div className="filter">
            <div className='search'>
                <input  type="text" className="searchBox" value={searchText}
                onChange={(e)=>setSearchText(e.target.value)}/>
                <button onClick={() => {console.log(searchText)
                     listOfRestaurants = listOfRestaurants.filter(restaurant =>  restaurant.info.name.split(" ").join("").toLowerCase().match(searchText.toLowerCase()));
                     console.log(listOfRestaurants);
                     setFilteredRestaurants(listOfRestaurants)
                }}>Search</button>
            </div>
            <button className="top-rated" onClick={() => {
                filterdRestaurants = listOfRestaurants.filter(restaurant =>  restaurant.info.avgRating > 4.2);
                setFilteredRestaurants(filterdRestaurants)
            }}>Top Rated Restaurants</button>
        </div>
       
        <div className='res-container'>
            {/* Never use INDEXS(Array Indexs ) as Key*/
                filterdRestaurants.length === 0 ? <Shimmer/> : filterdRestaurants.map(restaurant => <RestuarentCard key={restaurant.info.id} resData={restaurant} />)}
        </div>
    </div>)
}

export default Body;