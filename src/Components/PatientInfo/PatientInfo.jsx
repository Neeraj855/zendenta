import { useState } from "react";

import "./PatientInfo.css";

const PatientInfo = () => {
  const [patient, setPatient] = useState([]);

  useState(() => {
    fetch("https://625276447f7fa1b1dde57326.mockapi.io/zendenta/patient").then(
      (result) => {
        result.json().then((response) => {
          setPatient(response[0]);
        });
      }
    );
  }, []);

  return (
    <div className="patientInfo">
      <div className="patientInfo-container">
        <div className="patient-profile">
          <div className="patient-image">
            <img src={patient.url} alt="patient image" />
          </div>
          <div className="patient-text">
            <h2>{patient.name}</h2>
            <span className="patient-email">{patient.email}</span>
          </div>
          <div className="patient-appointments">
            <div className="past">
              <h2>{patient.past}</h2>
              <span>Past</span>
            </div>
            <hr />
            <div className="upcoming">
              <h2>{patient.upcoming}</h2>
              <span>Upcoming</span>
            </div>
          </div>
          <div className="send-btn">
            <button>Send Message</button>
          </div>
        </div>
        <div className="patient-information">
          <div className="gender">
            <h4>Gender</h4>
            <span>{patient.gender}</span>
          </div>
          <div className="birthday">
            <h4>Birthday</h4>
            <span>{patient.birthday}</span>
          </div>
          <div className="address">
            <h4>Street Address</h4>
            <span>{patient.streetAddress}</span>
          </div>
          <div className="city">
            <h4>City</h4>
            <span>{patient.city}</span>
          </div>
          <div className="zip">
            <h4>Zip Code</h4>
            <span>{patient.zipCode}</span>
          </div>
          <div className="status">
            <h4>Member Status</h4>
            <span>{patient.memberStatus}</span>
          </div>
          <div className="registration">
            <h4>Registration Date</h4>
            <span>{patient.registerDate}</span>
          </div>
          <div className="phone">
            <h4>Phone Number</h4>
            <span>{patient.phoneNumber}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientInfo;
