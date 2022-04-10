import { FaRegUser } from "react-icons/fa";

import "./Notes.css";

const Notes = () => {
  return (
    <div className="notes">
      <div className="notes-container">
        <div className="notes-heading">
          <h3>Notes</h3>
          <a href="#">See all</a>
        </div>
        <div className="notes-textarea">
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <button>Save Notes</button>
        </div>
        <div className="notes-info">
          <div className="notes-subHeading">
            Lorem ipsum dolor sit amet consectetur
          </div>
          <div className="notes-doctorInfo">
            <div className="bottom">
              <div>
                <FaRegUser />
                <h5>Drg. Mega Nandae</h5>
              </div>
              <span>20 Nov 2019</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notes;
