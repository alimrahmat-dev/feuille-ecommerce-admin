import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Card({icon,nilai})
{

    return(
        <div className="flex gap-5 p-2 bg-[#3B4D3E] w-65 h-34 rounded-4xl text-white justify-center items-center">
            <h1 className="text-3xl">{nilai}</h1>
              <FontAwesomeIcon icon={icon} size="3x"/>
        </div>  
    )
}