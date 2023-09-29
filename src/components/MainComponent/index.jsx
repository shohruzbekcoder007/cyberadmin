import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { getRequest } from '../../utils/resquests'
import { company_me } from '../../utils/API_urls'

export default function MainComponent() {

    const {user, setUser} = useContext(UserContext)
    useEffect(() => {
      if(!user){
        getRequest(company_me).then((response) =>{
          setUser(response.data.user[0])
          console.log(response.data.user[0])
        }).catch((error) => {
          console.log(error)
        })
      }
    },[])

    if(sessionStorage.getItem('x-access-token')){
      return <Outlet/>
    }else{
      return <Navigate to="/login"/>
    }
  
}
