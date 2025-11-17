import React, { useEffect, useState } from 'react'
import './findmetro.css'
import Table from 'react-bootstrap/Table';
import { getDetails } from './Services/allApi';
import { useNavigate } from 'react-router-dom';



const FindMetro = () => {
    const[data,setData] = useState([])
    useEffect(()=>{
        getData()
      
    },[])
    const navigate = useNavigate()

const getData = async() => {
    let apiRes =await getDetails()
      if(apiRes.status == 200){
            setData(apiRes.data)
        }
}
  return (
    <>
    <h1>Metro List</h1>
 <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Station Name</th>
          <th>Arrival Time</th>
          <th>Departure Time</th>
        </tr>
      </thead>
      <tbody>
      {
        data.length>0?<>
        {
            data.map((each,index) => (
                  <tr key={index}>
          <td>{index+1}</td>
          <td>{each.station}</td>
          <td>{each.arrivalTime}</td>
          <td>{each.departureTime}</td>
        </tr>
            ))
        }
        </>:<h1>No Train Found</h1>
      }
      </tbody>
    </Table>
    <button onClick={() =>navigate("/")}>Back</button>
    </>
  )
}

export default FindMetro