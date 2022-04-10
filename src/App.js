import { Routes, Route } from "react-router-dom";

import Sidebar from "./Components/Sidebar/Sidebar";
import Navbar from "./Components/Navbar/Navbar";
import PatientInfo from "./Components/PatientInfo/PatientInfo";
import Notes from "./Components/Notes/Notes";
import Appointments from "./Components/Appointments/Appointments";
import Documents from "./Components/Documents/Documents";

import "./App.css";

const Overview = () => {
  return (
    <>
      <main>
        <Navbar />
        <PatientInfo />
        <Notes />
        <Appointments />
        <Documents />
      </main>
    </>
  );
};

const Callender = () => <h1>Callender</h1>;

const PatientList = () => <h1>PatientList</h1>;

const Messages = () => <h1>Messages</h1>;

const Payment = () => <h1>Payment</h1>;

const Settings = () => <h1>Settings</h1>;

const Help = () => <h1>Help</h1>;

function App() {
  return (
    <div className="App">
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Overview />} />
          <Route path="/callender" element={<Callender />} />
          <Route path="/patient-list" element={<PatientList />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
