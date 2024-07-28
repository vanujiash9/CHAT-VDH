import AvtUser from "./AvtUser";


const UserTabChat = ({ item }) => {
  return (
    <div className="bg-[#dae6f0] h-[80px] border-[#afbfcbb0] border-b hover:opacity-75 duration-200 ease-in-out hover:drop-shadow-sm flex items-center p-[16px]">
      <AvtUser image={item.img} size={40} label={item.name} textSize={14} />
    </div>
  );
};

export { UserTabChat };
