import { useState } from "react";

export default function useButton()
{
    const [isButton, setButton] = useState(false)

    return {isButton,setButton}

}