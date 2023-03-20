import React from 'react'

function PersonalDetails({ setPersonalDetails, personalDetails, increaseNum }) {

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
                        <div className='h1 col-md-4  text-md-left'>Step 1 of 6</div>
                        <div className='col-md-4'>
                            <h2 className='d-flex align-items-center justify-content-center' style={{ whiteSpace: "nowrap" }}>
                                <img src="/images/icons8-male-user-96.png" alt="profile" height="40px" className='mx-3' />
                                Personal detail</h2>
                        </div>
                        <div className='col-md-4' >
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
                           
                            <input type="radio" id="p-male" name="gender" value="male" checked={personalDetails.gender == "male"} onChange={handleChange} />
                            <label htmlFor="p-male" className="me-2">Male</label>
                            <input type="radio" name="gender" id="p-female" value="female"  checked={personalDetails.gender == "female"} onChange={handleChange} />
                            <label htmlFor="p-female">Female</label>

                        </div>

                        <h5 className="mt-4">Husband detail</h5>
                        <div className='col-sm-12'>
                            <input type="text" required name="husbandName" value={personalDetails.husbandName} onChange={handleChange} />
                            <label htmlFor="">Husband's Name</label>
                        </div>
                        <div className='col-sm-3 mt-3'>
                            <input type="text" required name="height" value={personalDetails.height} onChange={handleChange} />
                            <label htmlFor="">Height</label>
                        </div>
                        <div className='col-sm-3 mt-3'>
                            <input type="text" required name="weight" value={personalDetails.weight} onChange={handleChange} />
                            <label htmlFor="">Weight</label>
                        </div>
                        <div className='col-sm-3 mt-3'>
                            <input type="text" required name="bmi" value={personalDetails.bmi} onChange={handleChange} />
                            <label htmlFor="">BMI</label>
                        </div>
                        <div className='col-sm-3 mt-3 pt-3'>
                            <h6>Infertility</h6>
                            <div className='d-flex flex-wrap'>
                                <div>  <input type="radio" name='infertility' onChange={handleChange} id='primary' value="primary" /> <label htmlFor="primary" className='me-2'> PRIMARY </label></div>
                                <div>  <input type="radio" name='infertility' onChange={handleChange} id='secondary' value="secondary" /> <label htmlFor="secondary"> SECONDARY </label></div>
                            </div>
                        </div>
                        <div className='col-sm-12 mt-3'>
                            <input type="text" required name="address" value={personalDetails.address} onChange={handleChange} />
                            <label htmlFor="">Address</label>
                        </div>
                        <div className='col-sm-6 mt-3'>
                            <input type="text" required name="phoneNo" value={personalDetails.phoneNo} onChange={handleChange} />
                            <label htmlFor="">Phone No.</label>
                        </div>
                        <div className='col-sm-6 mt-3'>
                            <input type="text" required name="email" value={personalDetails.email} onChange={handleChange} />
                            <label htmlFor="">Email</label>
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

export default PersonalDetails