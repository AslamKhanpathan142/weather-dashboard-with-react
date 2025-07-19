import React from 'react'

const Box1 = ({update4}) => {
  const box1 = [
    {
      h1 : '🌤️',
      h3 : `${new Date (update4.sunrise  * 1000).toLocaleTimeString()}`,
      h2 : 'SUN RISE',
      p : 'Sunrise is a symbol of new beginnings and is often associated with hope, renewal, and the start of a fresh day.',
    },

    {
      h1 : '🌙',
      h3 : `${new Date (update4.sunset  * 1000).toLocaleTimeString()}`,
      h2 : 'SUN SET',
      p : ' Sunset is often seen as a time for reflection and relaxation, symbolizing the end of the days activities and the transition into night.',
    }
  ]
  return (
    <>
        <div className="main-box d-flex justify-content-evenly">
          {box1.map((item) => (

        
            <div className="box1 mt-3">
              <h1 className="mt-4 ms-3">{item.h1}</h1>
              <h3 className="mt-5 ms-3">{item.h3}</h3>
              <h2 className="mt-2 ms-3">{item.h2}</h2>
              <p className="mt-2 ms-3 me-3">{item.p}</p>
            </div>
              ))}
            
        </div>
    </>
  )
}

export default Box1
