import React, { useState } from "react";

function GeneralExamination(props) {
  const [GeneralDetails, setGeneralDetails] = useState("");
  const [ultrasound, setUltrasound] = useState("");

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    


  }
  return (
    <>
      <div className="bg-danger p-4 text-white d-flex">
        <div className="container-fluid">
          <div className="row">
            <div className=" h1 col-sm-4 text-sm-left"> STEP 4 OF 6 </div>
              <div className="col-sm-4">
                <h3 className="d-flex align-items-center justify-content-center">
                <img src="/images/history.png" alt="Error Loading Image" height="30px" className="mx-2" />
                General Details
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
        <div className="row my-3">
          <div className="col-md-6"><input type="text" required name="pallor" onChange={handleChange}/>
          <label htmlFor="">PALLOR</label></div>
          <div className="col-md-6"><input type="text" required name ="Lymphadenopathy" onChange={handleChange}/>
          <label htmlFor="">LYMPHADENOPATHY</label></div>
          <div className="col-md-6"><input type="text" required name="Thyroid" onChange={handleChange}/>
          <label htmlFor="">THYROID</label></div>
          <div className="col-md-6"><input type="text" required name="Tanners" onChange={handleChange}/>
          <label htmlFor="">TANNERS</label></div>
          <div className="col-md-6"><input type="text" required name="Breast" onChange={handleChange}/>
          <label htmlFor="">BREAST</label></div>
          <div className="col-md-6"><input type="text" required name="Hirsutism" onChange={handleChange}/>
          <label htmlFor="">HIRSUTISM</label></div>
        </div>
        <div className="h2">
            <b><u>ULTRASOUND</u></b>
        </div>
        <div className="row my-3">
            <div className="col-md-6"><input type="text" required  name="day2Uterus" onChange={handleChange}/>
            <label htmlFor="">Day 2: UTERUS</label></div>
            <div className="col-md-6"><input type="text" required  name="endometrialThickness" onChange={handleChange}/>
            <label htmlFor="">ENDOMETRIAL THICKNESS</label></div>
            <div className="col-md-6"><input type="text" required  name="rtOvary" onChange={handleChange}/>
            <label htmlFor="">Rt. OVARY</label></div>
            <div className="col-md-6"><input type="text" required  name="ltOvary" onChange={handleChange}/>
            <label htmlFor="">Lt. OVARY</label></div>
            <div className="col-md-6"><input type="text" required  name="anyOther" onChange={handleChange}/>
            <label htmlFor="">ANY OTHER</label></div>
        </div>
      </div>
        <div className=" d-flex justify-content-end">
        <button className="btn btn-outline-danger mt-5 btn-lg" onClick={props.decreaseNum}>&lt; BACK</button>
            <button className="btn btn-outline-danger mt-5 btn-lg" style={{marginLeft:"5px"}} onClick={props.increaseNum}>NEXT &gt;</button>
          </div>
    </>
  );
}

export default GeneralExamination;
