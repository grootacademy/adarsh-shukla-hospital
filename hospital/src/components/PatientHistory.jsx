import React, { useState } from "react";

function PatientHistory(props) {

  let { patientHistory, setPatientHistory } = props;
  
  const onHistoryHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    let onHistory = { ...patientHistory.onHistory, [name]: value }
    setPatientHistory({ ...patientHistory, onHistory })
  }

  const medicalHistoryHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    let medicalHistory = {}

    if (e.target.type == "checkbox") {
      medicalHistory = { ...patientHistory.medicalHistory, [name]: e.target.checked }
    } else {
      medicalHistory = { ...patientHistory.medicalHistory, [name]: value }
    }

    setPatientHistory({ ...patientHistory, medicalHistory })
  }

  const menstrualHistoryHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    let menstrualHistory = {}

    if (e.target.type == "checkbox") {
      menstrualHistory = { ...patientHistory.menstrualHistory, [name]: e.target.checked }
    } else {
      menstrualHistory = { ...patientHistory.menstrualHistory, [name]: value }
    }

    setPatientHistory({ ...patientHistory, menstrualHistory })
  }


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
            <div className='col-md-4 align-items-center justify-content-center'>
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
                <input type="text" required name="marriedFor" value={patientHistory.onHistory?.marriedFor} onChange={onHistoryHandler} />
                <label htmlFor="">Married For</label>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <input type="text" required name="cohabitation" onChange={onHistoryHandler} />
                <label htmlFor="">Cohabitation</label>
              </div>
              <div className="col-md-6">
                <input type="text" required name="coitalFrequency" onChange={onHistoryHandler} />
                <label htmlFor="">Coital Frequency</label>
              </div>
            </div>

            <div>
              <h2 className="my-3">
                <b><u>Medical History</u></b>
              </h2>
            </div>
            <div className="row">
              <div className="col-md-4">
                <input type="checkbox" id="HTN" name="htn" onChange={medicalHistoryHandler} />
                <label htmlFor="HTN">HTN</label>
              </div>
              <div className="col-md-4">
                <input type="checkbox" id="diabetes" name="diabetes" onChange={medicalHistoryHandler} />
                <label htmlFor="diabetes"> Diabetes </label>
              </div>
              <div className="col-md-4">
                <input type="checkbox" id="Asthma" name="asthma" onChange={medicalHistoryHandler} />
                <label htmlFor="Asthma">Asthma </label>
              </div>

              <div className="col-md-4">
                <input type="checkbox" id="Epilepsy" name="epilepsy" onChange={medicalHistoryHandler} />
                <label htmlFor="Epilepsy">Epilepsy </label>
              </div>
              <div className="col-md-4">
                <input type="checkbox" id="Tuberculosis" name="tuberculosis" onChange={medicalHistoryHandler} />
                <label htmlFor="Tuberculosis">Tuberculosis  </label>
              </div>
              <div className="col-md-4">
                <input type="checkbox" id="Cancer" name="cancer" onChange={medicalHistoryHandler} />
                <label htmlFor="Cancer">Cancer </label>
              </div>

              <div className="row mt-3">
                <div className="col-md-12">
                  <input type="text" required name="extra" onChange={medicalHistoryHandler} />
                  <label htmlFor="">ANY OTHER</label>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <input type="text" required name="surgicalHistory" onChange={medicalHistoryHandler} />
                  <label htmlFor="">SURGICAL HISTORY</label>
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
                <input type="text" required name="menarche" onChange={menstrualHistoryHandler} />
                <label htmlFor="">MENARCHE</label>
              </div>
              <div className="col-md-4">
                <input type="text" required name="lmp" onChange={menstrualHistoryHandler} />
                <label htmlFor="">LMP</label>
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
                <input type="text" required name="length" onChange={menstrualHistoryHandler} /><label htmlFor="">LENGTH</label>

              </div>
              <div className="col-md-4">
                <input type="text" required name="duration" onChange={menstrualHistoryHandler} />
                <label htmlFor=""> DURATION</label>
              </div>
              <div className="col-md-4">
                <input type="text" required name="flow" onChange={menstrualHistoryHandler} />
                <label htmlFor=""> FLOW</label>
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
                  {patientHistory.menstrualHistory?.coitalDisturbance ? "YES" : "NO"}
                </li>
                <li className="list-group-item"><input type="checkbox" name="PIDTuberculosis" onChange={menstrualHistoryHandler} />
                  {patientHistory.menstrualHistory?.PIDTuberculosis ? "YES" : "NO"}
                </li>
                <li className="list-group-item"><input type="checkbox" name="PCOS" onChange={menstrualHistoryHandler} />
                  {patientHistory.menstrualHistory?.PCOS ? "YES" : "NO"}
                </li>
                <li className="list-group-item"><input type="checkbox" name="Hyperprolactinemia" onChange={menstrualHistoryHandler} />
                  {patientHistory.menstrualHistory?.Hyperprolactinemia ? "YES" : "NO"}
                </li>
                <li className="list-group-item"><input type="checkbox" name="HyperHypothyroidis" onChange={menstrualHistoryHandler} />
                  {patientHistory.menstrualHistory?.HyperHypothyroidis ? "YES" : "NO"}
                </li>
                <li className="list-group-item"><input type="checkbox" name="PremenstrualDisturbanceDepression" onChange={menstrualHistoryHandler} />
                  {patientHistory.menstrualHistory?.PremenstrualDisturbanceDepression ? "YES" : "NO"}
                </li>
                <li className="list-group-item"><input type="checkbox" name="DyspareuniaDismenorrhoea" onChange={menstrualHistoryHandler} />
                  {patientHistory.menstrualHistory?.DyspareuniaDismenorrhoea ? "YES" : "NO"}
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
