import React, { useState } from "react";
import {
  Menu,
  MenuItem,
  Sidebar,
} from "react-pro-sidebar";
import { FaList, FaRegHeart } from "react-icons/fa";
import {
  FiHome,
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle,
} from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
// import 'react-pro-sidebar/dist/css/styles.css';
import "./Header.css";

const Header = () => {
  const [menuCollapse, setMenuCollapse] = useState(false);

  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
      <div id="header">
        <Sidebar collapsed={menuCollapse}>
          {}
          <div className="logotext">
            {}
            <p>{menuCollapse ? "Logo" : "RED WINGS PROJECT"}</p>
          </div>
          <div className="closemenu" onClick={menuIconClick}>
            {}
            {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
          </div>

          <Menu iconShape="square">
            <MenuItem active={true} icon={<FiHome />}>
              Dashboard
            </MenuItem>
            <MenuItem icon={<FaList />}>Donors</MenuItem>
            <MenuItem icon={<FaRegHeart />}>Blood Requests</MenuItem>
            <MenuItem icon={<RiPencilLine />}>Profile</MenuItem>
          </Menu>
          <Menu iconShape="square">
            <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
          </Menu>
        </Sidebar>
      </div>
  );
};

export default Header;