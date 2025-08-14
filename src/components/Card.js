import { CDN_URL,IURL } from "../utils/constants";

const Card = (props) => {

    const {resData}=props; //Destructuring.
    const{cloudinaryImageId, name, cuisines, costForTwo, areaName, avgRating, sla}=resData;

    return (
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img className="card-logo" src={IURL+cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{areaName}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{sla.slaString} </h4>
        </div>
    )
};

export default Card;