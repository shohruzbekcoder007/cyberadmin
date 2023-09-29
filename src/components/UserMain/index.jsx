import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'

export default function UserMain() {
  const { user } = useContext(UserContext)
  
  return (
    <div>UserMain {user?.organization_name}</div>
  )
}
