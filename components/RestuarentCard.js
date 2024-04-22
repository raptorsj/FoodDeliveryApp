
/** inline style syntax for jsx is written in Javascript i.e style={{color:red}}*/

import { CDN_URL } from "../utils/constants";

const RestuarentCard = (props) => { //YOU can destructure also (props) to ({resData})
    const { name, cuisines, cloudinaryImageId, avgRating, costForTwo, sla:{deliveryTime}} = props?.resData?.info;
    return (<div className='res-card' style={{ background: '#f0f0f0' }}>
        <img alt="res-logo" className="res-logo" src={CDN_URL+cloudinaryImageId} />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>Delivery Time: {deliveryTime} Min</h4>
    </div>)
}

export default RestuarentCard;