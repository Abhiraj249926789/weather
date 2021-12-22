import React,{useEffect, useState} from "react";
import "./css/style.css";
import weathers from "../Assest/weathers.png";
const Wheather = () => {
   const[city, setCity] = useState(null);
   const[search, setSearch] = useState("");

   useEffect ( () =>{ 
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=28d0622db6b6e431d10fd85316b4c4ac`;
      const response = await fetch(url);
      const resJson = await response.json();
     // console.log(resJson);
     setCity(resJson.main);
    };

    fetchApi();
   },[search] )
    return(
      <div>
      
            <div className="box">
            <div className="container">
           
            <div className="row justify-content-center mt-5">
            <div className="col-lg-4 text-center mt-5">
            <div className="p-y-100">
            <div className="box-shadow-card p-5 boxs">
            <h2 className="text-center mt-4 mb-4">Find The Weather</h2>
            <img  className="text-center img-2 mb-4" src={weathers} alt=""/>
            <div className="input-group mb-3">
  <input  className="form-control" type="search" value={search} onChange={ (event) => { setSearch(event.target.value) }} />

</div>

{!city ? (
  <p className="text-center">No data found</p>
) : (
  <div>
  <div className="mt-4 text-center d-flex justify-content-around">
  <h2>
  <i className="fas fa-street-view mx-2"></i>
  {search}</h2>
  <h3 className="text-center">
  {city.temp}°Cel
  </h3>
  </div>
  <div className="mt-4 text-center d-flex justify-content-around">
  <h6>{city.pressure}hPa</h6> 
  <h6> {city.humidity}% </h6>
  </div>
  <div className="mt-4 text-center d-flex justify-content-around">
  <h6>Min : {city.temp_min}°Cel </h6> 
  <h6> Max : {city.temp_max}°Cel </h6>
  </div>
  </div>
)}

</div>
</div>
            </div>

            </div>

            </div>

            </div>
      </div>
    )
}
export default Wheather;