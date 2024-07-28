import { IconSearch } from "../../Icon";
import { motion } from "framer-motion";
import AvtUser from "./AvtUser";


const UserTabHeader = () => {
  return (
    <div className="w-full h-[80px] bg-gradient-to-br from-[#d8abffad] to-[#f2e3ff93] drop-shadow-sm flex justify-between items-center p-[16px]">
      <AvtUser label="Thanh Nam"/>
      <motion.span
        className="rounded-full p-[4px] bg-[#a685ffa1]"
        initial={{ backgroundColor: "#a685ffa1" }}
        whileHover={{ backgroundColor: "#a685ffde" }}
      >
        <IconSearch />
      </motion.span>
    </div>
  );
};

export { UserTabHeader };
