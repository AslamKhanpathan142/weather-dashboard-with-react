import React from 'react'
import { FaLevelUpAlt } from "react-icons/fa";
import { FaTemperatureArrowUp, FaTemperatureArrowDown } from "react-icons/fa6";

const Box2 = ({update}) => {
    const box1 = [
        {
            icon : <FaTemperatureArrowUp />,
            f :'MAX TEMP',
            h5 : update.temp_max,
            sup : 'o',
            p : 'Highest temperature within one hour'
        },

        {
            icon : <FaTemperatureArrowDown />,
            f : 'MIN TEMP',
            h5 : update.temp_min,
            sup : 'o',
            p : 'Lowest temperature within one hour'
        },

        {
            icon : <FaLevelUpAlt />,
            f : 'GRND LEVEL',
            h5 : update.grnd_level,
            p : 'Atmospheric pressure at the ground level'
            
            
        },
    ]

  return (
    <>
    <div className="main-box d-flex justify-content-evenly">
    {box1.map((item) => (
            <div className="box2">
            <p className="feels1 ms-2 mt-2">{item.icon}  {item.f}</p>
            <h5 className="deg1 ms-2">{item.h5}<sup>{item.sup}</sup></h5>
            <p className='para1 ms-2 me-2'>{item.p}</p>
            </div>
              ))}
        </div>
    </>
  )
}

export default Box2
