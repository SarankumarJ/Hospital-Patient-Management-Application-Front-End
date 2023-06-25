import React, { useState } from "react"
import './PatientDirectoryComponent.css'
import { useEffect } from "react"
function PatientDirectoryComponent(){
    const [Patients,setPatients]=useState([])

    useEffect(() =>{
        fetchPatients()
    },[])

    const fetchPatients = async()=>{
        try{
        const response = await fetch('http://localhost:8080/api/v1/patient/')
        const data = await response.json()
        setPatients(data)
        }
        catch(error)
        {
            console.log("Error : ",error)
        }
        
    }



    return(
        <div className="patient-list">
            {Patients.map((Patient) =>(
                <div className="patient-card" key={Patient.patientId}>
                    <p>Patient ID : {Patient.patientId}</p>
                    <p>Patient Name : {Patient.patientName}</p>
                    <p>Patient Age : {Patient.patientAge}</p>
                    <p>Patient Gender : {Patient.patientGender}</p>
                    <p>Patient Diagnosis : {Patient.patientDiagnosis}</p>
                    <p>Patient Mobile Number : {Patient.patientMobileNo}</p>

                </div>
            )
            )}

        </div>
    )
}
export default PatientDirectoryComponent