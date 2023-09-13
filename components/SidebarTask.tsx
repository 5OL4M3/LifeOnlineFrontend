"use client";

import { twMerge } from "tailwind-merge";
import { Box } from "./Box";
import {GoChecklist} from "react-icons/go";

interface SidebarTaskProps {
  className?: string
}

export const SidebarTask : React.FC<SidebarTaskProps> = ({
  className
}) => {
  return (
    <Box className={className}>
      <div className="
          flex 
          flex-col 
          gap-y-4
          px-5
          py-2
          h-full">
        <div className="
          inline-flex
          items-center
          gap-x-2">
          <GoChecklist className="text-white" size={26} />
          <p className={twMerge(`
          text-white
            text-md
            font-medium`)}>
            Task List
          </p>
        </div>
      </div>
    </Box>
  );
};