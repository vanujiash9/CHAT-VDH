import { memo } from "react";


import { motion } from "framer-motion";
import { UserTabHeader } from "./component/UserTabHeader";
import { UserTabChat } from "./component/UseTabChat";

const UserBarData = [
  {
    img: "/images/girl.png",
    name: "Thanh Vân",
  },
  {
    img: "/images/man.png",
    name: "Trần Hoàng",
  },
  {
    img: "/images/woman.png",
    name: "Huyền Trang",
  },
  {
    img: "/images/man.png",
    name: "Hải Dương",
  },
];

const UserBar = memo(() => {
  return (
    <motion.div
      className="bg-[#FFFFFF] max-w-[25vw] h-full rounded-r-[30px] overflow-hidden"
      // initial={{ x: "-100%" }}
      // animate={{ x: 0 }}
      // transition={{ duration: 0.8, delay: 0.5, ease: 'easeInOut'}}
    >
      <UserTabHeader />
      {UserBarData.map((v, i) => {
        return <UserTabChat key={i} item={v} />;
      })}
    </motion.div>
  );
});

export default UserBar;
