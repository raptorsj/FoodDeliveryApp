import RestuarentCard from "./RestuarentCard";
import { data } from "../utils/data"
import { useState } from "react";
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
    let [listOfRestaurants, setListOfRestaurants] = useState(data);
    console.log(listOfRestaurants)
    return (<div className='body'>
        <div className='search'>search</div>
        <button onClick={() => {
            listOfRestaurants = listOfRestaurants.filter(restaurant =>  restaurant.info.avgRating > 4.5);
            console.log(listOfRestaurants)
            setListOfRestaurants(listOfRestaurants)
        }}>filter</button>
        <div className='res-container'>.
            {/* Never use INDEXS(Array Indexs ) as Key*/
                listOfRestaurants.map(restaurant => <RestuarentCard key={restaurant.info.id} resData={restaurant} />)}
        </div>
    </div>)
}

export default Body;