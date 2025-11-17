import React, { useEffect, useState } from "react";
import "./Admin.css";
import { deleteApi, editApi, getDetails, postData } from "./Services/allApi";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";


const Admin = () => {
  const [station, setStation] = useState("");
  const [arrTime, setArrTime] = useState("");
  const [depTime, setdepTime] = useState("");
  const [data, setData] = useState([]);
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    loadData();
  }, []);
  const navigate = useNavigate();

  const addStation = async () => {
    if (!station || !arrTime || !depTime) {
      alert("Please fill all fields");
      return;
    }

    let stnDetails = {
      station: station,
      arrivalTime: arrTime,
      departureTime: depTime,
    };

    let apiRes = await postData(stnDetails);
    if (apiRes.status === 201) {
      alert("Station Details Added Successfully");
      resetForm();
      loadData();
    } else {
      alert("Adding Station Details Failed");
    }
  };

  const loadData = async () => {
    let apiRes = await getDetails();
    if (apiRes.status === 200) {
      setData(apiRes.data);
    } else {
      alert("Fetching Data Failed Check Get Method");
    }
  };

  const deleteClick = async (id) => {
    if (window.confirm("Are you sure you want to delete this station?")) {
      let apiRes = await deleteApi(id);
      if (apiRes.status === 200) {
        loadData();
      }
    }
  };

  const editClick = (each) => {
    setEditData(each.id);
    setStation(each.station);
    setArrTime(each.arrivalTime);
    setdepTime(each.departureTime);
  };

  const editMain = async () => {
    let editBody = {
      station: station,
      arrivalTime: arrTime,
      departureTime: depTime,
    };

    let apiRes = await editApi(editData, editBody);
    if (apiRes.status === 200) {
      setEditData(null);
      resetForm();
      loadData();
      alert("Station updated successfully");
    }
  };

  const resetForm = () => {
    setStation("");
    setArrTime("");
    setdepTime("");
  };


  return (
    <>
      <div className="admin-body">
        <header className="header">
          <h1>Metro Finder Admin Panel</h1>
        </header>

        <div className="form-container">
          <div className="input-group">
            <label htmlFor="">Station Name</label>
            <input
              type="text"
              placeholder="Station Name"
              onChange={(e) => setStation(e.target.value)}
              value={station}
            />
          </div>
          <div className="input-group">
            <label htmlFor="">Arrival Time</label>
            <input
              type="time"
              placeholder="Arrival Time"
              onChange={(e) => setArrTime(e.target.value)}
              value={arrTime}
            />
          </div>
          <div className="input-group">
            <label htmlFor="">Departure Time</label>
            <input
              type="time"
              placeholder="Departure Time"
              onChange={(e) => setdepTime(e.target.value)}
              value={depTime}
            />
          </div>
          <div className="button-group">
            {editData ? (
              <>
                <button className="btn-warninig" onClick={editMain}>
                  Update Station
                </button>
              </>
            ) : (
              <>
              <button onClick={addStation}>Add Station</button>
               <button className="ms-1" onClick={() => navigate("/")}>Home</button>
              </>
            )}
             

          </div>
        </div>

        <div className="table-container">
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Station Name</th>
                <th>Arrival Time</th>
                <th>Departure Time</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map((each, index) => (
                  <tr key={each.id}>
                    <td>{index + 1}</td>
                    <td>{each.station}</td>
                    <td>{each.arrivalTime}</td>
                    <td>{each.departureTime}</td>
                    <td>
                      <button
                        className="btn btn-danger me-2"
                        onClick={() => deleteClick(each.id)}
                        title="Delete Station"
                      >
                        <i className="ri-close-line"></i> Delete
                      </button>
                      <button
                        className="btn btn-warning"
                        onClick={() => editClick(each)}
                        title="Edit Station"
                      >
                        <i className="ri-pencil-line"></i> Edit
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-4">
                    <h4>No Station Details Found</h4>
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default Admin;