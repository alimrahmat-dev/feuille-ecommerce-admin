import { useState } from "react"

export default function(){

    const inputField = [
        { name: 'username', label: 'Username', type: 'text' },
        { name: 'email', label: 'Email', type: 'text' },
        { name: 'password', label: 'Password', type: 'text' },
    ]

    const [formData, setFormData] = useState()

    const handleChange = ()=>{

        setFormData({...formData})
    }

    return(


    )
}