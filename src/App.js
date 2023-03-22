import "./App.css";
import { useEffect, useState } from "react";
import PersonalDetails from "./components/PersonalDetails";
import GeneralExamination from "./components/GeneralExamination";
import HusbandDetail from "./components/HusbandDetail";
import Investigations from "./components/Investigations";
import OtherDetails from "./components/OtherDetails";
import PatientDetails from "./components/PatientDetails";
import PatientHistory from "./components/PatientHistory";
import Google from "./components/Google";

function App() {
  const [num, setNum] = useState(1)
  const [personalDetails, setPersonalDetails] = useState({})
  const [patientHistory, setPatientHistory] = useState({})

  const increaseNum = () => {
    setNum(num + 1)
  }

  const decreaseNum = () => {
    setNum(num - 1)
  }

  console.log(patientHistory)

  return (
    <>

      {/* {num == 1 && <PersonalDetails increaseNum={increaseNum} setPersonalDetails={setPersonalDetails} personalDetails={personalDetails} />}
      {num == 2 && <PatientHistory increaseNum={increaseNum} decreaseNum={decreaseNum} personalDetails={personalDetails} patientHistory={patientHistory} setPatientHistory={setPatientHistory} />}
      {num == 3 && <HusbandDetail increaseNum={increaseNum} decreaseNum={decreaseNum} personalDetails={personalDetails} />}
      {num == 4 && <GeneralExamination increaseNum={increaseNum} decreaseNum={decreaseNum} personalDetails={personalDetails} />}
      {num == 5 && <Investigations increaseNum={increaseNum} decreaseNum={decreaseNum} personalDetails={personalDetails} />}
      {num == 6 && <OtherDetails increaseNum={increaseNum} decreaseNum={decreaseNum} personalDetails={personalDetails} />}
      {num == 7 && <PatientDetails decreaseNum={decreaseNum} personalDetails={personalDetails} />} */}

      <Google />

    </>
  );
}

export default App;
