import { useState } from "react";

export default function useLabel()
{
    const [isActive, setActive] = useState(false)

    return {isActive,toggleActive}

}