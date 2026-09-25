import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan, faSquarePlus } from "@fortawesome/free-regular-svg-icons";

import Main from "../../layouts/Main";
import Modal from "../../components/Modal";
import useDisclosure from "../../hooks/useDisclosure";

export default function IndexProduct() {

    const { isOpen, onOpen, onClose, onToggle } = useDisclosure(false);
    console.log(isOpen);

    return (
        <>
            <Main>
                {
                    isOpen ? <Modal /> : ''

                }


                <div className="content">
                    <div className="indeex-table flex flex-col gap-2">
                        <div className="flex justify-end">
                            <button className="p-2 bg-stone-600 rounded-lg w-30 hover:bg-stone-200 text-white"><FontAwesomeIcon icon={faSquarePlus} onClick={onOpen}></FontAwesomeIcon>Product</button>

                        </div>
                        <table className=" w-full">
                            <thead className="bg-stone-600 text-white ">

                                <tr className="">
                                    <td className="w-auto    p-2  text-center ">Nama</td>
                                    <td className="w-auto    p-2 text-center ">Kategori</td>
                                    <td className="w-auto   p-2 text-center ">Deskripsi</td>
                                    <td className="w-auto   p-2 text-center ">Harga Dasar</td>
                                    <td className="w-auto   p-2 text-center ">Gambar</td>
                                    <td className="w-auto  border-{}  p-2 text-center ">Aktif</td>
                                    <td className="w-auto  border-{}  p-2 text-center ">Action</td>

                                </tr>

                            </thead>
                            <tbody>

                                <tr className=" bg-stone-100">
                                    <td className=" text-center w-auto p-3">Baju api</td>
                                    <td className=" text-center  w-auto p-1">Baju Kaos</td>
                                    <td className=" text-center   w-auto p-1">baju yang ber api-api</td>
                                    <td className=" text-center  w-auto p-1">Rp.80.000</td>
                                    <td className=" text-center w-auto p-1">Gambar</td>
                                    <td className=" text-center w-auto p-1">aktid</td>
                                    <td className="  w-auto p-1 flex justify-center items-center gap-2">
                                        <button className="p-1 bg-stone-400 rounded-lg hover:scale-110 hover:bg-stone-200"><FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon></button>
                                        <button className="p-1 bg-red-400 rounded-lg  hover:scale-110 hover:bg-red-300"><FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon></button>
                                    </td>
                                </tr>
                                <tr className=" bg-stone-200">
                                    <td className=" text-center w-auto p-3">Baju api</td>
                                    <td className=" text-center  w-auto p-1">Baju Kaos</td>
                                    <td className=" text-center   w-auto p-1">baju yang ber api-api</td>
                                    <td className=" text-center  w-auto p-1">Rp.80.000</td>
                                    <td className=" text-center w-auto p-1">Gambar</td>
                                    <td className=" text-center w-auto p-1">aktid</td>
                                    <td className="  w-auto p-1 flex justify-center items-center gap-2">
                                        <button className="p-1 bg-stone-400 rounded-lg hover:scale-110 hover:bg-stone-200"><FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon></button>
                                        <button className="p-1 bg-red-400 rounded-lg  hover:scale-110 hover:bg-red-300"><FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon></button>
                                    </td>
                                </tr>


                            </tbody>

                        </table>
                    </div>
                </div>
            </Main>
        </>
    )
}