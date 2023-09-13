"use client";

import { SidebarNav } from "./SidebarNav";
import { SidebarTask } from "./SidebarTask";
import { SidebarProfile } from "./SidebarProfile";
import { Logo } from "./Logo";

interface SidebarProps {
  children: React.ReactNode
}

const Sidebar = ({
  children 
} : SidebarProps)=> {

  const item = {
    icon: "",
    name: "Guest",
    guest: true
  }

  return (
    <div className="flex h-full">
      <div
        className="
          hidden
          md:flex
          flex-col
          bg-black
          h-full
          w-[300px]
          ps-2
          py-2
          gap-y-2
          justify-between
      ">
        <div className="
          flex
          flex-col
          gap-y-2
          h-full
        ">
          <Logo/>
          <SidebarNav/>
          <SidebarTask className="h-full"/>
        </div>
        <SidebarProfile {...item}/>
      </div>
      <main className="h-full flex-1 overflow-y-auto py-2 px-2">
        {children}
      </main>
    </div>
  )
}

export default Sidebar;