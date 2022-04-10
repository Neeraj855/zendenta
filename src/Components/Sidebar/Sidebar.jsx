import { useEffect, useState } from "react";

import SidebarItem from "./SidebarItem/SidebarItem";

import "./Sidebar.css";

import Logo from "../../Assets/logo.png";
import Back from "../../Assets/previous.png";
import Menu from "../../Assets/menu.png";

import {
  AiOutlineFieldTime,
  AiOutlineMessage,
  AiOutlineSetting,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { BsCalendarCheck, BsPeopleFill } from "react-icons/bs";
import { MdPayment } from "react-icons/md";

const sidebarItems = [
  { name: "Overview", icon: <AiOutlineFieldTime />, to: "/" },
  { name: "Callender", icon: <BsCalendarCheck />, to: "/callender" },
  { name: "Patient List", icon: <MdPayment />, to: "/patient-list" },
  { name: "Messages", icon: <AiOutlineMessage />, to: "/messages" },
  { name: "Payment", icon: <BsPeopleFill />, to: "/payment" },
  { name: "Settings", icon: <AiOutlineSetting />, to: "/settings" },
];

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [doctor, setDoctor] = useState([]);

  useEffect(() => {
    fetch(
      "https://625276447f7fa1b1dde57326.mockapi.io/zendenta/doctorDetails"
    ).then((result) => {
      result.json().then((response) => {
        setDoctor(response[0]);
      });
    });
  }, []);

  return (
    <section className={`sidebar ${open ? "inactive" : ""}`}>
      <div className="top-section">
        <div className="intro">
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
          <div className="text">
            <h2>Zendenta</h2>
            <span>Lorem Ipsum Dolor</span>
          </div>
        </div>
        <div className="toggle-btn">
          <img
            onClick={() => setOpen(!open)}
            src={open ? Menu : Back}
            alt="collapse sidebar"
          />
        </div>
      </div>

      <div className="sidebar-menu">
        <div className="menu-icons">
          <ul>
            {sidebarItems.map((sidebarItem,index) => {
              const { to, icon, name } = sidebarItem;
              return <SidebarItem key={index} to={to} icon={icon} name={name} />;
            })}
          </ul>
        </div>

        <div className="sidebar-help">
          <ul>
            <SidebarItem
              to="/help"
              name="Help ?"
              icon={<AiOutlineInfoCircle />}
            />
          </ul>
        </div>
      </div>

      <div className="divider"></div>

      <div className="sidebar-doctor">
        <div className="doctor-image">
          <img src={doctor.url} alt="doctor image" />
        </div>
        <div className="doctor-info">
          <h4>{doctor.name}</h4>
          <span>{doctor.specification}</span>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
