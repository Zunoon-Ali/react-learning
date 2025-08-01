import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {user} = useParams()
  return (
    <div>
      I am {user ? user : "Guest"}
    </div>
  )
}

export default User
