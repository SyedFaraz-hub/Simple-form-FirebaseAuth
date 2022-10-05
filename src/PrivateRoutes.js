import React from 'react'
import { Outlet, Navigate} from "react-router-dom"
import {useSelector} from 'react-redux'

const PrivateRoutes = () => {
  const state = useSelector(state => state.InfoReducer); 
  return (
    state.status ? <Outlet/> : <Navigate to= "/login"/> 
  )
}

export default PrivateRoutes
