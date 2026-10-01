import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import Form from "./formComponents/Form";

export default function Modal({productForm}) {
  
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
                                <form action={} className=" flex flex-col justify-center p-3 ">
                <Form productForm={productForm}/>

                                        {/* <div className="flex flex-col p-2">
                                                <label htmlFor="">Nama Produk</label>
                                                <input type="text" className="w-full  rounded-lg p-2 border-2" />
                                        </div>
                                        <div className="flex flex-col p-2 w-full ">
                                                <label htmlFor="">Nama Produk</label>
                                                <select type="text" className="w-1/2 border-2 rounded-lg">

                                                        <option value="">as</option>
                                                </select>
                                        </div>
                                        <div className="flex flex-col p-2">
                                                <label htmlFor="">Harga</label>
                                                <input type="number" className="w-full border-2 rounded-lg p-2" />
                                        </div>

                                        <div className="w-full flex justify-end">
                                                <button className=" p-3 text-center  w-1/2 rounded-lg bg-[#255D1D] hover:bg-green-600 text-white"> Simpan Produk</button>

                                        </div> */}

                                </form>
                        </div>
                </>

        )
}