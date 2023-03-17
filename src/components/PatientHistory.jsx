import React, { useState } from "react";

function PatientHistory(props) {

  const [onhistory, setOnHistory] = useState("")
  const [MedicalHistory, setMedicalHistory] = useState("")
  const [MenstrualHistory, setMenstrualHistory] = useState("")

  const onHistoryHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setOnHistory({ ...onhistory, [name]: value })
  }

  const medicalHistoryHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (e.target.type == "checkbox") {

      setMedicalHistory({ ...MedicalHistory, [name]: e.target.checked })

    } else {

      setMedicalHistory({ ...MedicalHistory, [name]: value })

    }

  }

  const menstrualHistoryHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (e.target.type == "checkbox") {

      setMenstrualHistory({ ...MenstrualHistory, [name]: e.target.checked })

    } else {

      setMenstrualHistory({ ...MenstrualHistory, [name]: value })

    }
  }

  let arr = {}

  console.log(MenstrualHistory)

  return (
    <>
      <div className="bg-danger p-4 text-white d-flex">
        <div className="container-fluid">
          <div className="row">
            <div className=" h1 col-sm-4 text-sm-left"> STEP 2 OF 6 </div>
            <div className="col-sm-4">
              <h3 className="d-flex align-items-center justify-content-center">
                <img
                  src="/images/history.png"
                  alt="Error Loading Image"
                  height="30px"
                  className="mx-2"
                />
                Patient History
              </h3>
            </div>
            <div className='col-md-4'>
              <p>Name: {props.personalDetails.patientName}</p>
              <p>Age: {props.personalDetails.age}</p>
              <p>Gender: {props.personalDetails.gender}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <h2>
              <u>
                <b>On History</b>
              </u>
            </h2>
            <div className="row">
              <div className="col-md-12">
                <input type="text" placeholder="Married For" name="marriedFor" onChange={onHistoryHandler} />
              </div>
            </div>
            <div className="d-flex mt-4">
              <div className="row">
                <div className="col-md-6">
                  <input type="text" placeholder="Cohabitation" name="cohabitation" onChange={onHistoryHandler} />
                </div>
              </div>
              <div className="col-md-6 mx-3">
                <input type="text" placeholder="Coital Frequency" name="coitalFrequency" onChange={onHistoryHandler} />
              </div>
            </div>
            <div>
              <h2 className="my-3">
                <b><u>Medical History</u></b>
              </h2>
            </div>
            <div className="row">
              <div className="col-md-4">
                <label htmlFor="HTN">
                  <input type="checkbox" id="HTN" name="htn" onChange={medicalHistoryHandler} /> HTN
                </label>
              </div>
              <div className="col-md-4">
                <label htmlFor="diabetes">
                  <input type="checkbox" id="diabetes" name="diabetes" onChange={medicalHistoryHandler} /> Diabetes
                </label>
              </div>
              <div className="col-md-4">
                <label htmlFor="Asthma">
                  <input type="checkbox" id="Asthma" name="asthma" onChange={medicalHistoryHandler} /> Asthma
                </label>
              </div>

              <div className="col-md-4">
                <label htmlFor="Epilepsy">
                  <input type="checkbox" id="Epilepsy" name="epilepsy" onChange={medicalHistoryHandler} /> Epilepsy
                </label>
              </div>
              <div className="col-md-4">
                <label htmlFor="Tuberculosis">
                  <input type="checkbox" id="Tuberculosis" name="tuberculosis" onChange={medicalHistoryHandler} /> Tuberculosis
                </label>
              </div>
              <div className="col-md-4">
                <label htmlFor="Cancer">
                  <input type="checkbox" id="Cancer" name="cancer" onChange={medicalHistoryHandler} /> Cancer
                </label>
              </div>

              <div className="row mt-3">
                <div className="col-md-12">
                  <input type="text" placeholder="Any Other" name="extra" onChange={medicalHistoryHandler} />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <input type="text" placeholder="Surgical History" name="surgicalHistory" onChange={medicalHistoryHandler} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 my-2">
            <h2>
              <b>
                <u>Menstrual History</u>
              </b>
            </h2>
            <div className="row">
              <div className="col-md-4">
                <input type="text" placeholder="Menarche" name="menarche" onChange={menstrualHistoryHandler} />
              </div>
              <div className="col-md-4">
                <input type="text" placeholder="LMP" name="lmp" onChange={menstrualHistoryHandler} />
              </div>
              <div className="col-md-4">
                <div>
                  <label htmlFor="regular">
                    <input type="radio" id="regular" name="menstrualHistory" value="regular" onChange={menstrualHistoryHandler} />
                    Regular
                  </label>
                </div>
                <div>
                  <label htmlFor="Irregular">
                    <input type="radio" id="Irregular" name="menstrualHistory" value="Irregular" onChange={menstrualHistoryHandler} />
                    Irregular
                  </label>
                </div>
              </div>
            </div>
            <div className="row d-flex ">
              <div className="col-md-4">
                <input type="text" placeholder="Length" name="length" onChange={menstrualHistoryHandler} />
              </div>
              <div className="col-md-4">
                <input type="text" placeholder="Duration" name="duration" onChange={menstrualHistoryHandler} />
              </div>
              <div className="col-md-4">
                <input type="text" placeholder="Flow" name="flow" onChange={menstrualHistoryHandler} />
              </div>
            </div>
            <div className="d-flex mt-5">

              <ul className="list-group">
                <li className="list-group-item">Coital Disturbance </li>
                <li className="list-group-item">PID/Tuberculosis</li>
                <li className="list-group-item">PCOS</li>
                <li className="list-group-item">Hyperprolactinemia</li>
                <li className="list-group-item">Hyper/Hypothyroidism</li>
                <li className="list-group-item">Premenstrual Disturbance/Depression</li>
                <li className="list-group-item">Dyspareunia/Dismenorrhoea</li>
              </ul>

              <ul className="list-group">
                <li className="list-group-item"><input type="checkbox" name="coitalDisturbance" onChange={menstrualHistoryHandler} />
                  {MenstrualHistory?.coitalDisturbance ? "yes" : "no"}
                </li>
                <li className="list-group-item"><input type="checkbox" name="PIDTuberculosis" onChange={menstrualHistoryHandler} />
                  {MenstrualHistory?.PIDTuberculosis ? "yes" : "no"}
                </li>
                <li className="list-group-item"><input type="checkbox" name="PCOS" onChange={menstrualHistoryHandler} />
                  {MenstrualHistory?.PCOS ? "yes" : "no"}
                </li>
                <li className="list-group-item"><input type="checkbox" name="Hyperprolactinemia" onChange={menstrualHistoryHandler} />
                  {MenstrualHistory?.Hyperprolactinemia ? "yes" : "no"}
                </li>
                <li className="list-group-item"><input type="checkbox" name="HyperHypothyroidis" onChange={menstrualHistoryHandler} />
                  {MenstrualHistory?.HyperHypothyroidis ? "yes" : "no"}
                </li>
                <li className="list-group-item"><input type="checkbox" name="PremenstrualDisturbanceDepression" onChange={menstrualHistoryHandler} />
                  {MenstrualHistory?.PremenstrualDisturbanceDepression ? "yes" : "no"}
                </li>
                <li className="list-group-item"><input type="checkbox" name="DyspareuniaDismenorrhoea" onChange={menstrualHistoryHandler} />
                  {MenstrualHistory?.DyspareuniaDismenorrhoea ? "yes" : "no"}
                </li>
              </ul>
            </div>
            <div className="mt-5 d-flex justify-content-end">
              <button className="btn btn-outline-danger btn-lg" onClick={props.decreaseNum}>
                &lt; BACK{" "}
              </button>
              <button className="btn btn-outline-danger btn-lg" onClick={props.increaseNum}>
                NEXT &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PatientHistory;
