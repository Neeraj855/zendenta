import { FaNotesMedical } from "react-icons/fa";

const UpcomingAppointment = ({ date, time, treatment, dentist, nurse }) => {
  return (
    <>
      <div className="timeline-date">
        <h2>{date}</h2>
        <span>{time}</span>
      </div>
      <hr />
      <div className="timeline-treatment">
        <span>Treatment</span>
        <h4>{treatment}</h4>
      </div>
      <hr />
      <div className="timeline-doctor">
        <div className="dentist">
          <span>Dentist</span>
          <h5>{dentist}</h5>
        </div>
        <div className="nurse">
          <span>Nurse</span>
          <h5>{nurse}</h5>
        </div>
      </div>
      <div className="timeline-note">
        <FaNotesMedical />
        <a href="#">Note</a>
      </div>
    </>
  );
};

export default UpcomingAppointment;
