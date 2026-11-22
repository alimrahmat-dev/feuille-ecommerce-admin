import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import Form from "./formComponents/Form";
import { postDataApi } from "../services/serviceApi";
import { useRef, useState } from "react";

export default function Modal({children }) {


  
        return (

                <>

                        <div className="absolute right-0 top-0 opacity-55 flex justify-center items-center   bg-black  w-full h-full ">

                        </div>
                        <div className="absolute w-1/4  mr-20  h-auto bg-white p-4 rounded-2xl">
                                <div className="flex justify-between">
                                        <h1 className="font-bold text-lg">Input Produk Baru</h1>
                                        <div className="flex gap-2">
                                                <button className="p-1 bg-stone-400 rounded-lg hover:scale-110 hover:bg-stone-200"><FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon></button>
                                                <button className="p-1 bg-red-400 rounded-lg  hover:scale-110 hover:bg-red-300"><FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon></button>

                                        </div>
                                </div>
                                <form onSubmit={handleSubmit} className="">
                                {children}

                                </form>
                        </div>
                </>

        )
}