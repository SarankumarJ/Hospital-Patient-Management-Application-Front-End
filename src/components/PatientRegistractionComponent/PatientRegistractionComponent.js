import React from "react"
import './PatientRegistractionComponent.css'
import { useState } from "react"
function PatientRegistractionComponent(){
    const [patient,setPatients] = useState({
        patientName: '',
        patientAge: '',
        patientGender: '',
        patientDiagnosis: '',
        patientMobileNo: ''
    })
     
    const handleChange = (event)=>{
        const {name,value}=event.target
        setPatients({...patient,[name]:value})
    }

    const handleFormSubmit =async(event)=>{
        event.preventDefault();
        await fetch('http://localhost:8080/api/v1/patient/',{
            method:'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify(patient)
        })
         .then((response) =>{
            if(response.status == 500)
            {
                alert(`Error!`)
            }
            else
            {
                alert(`Patient ${patient.patientName} is Admited Successfully`)
                window.location.href='/'
            }
         })
    }



    return(
        <form onSubmit={handleFormSubmit}>
            <label>
                Patient Name : 
                <input
                type="text"
                name="patientName"
                value={patient.patientName}
                onChange={handleChange}
                required
                />
            </label>
            <label>
                Patient Age : 
                <input
                type="text"
                name="patientAge"
                value={patient.patientAge}
                onChange={handleChange}
                required
                />
            </label>
            <label>
                Patient Gender : 
                <input
                type="text"
                name="patientGender"
                value={patient.patientGender}
                onChange={handleChange}
                required
                />
            </label>
            <label>
                Patient Diagnosis : 
                <input
                type="text"
                name="patientDiagnosis"
                value={patient.patientDiagnosis}
                onChange={handleChange}
                required
                />
            </label>
            <label>
                Patient Mobile No : 
                <input
                type="text"
                name="patientMobileNo"
                value={patient.patientMobileNo}
                onChange={handleChange}
                required
                />
            </label>
            <button type="submit">Admit</button>
        </form>
    )
}
export default PatientRegistractionComponent