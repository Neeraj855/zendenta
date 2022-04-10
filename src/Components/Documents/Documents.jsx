import { AiFillFileAdd, AiFillFileText } from "react-icons/ai";

import "./Documents.css";

const Documents = () => {
  return (
    <div className="documents">
      <div className="documents-container">
        <div className="documents-heading">
          <div>
            <h3>Files / Documents</h3>
          </div>
          <div className="add-files">
            <AiFillFileAdd />
            <h4>Add Files</h4>
          </div>
        </div>

        <div className="documents-contents">
          <div className="document">
            <div className="document-left">
              <AiFillFileText />
              <h4>Check Up Result.pdf</h4>
            </div>
            <div className="document-right">
              <span>123kb</span>
            </div>
          </div>
          <div className="document">
            <div className="document-left">
              <AiFillFileText />
              <h4>Dental X-Ray Result2.pdf</h4>
            </div>
            <div className="document-right">
              <span>345kb</span>
            </div>
          </div>
          <div className="document">
            <div className="document-left">
              <AiFillFileText />
              <h4>Medical Prescription.pdf</h4>
            </div>
            <div className="document-right">
              <span>56kb</span>
            </div>
          </div>
          <div className="document">
            <div className="document-left">
              <AiFillFileText />
              <h4>Dental X-Ray Result.pdf</h4>
            </div>
            <div className="document-right">
              <span>123kb</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;
