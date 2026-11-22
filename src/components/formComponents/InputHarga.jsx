import { faHandLizard } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

export default function InputHarga({  width, placeholder,name,label}) {

    

  return (
    <div className="flex flex-col gap-2">
       <label htmlFor="">{label}</label>
      <input
        type="text"
        id={name}
        name={name}
        className={`${width} bg-[#FAF9F6] outline outline-[#3B4D3E] rounded-xl placeholder:text-[11px] p-5  h-7 text-sm`}
        placeholder={placeholder}
        onChange={handleChange}
        value={harga}
      />
    </div>
  );
}