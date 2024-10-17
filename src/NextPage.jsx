import React from 'react'
import {useLocation} from "react-router-dom"
const NextPage = () => {

    let data = useLocation();
    

  return (
    <div>
       <img src={data.state.x.webformatURL} alt="" />
    </div>
  )
}

export default NextPage
