import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const PrivateRoute = ({component: RouteComponent}) => {
  const navigate = useNavigate()
   useEffect(() => {
     if(!localStorage.getItem("token")){
        navigate('/')
     }
   
     
   }, [navigate])
   

  return (
    <div>
      <RouteComponent/>
    </div>
  )
}


export default PrivateRoute