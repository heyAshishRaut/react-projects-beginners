import axios from "axios";
import { useState } from "react";

export function Fun03() {
    let date = new Date();
    const month = date.getMonth();
    const day = date.getDate();
    const year = date.getFullYear();

    const monthsName = [
        "Febuary", "January", "March", "April", "May", "June", "July", "August",
        "September", "October", "November", "December"
    ];
    const monthInWord = monthsName[month];

    const API_KEY = "API_KEY";
    const [weather, setWeather] = useState(null);

    async function Handler() {
        const city = document.getElementById("val").value;
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
            );
            setWeather(response.data);
        }
        catch (e) {
            console.log("Invalid city name");
            
        }
        document.getElementById("val").value = "";
    }

    return (
        <div className="w-[100vw] h-[100vh] bg-black flex justify-center items-center">
            <div className="py-10 bg-gray-100 px-10 rounded-2xl flex flex-col items-center">
                <div className="font-semibold text-xl text-gray-400 mb-2">{monthInWord} {day}, {year}</div>
                {weather && <div className="font-semibold text-3xl text-gray-300 mb-8">{weather.name}</div>}
                <div className="flex flex-col justify-center p-10 mb-8 items-center rounded-3xl bg-white border-4">
                    {/* 
                    Current temp
                    Feels like temp
                    Weather condition
                    Description
                    Icon
                    Cloud cover
                    */}
                    {weather && (
                        <div className="flex flex-col items-center gap-y-2">
                            <p className="font-semibold text-3xl text-gray-400 mb-6">{weather.main.temp}°C</p>
                            <p className="font-semibold text-xl text-gray-400">Feels like : {weather.main.feels_like}°C</p>
                            <p className="font-semibold text-xl text-gray-400">Weather : {weather.weather[0].main}</p>
                            <p className="font-semibold text-xl text-gray-400 mb-4">Cloud Cover : {weather.clouds.all}%</p>
                            <img className="rounded-full border-4"
                                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                                alt="Weather Icon"
                            />
                        </div>
                    )}
                </div>

                <div className="flex gap-x-3">
                    <input id="val" type="text" className="rounded-2xl outline-none px-4 text-center font-semibold" />
                    <button className="py-2 px-6 bg-blue-500 rounded-2xl text-white font-semibold hover:bg-blue-600" onClick={Handler}>Search</button>
                </div>
            </div>
        </div>
    );
}
