import React, { useContext, useState } from 'react'
import { UserContext } from '../../context/UserContext'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { getRequest } from '../../utils/resquests'
import { company_me } from '../../utils/API_urls'
import Spinner from '../Spinner'

export default function MainComponent() {

    const {user, setUser} = useContext(UserContext)
    const [loader, setLoader] = useState(true)

    const navigator = useNavigate()
    useEffect(() => {
      if(!user){
        getRequest(company_me).then((response) =>{
          setUser(response.data.user[0])
          console.log(response.data.user[0])
          setLoader(false)
          if(response.data.user[0].role == 'company'){
            navigator('user')
          } else if(response.data.user[0].role == 'admin'){
            navigator('admin')
          } else {
            navigator('login')
          }
        }).catch((error) => {
          console.log(error)
          setLoader(false)
        })
      }
    },[])

    if(loader){
      return <Spinner/>
    }

    if(sessionStorage.getItem('x-access-token')){
      return <Outlet/>
    }else{
      return <Navigate to="/login"/>
    }

}
