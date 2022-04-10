import { useEffect, useState } from "react";
import UpcomingAppointment from "./UpcomingAppointment/UpcomingAppointment";

import "./Appointments.css";

const Appointments = () => {
  const [appointment, setAppointment] = useState([]);

  useEffect(() => {
    fetch(
      "https://625276447f7fa1b1dde57326.mockapi.io/zendenta/appointmentDetails"
    ).then((result) => {
      result.json().then((response) => {
        setAppointment(response[0].upcomingAppointments);
      });
    });
  }, []);

  const { date, time, treatment, dentist, nurse } = appointment;

  return (
    <div className="appointments">
      <div className="appointments-container">
        <div className="appointments-nav">
          <ul>
            <li className="active">
              <a href="#">Upcomming Appointments</a>
            </li>
            <li>
              <a href="#">Past Appointments</a>
            </li>
            <li>
              <a href="#">Medical Records</a>
            </li>
          </ul>
        </div>

        <div className="appointments-page">
          <div className="appointments-heading">
            <div className="heading">
              <h5>Root Canal Treatment</h5>
            </div>
            <div className="previous-treatment">
              <button>
                <span>^</span>
                Show Previous Treatment
              </button>
            </div>
          </div>
          <hr />

          <div className="timeline-section">
            <div className="timeline-info">
              <UpcomingAppointment
                date={date}
                time={time}
                treatment={treatment}
                dentist={dentist}
                nurse={nurse}
              />
            </div>
            <div className="timeline-info">
              <UpcomingAppointment
                date={date}
                time={time}
                treatment={treatment}
                dentist={dentist}
                nurse={nurse}
              />
            </div>
            <div className="timeline-info">
              <UpcomingAppointment
                date={date}
                time={time}
                treatment={treatment}
                dentist={dentist}
                nurse={nurse}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
