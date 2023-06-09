import React from "react";

function PatientDetails(props) {
  return (
    <>
    <div className="bg-danger p-4 text-white d-flex">
        <div className="container-fluid">
          <div className="row">
            <div className=" h4 col-sm-3 text-sm-left">
              <p>Name: {props.personalDetails.patientName}</p>
            </div>

            <div className=" h4 col-sm-3 text-sm-left">
              <p>Gender: {props.personalDetails.gender}</p>
            </div>
            <div className=" h4 col-sm-3 text-sm-left">
              <p>BMI: {props.personalDetails.bmi}</p>
            </div>
            <div className=" h4 col-sm-3 text-sm-left">
              <p>Infertility: {props.personalDetails.gender}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3">
              <p>Age: {props.personalDetails.age}</p>
            </div>
            <div className="col-sm-3">
              <p>Height: {props.personalDetails.height}</p>
            </div>
            <div className="col-sm-3">
              <p>Weight: {props.personalDetails.weight}</p>
            </div>
            <div className="col-sm-3">
              <p>Husband Name: {props.personalDetails.HusbandName}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Patient History (Menstrual - Medical - Surgical)
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <div className="row my-2">
                <div className=" d-flex justify-content-end">
                  <button className="btn btn-outline-danger mt-5 btn-lg">
                    Edit
                  </button>
                </div>
                <div className="col-md-3 my-2">
                  <b>
                    <u>On History</u>
                  </b>
                </div>
                <div className="col-md-3">Married For: value</div>
                <div className="col-md-3">Cohabitation: value</div>
                <div className="col-md-3">Coital Freq: value</div>
              </div>
              <div className="row my-4">
                <div className="col-md-2">
                  <b>
                    <u>Medical History</u>
                  </b>
                </div>
                <div className="col-md-2">Diabetes</div>
                <div className="col-md-2">Cancer</div>
                <div className="col-md-2">Epilepsy</div>
                <div className="col-md-2">Tuberculosis</div>
                <div className="col-md-2">Asthma</div>
              </div>
              <div className="row my-4">
                <div className="col-md-6">
                  {" "}
                  <b>
                    <u>Surgical History</u>
                  </b>{" "}
                </div>
                <div className="col-md-6">Value</div>
              </div>
              <div className="row my-4">
                <b>
                  <u>Menstrual History</u>
                </b>
                <div className="col-md-2">Regular</div>
                <div className="col-md-2">Menarche: Value</div>
                <div className="col-md-2"> LMP: Value</div>
                <div className="col-md-2"> Duration: Value</div>
                <div className="col-md-2"> Length: Value</div>
                <div className="col-md-2"> Flow: Value</div>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Husband Details (Presonal - Semen Analysis)
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <div className="container-fluid">
                <div className=" d-flex justify-content-end">
                  <button className="btn btn-outline-danger mt-5 btn-lg">
                    Edit
                  </button>
                </div>
                <div className="row my-4">
                  <div className="col-md-2">
                    <b>
                      <u>Personal Details</u>
                    </b>
                  </div>
                  <div className="col-md-2"> Age: Value</div>
                  <div className="col-md-2"> Occupation: Value</div>
                  <div className="col-md-2"> Medical History: Value</div>
                  <div className="col-md-2"> Surgical History: Value</div>
                </div>
                <div className="row my-4">
                  <div className="col-md-2">Count: Value</div>
                  <div className="col-md-2">Motility: Value</div>
                  <div className="col-md-2">Abnormal Forms: Value </div>
                  <div className="col-md-2">PUS Cells: Value</div>
                  <div className="col-md-2">Culture/Sensitivity: Value</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              General Examination & Ultrasound
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <div className="container-fluid">
                <div className=" d-flex justify-content-end">
                  <button className="btn btn-outline-danger mt-5 btn-lg">
                    Edit
                  </button>
                </div>
                <div className="row my-4">
                  <div className="col-md-2 mt-2">Pallor: Value</div>
                  <div className="col-md-2">Lymphadenopathy: Value</div>
                  <div className="col-md-2">Thyroid: Value</div>
                  <div className="col-md-2">Tanners: Value</div>
                  <div className="col-md-2">Breast: Value</div>
                  <div className="col-md-2">Hirsutism: Value</div>
                </div>
                <div className="row my-4">
                  <div className="col-md-2">
                    <b>
                      <u>Ultrasound</u>
                    </b>
                  </div>
                  <div className="col-md-2">Day 2: Uterus: Value</div>
                  <div className="col-md-2">Endometrial Thickness: Value</div>
                  <div className="col-md-2">Rt. Ovary: Value</div>
                  <div className="col-md-2">Lt. Ovary: Value</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingFour">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFour"
              aria-expanded="false"
              aria-controls="flush-collapseFour"
            >
              Investigations
            </button>
          </h2>
          <div
            id="flush-collapseFour"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingFour"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6">Table 1</div>
                  <div className="col-md-6">Table 2</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingFive">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFive"
              aria-expanded="false"
              aria-controls="flush-collapseFive"
            >
              Hysterosalpingography & Laparohysteroscopy
            </button>
          </h2>
          <div
            id="flush-collapseFive"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingFive"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <table style={{width:"100%"}}>
                      <thead
                        style={{
                          textAlign: "center",
                          border: "1px solid black",
                        }}
                        className="mt-3"
                      >
                        <tr >
                          <th>Impression</th>
                          <th> Plan</th>
                        </tr>
                      </thead>
                      <tbody className="my-3">
                        <tr >
                          <td>
                            <input
                              type="text"
                              name=""
                              id="impression"
                              placeholder="Click or Tap to write here"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name=""
                              id="plan"
                              placeholder="Click or Tap to write here"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="btn btn-outline-danger btn-lg"
          onClick={props.decreaseNum}
        >
          &lt; BACK{" "}
        </button>
      </div>
    </>
  );
}

export default PatientDetails;
