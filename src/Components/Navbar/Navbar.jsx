import { FaRegUser, FaEdit } from "react-icons/fa";
import { BsPlusCircleFill } from "react-icons/bs";
import { MdNotifications } from "react-icons/md";
import { AiFillPrinter, AiOutlineSearch } from "react-icons/ai";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="patient">
        <div className="patient-info">
          <div className="patient-avatar">
            <FaRegUser />
            <h2>Diane Cooper</h2>
          </div>
          <div className="patient-icons">
            <div className="search">
              <div className="search-icon">
                <AiOutlineSearch />
              </div>
              <input type="text" placeholder="Search" />
            </div>

            <div className="icons">
              <div className="add">
                <BsPlusCircleFill />
              </div>
              <div className="circle">
                <MdNotifications />
                <div className="red-dot"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="patient-select">
          <div className="breadcrumb-menu">
            <ul className="breadcrumb">
              <li>
                <a href="#">Patient List</a>
              </li>
              <li>
                <a href="#">Diana Cooper</a>
              </li>
            </ul>
          </div>
          <div className="patient-download">
            <button>
              <AiFillPrinter />
            </button>
            <button>
              <FaEdit />
              Edit Patient
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
