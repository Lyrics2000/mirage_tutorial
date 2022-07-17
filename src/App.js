import React, { Component,useState,useEffect } from 'react';

import './App.css';
import axios from 'axios';
import { SERVER_URL } from './url/BaseUrl';

const App = () => {

  const[data,setData] = useState([])

  useEffect( async () => {

    await axios.get(`${SERVER_URL}/api/movies`).then((response)=>{
      console.log(response.data)
      setData(response.data.movies)
    }).catch((error)=>{
      console.log(error.message)
    })
   
  }, [])
  

  return (
    <ul>
      {
        data.map((item)=>(
          <li>`${item.name}`</li>
        ))
      }
    </ul>
  )
}

export default App
