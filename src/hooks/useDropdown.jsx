import { useState } from "react";

export default function useDropdown()
{
    const [isActive, setActive] = useState(false)

    const toggleActive = (e)=> {
        e.preventDefault()
        if(isActive=== true && e.type === "click"  ) {
        setActive(false)

        }else if(isActive=== false && e.type === "click"  ){
        setActive(true)

        }
    }

    return {isActive,toggleActive}

}