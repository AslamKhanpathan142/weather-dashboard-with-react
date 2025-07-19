import React, { useEffect, useRef, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import Box from "./Box";
import Box1 from "./Box1";
import Box2 from "./Box2";
import Box3 from "./Box3";

const App = () => {
  const inputValue = useRef(null)
  const [city, setcity] = useState('Mahesana')
  
  const click = (evt) => {
      console.log(evt);
      evt.preventDefault();
      let city1 = inputValue.current.value;
      
      console.log(city1)
      setcity(city1)
      
  }
  
  const [update, setweather] = useState([])
  const [update1, setweather1] = useState([])
  const [update2, setweather2] = useState([])
  const [update3, setweather3] = useState([])
  const [update4, setweather4] = useState([])


  // Example API URL
// https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=YOUR_API_KEY_HERE

 // const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=YOUR_API_KEY_HERE`

  
  const weather = async () => {
    let res = await fetch(API);
    let data = await res.json();
    console.log(data);
    setweather(data.main)
    setweather1(data.visibility)
    setweather2(data.weather[0])
    
    setweather3(data.name)
    setweather4(data.sys)
  }

  useEffect(() => {
    weather();
  },[city])

  const iconUrl = update2.icon ? `http://openweathermap.org/img/wn/${update2.icon}.png` : "";



  return (
    <>
      <div className="img">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mt-3">

              <div className="mt-4 d-flex justify-content-center">
                <input
                  type="text"
                  className="form-control text"
                  id="exampleInputPassword1"
                  placeholder="Search Your City"
                  ref={inputValue}
                />
                <span onClick={click}>
                <IoIosSearch />
                </span>
              </div>

              <div className="temp">
                <img src={iconUrl} className="mt-3 mb-3 icon"/>
                <h1 className="head">{Math.round(update.temp)}<sup>o</sup>C</h1>
                <h4 className="day">{update2.main} Day</h4>
                <h2 className="city">{update3}</h2>
              </div>


              {/* component */}
              <Box update={update} update1={update1}></Box>
            </div>

            

            <div className="col-lg-8 mt-3">
                <div className="aslam">
                  <Box1 update4={update4}></Box1>
                  <Box2 update={update}></Box2>
                  <Box3></Box3>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
