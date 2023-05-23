import "../App.css";
import { useState , useEffect} from "react";
import axios from "axios";
import Fundamental from "./Fundamental";

const InpandLine = () => {
  const API_KEY = "Your-API";
  const [searchedCity, setSearchedCity] = useState("");
  const [Weather, setWeather] = useState([]);
  const [Status, setStatus] = useState([]);
  const [icon, setIcon] = useState([]);

  let sehir = "";
  const CityInfo = () => {
    document.querySelector("input").addEventListener("input", (e) => {
      e.preventDefault();
      sehir = e.target.value;
      console.log(sehir);
    });
  };


  async function GoData(value) {
    console.log(sehir);
    axios
      .get(
        `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${sehir}&days=3&aqi=no&alerts=no`
      )
      .then((response) => {
        setSearchedCity(response.data.location.name);
        setWeather(response.data.forecast.forecastday);
        setStatus(response.data.current.condition.text);
        setIcon(response.data.current.condition.icon);
        
        
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <div>
        <input
          className="search"
          type="text"
          placeholder="Şehir giriniz"
          onChange={CityInfo}
        />
        <button className="searchButton" onClick={() => GoData(sehir)}>
          Ara
        </button>
        <div className="line"></div>
      </div>
      {searchedCity && <div className="ArananSehir">{searchedCity} Bölgesinde 3 Günlük Hava Tahmini</div>}
      <div>
        {Weather.map((item) => (
          <Fundamental
            key={item.date}
            date={item.date}
            Status={Status}
            icon={icon}
            maxcelcius={item.day.maxtemp_c}
            mincelcius={item.day.mintemp_c}
          />
        ))}
      </div>
    </>
  );
};
export default InpandLine;
