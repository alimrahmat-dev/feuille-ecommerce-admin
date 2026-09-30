import { useState } from "react"

export default function Form() {

 sole.log(inputField);
    

    const [formData, setFormData] = useState()

    const handleChange = (e) => {
            const{name,value} = e.target
        setFormData({ ...formData , [name]:value})
    }

    return (

      <div>

     { 
    productForm.as === "input" ?
     }
      </div>

    )
}