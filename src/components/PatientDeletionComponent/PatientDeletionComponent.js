import React from "react"
import './PatientDeletionComponent.css'
import { useState } from "react"
function PatientDeletionComponent(){
    const [patientId,setPatientId]=useState('')
    const handleChange=(event)=>{
        setPatientId(event.target.value)
    }
    const handleFormSubmit =async(event)=>{
        event.preventDefault();
        await fetch(`http://localhost:8080/api/v1/patient/${patientId}`,{
            method:'DELETE',
        })
         .then((response) =>{
            if(response.status == 500)
            {
                alert(`Error!`)
            }
            else
            {
                alert(`Patient Discharged Successfully`)
                window.location.href='/'
            }
         })
    }
    return(
        <form onSubmit={handleFormSubmit}>
            <label>
                Patient ID : 
                <input
                type="number"
                name="patientId"
                value={patientId}
                onChange={handleChange}
                required
                />
            </label>
            <button type="submit">Discharge</button>
        </form>
    )
}
export default PatientDeletionComponent