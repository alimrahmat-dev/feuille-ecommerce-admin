export default function Input({ type, width, placeholder,}) {
  return (
    <div>
      
      <input
        type={type}
        id={name}
        className={`${width} bg-[#FAF9F6] outline outline-[#3B4D3E] rounded-xl placeholder:text-[11px] p-5  h-7 text-sm`}
        placeholder={placeholder}
      />
    </div>
  );
}
