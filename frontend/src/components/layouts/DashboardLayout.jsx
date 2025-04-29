import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { Navbar } from "./Navbar";
import { SideMenu } from "./SideMenu";

export const DashboardLayout = ({ children, activeMenu }) => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <Navbar activeMenu={activeMenu}></Navbar>

      {user && (
        <div className="flex">
          <div className="max-[1080px]:hidden">
            <SideMenu activeMenu={activeMenu}></SideMenu>
          </div>

          <div className="grow mx-5">{children}</div>
        </div>
      )}
    </div>
  );
};
