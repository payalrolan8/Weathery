import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city:"New Delhi",
        feels_like: 15.77,
        humidity: 77,
        temp: 16.09,
        tempMax: 16.09,
        tempMin: 16.09,
        weather: "mist",
    })
    let updateInfo=(newInfo)=>{
setWeatherInfo(newInfo);
    }
    return(
        <div>
            <h2>Weather App by Payal</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );

}