import { useEffect, useState } from "react"
import React from 'react'

function AddPatient({ setPersonalDetails, personalDetails, increaseNum }) {

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setPersonalDetails({ ...personalDetails, [name]: value })
    }

    return (
        <>
            <div className='bg-danger p-4 text-white d-flex'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='h1 col-md-4 text-center text-md-left'>Step 1 of 6</div>
                        <div className='col-md-4'>
                            <h2 className='d-flex align-items-center justify-content-center' style={{ whiteSpace: "nowrap" }}>
                                <img src="/images/icons8-male-user-96.png" alt="profile" height="40px" className='mx-3' />
                                Personal detail</h2>
                        </div>
                        <div className='col-md-4'>
                            <p>Name: {personalDetails.patientName}</p>
                            <p>Age: {personalDetails.age}</p>
                            <p>Gender: {personalDetails.gender}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className='container-fluid'>
                    <div className="row">
                        <div className='col-sm-4 mt-3'>
                            <input type="text" name="patientName" required value={personalDetails.patientName} onChange={handleChange} />
                            <label htmlFor="">Patient name</label>
                        </div>
                        <div className='col-sm-4 mt-3'>
                            <input type="text" required name="age" value={personalDetails.age} onChange={handleChange} />
                            <label htmlFor="">Age</label>
                        </div>
                        <div className='col-sm-4 mt-3 d-flex align-items-center'>
                            <h4 className="me-3">Gender</h4>
                            <label htmlFor="p-male">Male</label>
                            <input type="radio" id="p-male" name="gender" value="male" className="me-3" onChange={handleChange} />
                            <label htmlFor="p-female">Female</label>
                            <input type="radio" name="gender" id="p-female" value="female" onChange={handleChange} />
                        </div>

                        <h5 className="mt-4">Husband detail</h5>
                        <div className='col-sm-12'>
                            <input type="text" placeholder="Husband's name" name="husbandName" onChange={handleChange} />
                        </div>
                        <div className='col-sm-3 mt-3'>
                            <input type="text" placeholder='Height' name="height" onChange={handleChange} />
                        </div>
                        <div className='col-sm-3 mt-3'>
                            <input type="text" placeholder='Weight' name="weight" onChange={handleChange} />
                        </div>
                        <div className='col-sm-3 mt-3'>
                            <input type="text" placeholder='BMI' name="bmi" onChange={handleChange} />
                        </div>
                        <div className='col-sm-3 mt-3 pt-3'>
                            <h6>Infertility</h6>
                            <div className='d-flex flex-wrap'>
                                <div>  <input type="radio" name='infertility' onChange={handleChange} id='primary' value="primary" /> <label htmlFor="primary" className='mr-2'> PRIMARY </label></div>
                                <div>  <input type="radio" name='infertility' onChange={handleChange} id='secondary' value="secondary" /> <label htmlFor="secondary"> SECONDARY </label></div>
                            </div>
                        </div>
                        <div className='col-sm-12 mt-3'>
                            <input type="text" placeholder="Address" name="address" onChange={handleChange} />
                        </div>
                        <div className='col-sm-6 mt-3'>
                            <input type="text" placeholder="Phone no." name="phoneNo" onChange={handleChange} />
                        </div>
                        <div className='col-sm-6 mt-3'>
                            <input type="text" placeholder="Email" name="email" onChange={handleChange} />
                        </div>
                    </div>
                </div>

                <div className='m-3 d-flex justify-content-end mt-5'>
                    <button className='btn btn-outline-danger btn-lg' onClick={increaseNum}>NEXT &gt; </button>
                </div>
            </div>

        </>
    )
}

export default AddPatient