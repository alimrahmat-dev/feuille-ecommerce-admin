import { useState } from "react"

export default function Form() {

    const inputField = [
        { name: 'username', label: 'Username', type: 'text' },
        { name: 'email', label: 'Email', type: 'text' },
        { name: 'password', label: 'Password', type: 'text' },
    ]
    console.log(inputField);
    

    const [formData, setFormData] = useState()

    const handleChange = (e) => {
            const{name,value} = e.target
        setFormData({ ...formData , [name]:value})
    }

    return (

      <div>

     {   inputField.map((e)=>{
                e.type
        }) && "text"
        }

      </div>

    )
}