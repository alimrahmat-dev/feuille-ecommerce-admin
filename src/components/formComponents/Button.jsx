export default function Button({children, width,height}) {
  return (
    <div>
      <button type="submit" className={`${width} bg-[#3B4D3E] rounded-xl text-[#FAF9F6] ${height}`}>
        {children}
      </button>
    </div>
  );
}
