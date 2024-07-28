const AvtUser = ({ image = "./images/boy.png", size = 50, label, textSize}) => {
  return (
    <div className="flex flex-nowrap items-center gap-[12px]">
      <span
        className="rounded-full aspect-square bg-white flex justify-center items-center overflow-hidden p-[8px]"
        style={{ width: size }}
      >
        <img src={image} alt="" />
      </span>
      <p className="text-[#342a3c]" style={{fontSize: textSize}}>{label}</p>
    </div>
  );
};

export default AvtUser;
