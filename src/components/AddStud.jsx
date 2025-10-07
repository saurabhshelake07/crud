import React from 'react'
import {useForm} from 'react-hook-form'
import axios from "axios"

import {useNavigate} from "react-router"

function AddStud() {
    const {handleSubmit,register}= useForm()
    const nav = useNavigate()
    async function saveData(data) {
        try{
            const res=await axios.post('http://localhost:8000/Student',data)
            console.log("res -->",res)
            nav("/student/display")
        }
        catch(error){
            alert("Something went wrong ..!")
        }
        
    }



  return (
    <div className='container mt-3 p-3'>
        <form onSubmit={handleSubmit(saveData)}>
            <label className='form-label'>Roll :</label>
            <input type="number" className='form-control mb-2' {...register('roll')}/>

             <label className='form-label'>Name :</label>
            <input type="text" className='form-control mb-2'{...register('name')}/>

             <label className='form-label'>Marks :</label>
            <input type="number" className='form-control mb-2' {...register('marks')}/>

            <button className='btn btn-outline-success'>Add Student</button>
        </form>
    </div>
  )
}

export default AddStud