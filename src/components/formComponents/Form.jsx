import { useState } from "react"

export default function Form({ productForm, handleChange }) {

     // Fungsi untuk mengubah angka biasa menjadi format Rupiah saat diketik
  const formatKeRupiah = (angka) => {
    const numberString = angka.replace(/[^,\d]/g, "").toString();
    const split = numberString.split(",");
    const sisa = split[0].length % 3;
    let rupiah = split[0].substr(0, sisa);
    const ribuan = split[0].substr(sisa).match(/\d{3}/gi);

    if (ribuan) {
      const separator = sisa ? "." : "";
      rupiah += separator + ribuan.join(".");
    }

    rupiah = split[1] !== undefined ? rupiah + "," + split[1] : rupiah;
    return rupiah ? "Rp " + rupiah : "";
  };

  const handleChange = (e) => {
    const nilaiInput = e.target.value;
    // Simpan tampilan terformat ke state
    setHarga(formatKeRupiah(nilaiInput));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Cara mengambil angka aslinya saja untuk dikirim ke database/API
    const angkaAsli = harga.replace(/[^0-9]/g, "");
    console.log("Data siap kirim:", Number(angkaAsli));
  };
        


    return (
        <>
            <div className="flex-col w-full gap-1">

                {/* form */}
                {
                    productForm.map((e) => {
                        return (
                            <>
                                {
                                    // jika Input
                                    e.as === "input" ?
                                        e.type === "radio" ?
                                            <div>
                                                <label htmlFor="">{e.label}</label>
                                                <input type={e.type} className="w-full rounded-lg p-2 border-2" name={e.name} onChange={handleChange} />
                                            </div>
                                            :
                                            <div className="flex flex-col p-2">
                                                <label htmlFor="">{e.label}</label>
                                                <div>
                                                    <input type={e.type} className="w-full  rounded-lg p-2 border-2"  name={e.name} onChange={handleChange} />

                                                </div>
                                            </div>
                                        // jika select
                                        : e.as === "select" ?
                                            <div className="flex flex-col p-2 w-full ">
                                                <label htmlFor="">{e.label}</label>
                                                <select type="text" className="w-1/2 border-2 rounded-lg">

                                                    <option value="">{e.option}</option>
                                                </select>
                                            </div> : ''
                                }

                            </>
                        )

                    })

                }
                <button className="p-2 mt-2 rounded-2xl bg-stone-600 text-white w-full" >Submit</button>
            </div>



        </>




    )
}