import { faHandLizard } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

export default function InputHarga({ type, width, placeholder,}) {

    const [harga, setHarga] = useState()

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

        const handleChange = (e) =>{
            const inputHarga = e.target.value
            setHarga(formatKeRupiah())
        }

  return (
    <div>
      <input
        type={type}
        id={name}
        className={`${width} bg-[#FAF9F6] outline outline-[#3B4D3E] rounded-xl placeholder:text-[11px] p-5  h-7 text-sm`}
        placeholder={placeholder}
        onChange={handleChange}
        value={harga}
      />
    </div>
  );
}