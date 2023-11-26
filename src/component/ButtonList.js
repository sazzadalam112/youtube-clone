import React from 'react'
import Buttons from './Buttons'


function Buttonlist({name}) {
  return (
    <div className='flex justify-center  flex-wrap '>

    <Buttons name={"All"} />
    <Buttons name={"Football"} />
    <Buttons name={"Cricket"} />
    <Buttons name={"News"} />
    <Buttons name={"Movies"} />
    <Buttons name={"Mix"} />
    <Buttons name={"Wimbledon"} />
    <Buttons name={"MMA"} />
    <Buttons name={"UFC"} />
    <Buttons name={"Tech"} />
    <Buttons name={"React "} />

    </div>
  )
}

export default Buttonlist