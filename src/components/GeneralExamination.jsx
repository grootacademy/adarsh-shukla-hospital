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
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6"><input type="text" placeholder="Pallor" name="pallor" onClick={handleChange}/></div>
          <div className="col-md-6"><input type="text" placeholder="Lymphadenopathy" onClick={handleChange}/></div>
          <div className="col-md-6"><input type="text" placeholder="Thyroid" onClick={handleChange}/></div>
          <div className="col-md-6"><input type="text" placeholder="Tanners" onClick={handleChange}/></div>
          <div className="col-md-6"><input type="text" placeholder="Breast" onClick={handleChange}/></div>
          <div className="col-md-6"><input type="text" placeholder="Hirsutism" onClick={handleChange}/></div>
        </div>
        <div className="h2">
            <b><u>ULTRASOUND</u></b>
        </div>
        <div className="row">
            <div className="col-md-6"><input type="text" placeholder="Day 2: Uterus" name="day2Uterus" onClick={handleChange}/></div>
            <div className="col-md-6"><input type="text" placeholder="Endometrial Thickness" name="endometrialThickness" onClick={handleChange}/></div>
            <div className="col-md-6"><input type="text" placeholder="Rt. Ovary" name="rtOvary" onClick={handleChange}/></div>
            <div className="col-md-6"><input type="text" placeholder="Lt. Ovary" name="ltOvary" onClick={handleChange}/></div>
            <div className="col-md-6"><input type="text" placeholder="Any Other" name="anyOther" onClick={handleChange}/></div>
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
