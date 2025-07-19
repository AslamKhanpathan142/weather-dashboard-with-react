import React from 'react'
import { FaTemperatureHigh } from "react-icons/fa";
import { CiDroplet } from "react-icons/ci";
import { MdOutlineVisibility } from "react-icons/md";
import { WiHumidity } from "react-icons/wi";

const Box = ({update, update1}) => {

    const box = [
        {
            icon : <FaTemperatureHigh />,
            f :'FEELS LIKE',
            h5 : Math.round(update.feels_like),
            sup : 'o',
            p : 'Humidity is making it feel warmer'
        },

        {
            icon : <CiDroplet />,
            f : 'SEA LEVEL',
            h5 : update.sea_level,
            
            p : '2nd expected in next 24hr'
        },

        {
            icon : <MdOutlineVisibility />,
            f : 'VISIBILITY',
            h5 : `${Math.round(update1/1609.34)} mi`,
            
            
        },

        {
            icon : <WiHumidity />,
            f : 'HUMIDITY',
            h5 : `${update.humidity}%`,
            
            p : 'The Humidity Right now'
        }
    ]
  return (
    <>
    <div className="main d-flex">
        {box.map((item) => (

       
        <div className="div mt-2">
            <p className="feels ms-2">{item.icon}  {item.f}</p>
            <h5 className="deg ms-2">{item.h5}<sup>{item.sup}</sup></h5>
            <p className='para ms-2'>{item.p}</p>
        </div>
    ))}
        </div>
    </>
  )
}

export default Box
