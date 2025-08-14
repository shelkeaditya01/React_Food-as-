import Card from "./Card";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlinestatus";



const Body = () => {

    const[listOfRestaurants,setListOfRestaurants]=useState([]);
    const[filteredList,setFilteredList]=useState([]);

    const[searchText,setSearchText]=useState("");

    useEffect(() => {
        fetchData1();
    }, []);

    // const fetchData = async () => {
    //     const data = await fetch(
    //         "https://thingproxy.freeboard.io/fetch/" +
    //         "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.52110&lng=73.85700&page_type=DESKTOP_WEB_LISTING"
    //     );

    //     const json= await data.json();
    //     console.log(json);

    //     const fetchData1=json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map((res)=>res.info);
    //     console.log(fetchData1);
    //     setListOfRestaurants(fetchData1);
    //     setFilteredList(fetchData1);
    // }

    const fetchData1 = async () => {
    const url = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.52110&lng=73.85020&collection=80424&tags=layout_CCS_Dosa&sortBy=&filters=&type=rcv2&offset=0&page_type=null";

    const data = await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`);
    const json = await data.json();
    
    console.log(json);
    const fetchData2 = json?.data?.cards.map((res1) => res1?.card?.card?.info).filter((res) => res !== undefined);
    console.log(fetchData2);
    setListOfRestaurants(fetchData2);
    setFilteredList(fetchData2);
}

    const onlineStatus=useOnlineStatus();
    if(onlineStatus===false){
        return(
            <h1>Look's like you're offline!! Please check your internet connection</h1>
        )
    }

    if(listOfRestaurants.length===0){
        return <Shimmer/>
    }
    

    return (

        <div className="body">
            <div className="filter">
                <input type="text" className="search" value={searchText} onChange={(e) => {setSearchText(e.target.value)}}></input>
                <button className="search-btn" onClick={() => {
                    const filteredRestaurants =listOfRestaurants.filter((res)=>res.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredList(filteredRestaurants);
                }}
                >Search</button>
                <button className="search-btn" onClick={()=>{
                    const filteredList=listOfRestaurants.filter(
                        (res)=>res.avgRating>4.4
                    );
                    setFilteredList(filteredList);
                }}
                >Top-rated Restaurants</button>
            </div>

            <div className="res-container">
                {
                    filteredList.map((restaurant) => (
                        <Link key={restaurant.id} to={"/restaurants/"+restaurant.id}><Card resData={restaurant}></Card></Link>
                    ))
                }
            </div>
        </div>
    )
};

export default Body;