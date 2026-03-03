import React, { useState } from 'react'

export default function SignuPage() {

  const [user, setUser] = useState({
    email:"",
    password:"",
    username:""
  })

  const [buttonDisabled, setButtonDisabled] = useState(false)
  const [loading, setLoding] = useState(false)


  return (
    <div>
      Sign up Page 
    </div>
  )
}





