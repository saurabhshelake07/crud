import {useEffect} from 'react'
import { useForm } from 'react-hook-form'
import { useParams ,useNavigate } from 'react-router'
import axios from 'axios'

function UpdateStud() {

const {handleSubmit,register,setValue}= useForm()
const nav=useNavigate()
const params=useParams()


async function updateData(data){
  const res=await axios.put(`https://ca2d3d461a2e0cb78f3a.free.beeceptor.com/api/users/${params.id}/`,data)  
  nav('/student/display')   
}

async function fetchData() {
  const res=await axios.get(`https://ca2d3d461a2e0cb78f3a.free.beeceptor.com/api/users/${params.id}/`)
  setValue('roll',res.data.roll)
  setValue('name',res.data.name)
  setValue('marks',res.data.marks) 
}

useEffect(()=> {fetchData()},[])
  return (
    <div className='container mt-3 p-3'>
        <form onSubmit={handleSubmit(updateData)}>
            <label className='form-label'>Roll :</label>
            <input type="number" className='form-control mb-2' {...register('roll')}/>

             <label className='form-label'>Name :</label>
            <input type="text" className='form-control mb-2'{...register('name')}/>

             <label className='form-label'>Marks :</label>
            <input type="number" className='form-control mb-2' {...register('marks')}/>

            <button className='btn btn-outline-success'>Update Student</button>
        </form>
    </div>
  )
}

export default UpdateStud