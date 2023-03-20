import React, { useState } from "react";

function OtherDetails(props) {

  const [OtherDetails, setOtherDetails] = useState("")
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setOtherDetails({...OtherDetails, [name]:value})
  }
  return (
    <>
      <div className="bg-danger p-4 text-white d-flex">
        <div className="container-fluid">
          <div className="row">
            <div className=" h1 col-sm-4 text-sm-left"> STEP 6 OF 6 </div>
            <div className="col-sm-4">
              <h3 className="d-flex align-items-center justify-content-center">
                <img src="/images/history.png" alt="History Image" height="30px"           className="mx-2" />

                OTHER DETAILS
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
        <div className="h2">
          <b>
            <u>HYSTEROSALPINGOGRAPHY</u>
          </b>
        </div>
        <div className="row my-4">
          <div className="col-md-6 mt-3">
            <input type="text" placeholder="Uterus" name="Uterus" onChange={handleChange} />
          </div>
          <div className="col-md-6 mt-3">
            <input type="text" placeholder="Genetic Study" name="Genetic Study" onChange={handleChange}/>
          </div>
          <div className="col-md-6 mt-3">
            <input type="text" placeholder="Rt. Ovary" name="Rt. Ovary" onChange={handleChange} />
          </div>
          <div className="col-md-6 mt-3">
            <input type="text" placeholder="Lt. Ovary" name="Lt.Ovary" onChange={handleChange} />
          </div>
        </div>
        <div><h2><b><u>Laparohyteroscopy</u></b></h2></div>
        <div className="row my-4">
            <div className="col-md-12"><input type="text" placeholder="Details" name="details" onChange={handleChange}/></div>
        </div>
      </div>

        <div className=" d-flex justify-content-end">
            <button className="btn btn-outline-danger mt-5 btn-lg" onClick={props.decreaseNum}>&lt; BACK</button>
            <button className="btn btn-outline-danger mt-5 btn-lg" style={{marginLeft:"5px"}} onClick={props.increaseNum}>SUBMIT &gt;</button>
          </div>
    </>
  );
}

export default OtherDetails;
