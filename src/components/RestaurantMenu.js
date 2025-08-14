import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { CORS_LINK, MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [resMenu, setResMenu] = useState(null);

    useEffect(() => {
      fetchMenu();
    }, [resId]);

  const fetchMenu = async () => {
        const url = CORS_LINK + encodeURIComponent(MENU_API + resId);
        console.log("Fetching from:", url);

        const response = await fetch(url);
        const json = await response.json();

        console.log("API Response:", json);
        setResMenu(json?.data || json);
      } 

    if (resId) {
      fetchMenu();
    }

  if (!resMenu) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwo } =
    resMenu?.cards?.[2]?.card?.card?.info || {};

  const itemCards =
    resMenu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[6]?.card
      ?.card?.itemCards || [];

  return (
    <div className="res-menu">
      <h1>{name}</h1>
      <h4>
        {cuisines?.join(", ")} - Two for ₹{costForTwo / 100}
      </h4>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => {
          const info = item?.card?.info;
          return (
            <li key={info?.id}>
              {info?.name} - ₹{(info?.price ?? info?.defaultPrice) / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;