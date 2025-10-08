import {useEffect,useState} from 'react'
import axios from 'axios'
import {NavLink, useNavigate} from 'react-router'

function DisplayStud() {
  const[students,setStudents]=useState([])

  async function fetchData() {
    const res = await axios.get("https://ca2d3d461a2e0cb78f3a.free.beeceptor.com/api/users/")
    setStudents(res.data)
    console.log("res ---> ",res.data) 
  
  }

  useEffect (()=>{fetchData()} , [])

  async function deletechData(id) {
    const res = await axios.delete(`https://ca2d3d461a2e0cb78f3a.free.beeceptor.com/api/users/${id}/`)
    alert("Data Deleted ...! ")
    await fetchData()
    
  }
  
  const navs=useNavigate()
  function navigates(){
    navs("/student/add/")
  }


    return (
      <div className='container mt-3 p-3'>
        <h3 className='text-center'>Student Details</h3>
        <table className='table table-primary table-bordered'>
          <thead>
            <tr>
              
              <th>Roll</th>
              <th>Name</th>
              <th>Marks</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              students.map( e=> <tr>
                                
                                <td>{e.roll}</td>
                                <td>{e.name}</td>
                                <td>{e.marks}</td>
                                <td>
                                  <button onClick={ ()=> deletechData(e.id)} className='btn btn-outline-danger btn-sm me-3'>Delete</button>
                                  <NavLink to={`/student/update/${e.id}`} className='btn btn-outline-secondary btn-sm'>Update</NavLink>
                                </td>
              </tr>)
            }
          </tbody>
        </table>
        <button onClick={ ()=> navigates()} className='btn btn-outline-primary '>Add Student</button>
      </div>

    )
  }

export default DisplayStud