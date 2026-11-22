export default function Input({ type, width, placeholder, name, label, onChange }) {
  return (
    <div className="flex flex-col gap-2">
      {type === "text" ?
        <div>
          <label htmlFor="">{label}</label>
          <input
            type={type}
            id={name}
            name={name}
            className={`${width} bg-[#FAF9F6] outline outline-[#3B4D3E] rounded-xl placeholder:text-[11px] p-5  h-7 text-sm`}
            placeholder={placeholder}
            onChange={onChange}
          />

        </div> :
        type === "number" ?
          <div>
            <label htmlFor="">{label}</label>
            <input
              type={type}
              id={name}
              name={name}
              className={`${width} bg-[#FAF9F6] outline outline-[#3B4D3E] rounded-xl placeholder:text-[11px] p-5  h-7 text-sm`}
              placeholder={placeholder}
            />

          </div> :""
        }

    </div>
  );
}
