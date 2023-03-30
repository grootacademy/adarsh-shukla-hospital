import React, { useState } from "react";

function HusbandDetail(props) {

  const [HusbandDetails, setHusbandDetails] = useState("");
  const [husbandpersonalDetails, sethusbandpersonalDetails] = useState("");
  const husbandDetailschangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    
    setHusbandDetails({...HusbandDetails, [name]:value})
  }
  const husbandpersonalDetailsHandler = (e) => {

    const name = e.target.name;
    const value = e.target.value;
    
    if (e.target.type === "checkbox") {
      sethusbandpersonalDetails({ ...husbandpersonalDetails, [name]: e.target.checked })
    }else{
      sethusbandpersonalDetails({...husbandpersonalDetails, [name]:value});
    }
  }
  return (
    <>
      <div className="bg-danger p-4 text-white d-flex">
        <div className="container-fluid">
          <div className="row">
            <div className=" h1 col-sm-4 text-sm-left">STEP 3 OF 6</div>
            <div className="col-sm-4">
              <h3 className="d-flex align-items-center justify-content-center">
              <img
                src="/images/history.png"
                alt="Error Loading Image"
                height="30px"
                className="mx-2"
              />
              HUSBAND DETAILS
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
        <div className="h2">Personal Details</div>
        <div className="row mt-4">
          <div className="col-md-6">
            <input type="text" required name="age" onChange={husbandpersonalDetailsHandler}/>
            <label htmlFor=""> AGE</label>
          </div>
          <div className="col-md-6">
            <input type="text" required name="occupation" onChange={husbandpersonalDetailsHandler}/>
            <label htmlFor="">OCCUPATION</label>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-6">
            <input type="text" required name="MedicalHistory" onChange={husbandpersonalDetailsHandler} />
            <label htmlFor="">MEDICAL HISTORY</label>
          </div>
          <div className="col-md-6">
            <input type="text" required name="SurgicalHistory" onChange={husbandpersonalDetailsHandler} />
            <label htmlFor="">SURGICAL HISTORY</label>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-3"> H/O</div>
          <div className="col-md-3">
            <label htmlFor="CoitalDisturbance">
              <input type="checkbox" id="CoitalDisturbance" name="CoitalDisturbance" onChange={husbandpersonalDetailsHandler}/>
              Coital Disturbance
            </label>
          </div>
          <div className="col-md-3">
            <label htmlFor="Premature">
              <input type="checkbox" id="Premature" name="premature" onChange={husbandpersonalDetailsHandler} />
              Premature
            </label>
          </div>
          <div className="col-md-3">
            <label htmlFor="RerogradeEjaculation">
              <input type="checkbox" id="RerogradeEjaculation" name="rerogradeEjaculation" onChange={husbandpersonalDetailsHandler} />
              Rerograde Ejaculation
            </label>
          </div>
        </div>
        <div className="mt-4">
          <h2>HUSBAND SEMEN ANALYSIS</h2>
        </div>
        <div className="row mt-3">
          <div className="col-md-6 mt-3">
            <input type="text" required name="COUNT" onChange={husbandDetailschangeHandler}/>
            <label htmlFor="">COUNT</label>
          </div>
          <div className="col-md-6 mt-3">
            <input type="text" required name="motility" onChange={husbandDetailschangeHandler}/>
            <label htmlFor="">MOTILITY</label>
          </div>
          <div className="col-md-6 mt-3">
            <input type="text" required name="abnormalForms" onChange={husbandDetailschangeHandler}/>
            <label htmlFor="">ABNORMAL FORMS</label>
          </div>
          <div className="col-md-6 mt-3">
            <input type="text" required name="puscells" onChange={husbandDetailschangeHandler} />
            <label htmlFor="">PUS CELLS</label>
          </div>
          <div className="col-md-6 mt-3">
           <input type="text" required name="culture/sensitivity" onChange={husbandDetailschangeHandler}/>
           <label htmlFor="">CULTURE/SENSITIVITY</label>
          </div>
          <div className="col-md-6 mt-3 d-flex justify-content-end">
          <button className="btn btn-outline-danger mt-5 btn-lg" onClick={props.decreaseNum}>&lt; BACK</button>
            <button className="btn btn-outline-danger mt-5 btn-lg" style={{marginLeft:"5px"}} onClick={props.increaseNum}>NEXT &gt;</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HusbandDetail;
