import React, { useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import {toast} from 'react-hot-toast'
import { useRouter } from 'next/navigation'

export default function ProfilePage() {
    const router = useRouter()
    const [data, setData] = useState("nothing")
    
    const getUserDeatails = async() => {
        const res = await axios.post("/api/users/me")
        console.log(res.data);
        setData(res.data._id)
    }

  return (
    <div>
      
    </div>
  )
}

 
