import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'

export default function MainComponent() {
    const {user} = useContext(UserContext)
    console.log(user)
  return (
    <div>MainComponent</div>
  )
}
