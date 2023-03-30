import React,{useState} from "react";
import "./investigation.css";

function Investigations(props) {
  const [General, setGeneral] = useState("");
  const [Hormonal, setHormonal] = useState("");
  const handleHormonalChange= (e) =>{
    const name = e.target.name;
    const value = e.target.value;

    setHormonal({...Hormonal, [name]: value})

  }
  const handleGeneralChange = (e) =>{
    const name = e.target.name;
    const value = e.target.value;

    setGeneral({...General, [name]: value})

  }
  return (
    <>
      <div className="bg-danger p-4 text-white d-flex">
        <div className="container-fluid">
          <div className="row">
            <div className=" h1 col-sm-4 text-sm-left"> STEP 5 OF 6 </div>
            <div className="col-sm-4">
              <h3 className="d-flex align-items-center justify-content-center">
                <img
                  src="/images/history.png"
                  alt="Error Loading Image"
                  height="30px"
                  className="mx-2"
                />
                INVESTIGATIONS
              </h3>
            </div>
            <div className="col-md-4">
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
          <div className="h2">
          <b>
            <u>GENERAL</u>
          </b>
        </div>
            <div class="table-responsive">
              <table class="table table-bordered" style={{width:"70%", textAlign:"center"}}>
                <tbody>
                  <tr>
                    <td>HB</td>
                    <td>VALUE</td>
                  </tr>
                  <tr>
                    <td>TLC</td>
                    <td>VALUE</td>
                  </tr>
                  <tr>
                    <td>DLC</td>
                    <td>VALUE</td>
                  </tr>
                  <tr>
                    <td>Platelets</td>
                    <td>VALUE</td>
                  </tr>
                  <tr>
                    <td>ESR</td>
                    <td>VALUE</td>
                  </tr>
                  <tr>
                    <td>RBS</td>
                    <td>VALUE</td>
                  </tr>
                  <tr>
                    <td>HBA1C</td>
                    <td>VALUE</td>
                  </tr>
                  <tr>
                    <td>APTT</td>
                    <td>VALUE</td>
                  </tr>
                  <tr>
                    <td>ACA</td>
                    <td>VALUE</td>
                  </tr>
                  <tr>
                    <td>LAC</td>
                    <td>VALUE</td>
                  </tr>
                  <tr>
                    <td>Homocysteine</td>
                    <td>VALUE</td>
                  </tr>
                  <tr>
                    <td>VIT.D</td>
                    <td>VALUE</td>
                  </tr>
                  <tr>
                    <td>HIV</td>
                    <td>VALUE</td>
                  </tr>
                  <tr>
                    <td>HBsAG</td>
                    <td>VALUE</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-md-6">
          <div className="h2">
          <b>
            <u>HORMONAL</u>
          </b>
        </div>
            <div class="table-responsive" >
              <table class="table table-bordered" style={{width:"70%"}}>
                <tbody>
                  <tr>
                    <td>S. TSH/T3/T4</td>
                    <td>VALUE</td>
                  </tr>
                  <tr>
                    <td>S.Prolactin</td>
                    <td>VALUE</td>
                    </tr>
                  <tr>
                    <td>S.LH</td>
                    <td>VALUE</td>
                  </tr>
                  <tr>
                    <td>S.FSH</td>
                    <td>VALUE</td>
                  </tr>
                  <tr>
                    <td>S.AMH</td>
                    <td>VALUE</td>
                  </tr>
                  <tr>
                    <td>S.ESTRADIOL</td>
                    <td>VALUE</td>
                  </tr>
                  <tr>
                    <td>S.PROGESTERONE</td>
                    <td>VALUE</td>
                  </tr>
                </tbody>
              </table>
              <div>
                <input type="text" required name="chestXray" onChange={handleHormonalChange} />
                <label label htmlFor="">CHEST X-RAY</label>
              </div>
              <div>
                <input type="text" required name="Mantoux/ TB-PCR" onChange={handleHormonalChange}/>
                <label htmlFor="">mantoux</label>
              </div>
            </div>
          </div>
        </div>
        <div className=" d-flex justify-content-end">
          <button className="btn btn-outline-danger mt-5 btn-lg"
            onClick={props.decreaseNum}> &lt; BACK
          </button>
          <button className="btn btn-outline-danger mt-5 btn-lg "
            style={{ marginLeft: "5px" }} onClick={props.increaseNum}> NEXT &gt;
          </button>
        </div>
      </div>
    </>
  );
}

export default Investigations;
