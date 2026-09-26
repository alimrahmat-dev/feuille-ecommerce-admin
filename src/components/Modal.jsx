import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";

export default function Modal() {

        return (
                <div className="absolute right-0 top-0 opacity-55 flex justify-center items-center   bg-black  w-full h-full ">
                        <div className=" w-1/2  h-auto bg-white">
                                <div className="flex">
                                        <h1>Input Produk Baru</h1>
                                        <div>
                                                <button><FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon></button>
                                        </div>
                                </div>
                                <form action="">
                                        <div className="flex flex-col">
                                        
                                        </div>

                                </form>
                        </div>
                </div>
        )
}