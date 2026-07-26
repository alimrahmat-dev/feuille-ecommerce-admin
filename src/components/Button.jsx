import { useState } from "react";

export default function Button({children, width,height, loading}) {
  return (
    <div>
      <button type="submit" className={`${width} bg-[#3B4D3E] hover:bg-[#536957] rounded-xl text-[#FAF9F6] ${height} ${loading?"bg-green-500":""}`}>
        {loading ?"... loading ": "login"}
      </button>
    </div>
  );
}
