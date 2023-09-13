"using client"

import { Box } from "./Box";
import {AiOutlineSetting} from "react-icons/ai";

interface ProfileItemProps {
  icon: string;
  name: string;
  guest?: boolean;
}

export const SidebarProfile:React.FC<ProfileItemProps> = ({
  icon,
  name,
  guest
}) => {
  return (
    <Box>
      <div className="
          px-3
          py-2
          w-full">
        <div className="
          inline-flex
          items-center
          gap-x-3
          justify-between
          w-full
          ">
          <img src={guest ? "https://3.bp.blogspot.com/-UI5bnoLTRAE/VuU18_s6bRI/AAAAAAAADGA/uafLtb4ICCEK8iO3NOh1C_Clh86GajUkw/s1600/guest.png" : icon} alt="profile" className="rounded-full h-10 w-10"/>
          <p className="truncate w-full
          text-white
          text-md
          font-medium">
            {name}
          </p>
          <AiOutlineSetting size={50} className="text-white"/>
        </div>
      </div>
    </Box>  
  )
}
