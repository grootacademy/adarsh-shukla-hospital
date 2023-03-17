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
              <img
                src="/images/history.png"
                alt="Error Loading Image"
                height="30px"
                className="mx-2"
              />
              OTHER DETAILS
              </h3>
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
        <div className="row">
          <div className="col-md-6">
            <input type="text" placeholder="Uterus" name="Uterus" onClick={handleChange} />
          </div>
          <div className="col-md-6">
            <input type="text" placeholder="Genetic Study" name="Genetic Study" onClick={handleChange}/>
          </div>
          <div className="col-md-6">
            <input type="text" placeholder="Rt. Ovary" name="Rt. Ovary" onClick={handleChange} />
          </div>
          <div className="col-md-6">
            <input type="text" placeholder="Lt. Ovary" name="Lt.Ovary" onClick={handleChange} />
          </div>
        </div>
        <div><h2><b><u>Laparohyteroscopy</u></b></h2></div>
        <div className="row">
            <div className="col-md-12"><input type="text" placeholder="Details" name="details" onClick={handleChange}/></div>
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
