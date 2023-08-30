import React , { useState }  from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const CarHireBookingComponent = () => {
  const [username, setUsername] = useState();
  const [contact, setContact] = useState();
  const [classType, setClassType] = useState();
  const [personCount, setPersonCount] = useState();
  const [pickupLocation, setPickupLocation] = useState();
  const [destination, setDestination] = useState();

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/carhire/add/", {
        username,
        contact,
        classType,
        personCount,
        pickupLocation,
        destination,
      })
      .then((result) => {
        console.log(result);
        alert("Carhire Added Successfully");
      })
      .catch((error) => {
        console.error("Error while sending data:", error);
      });
    // setUsername("");
  };
  return (
    <>

      {/* <!-- Main Content Container --> */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div
              className="card blurred-form-background "
              style={{ margin: "20px", height: "600px" }}
            >
              <div className="card-body">
                <h3 className="card-title text-center">Choose Your Booking</h3>
                <ul className="nav nav-underline nav-justified mt-3 ">
                  <li className="nav-item  ">
                    <Link
                      className="nav-link  "
                      aria-current="page"
                      data-toggle="pill"
                      to="/"
                    >
                      Flight
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link className="nav-link " data-toggle="pill" to="/hotels">
                      Hotel
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link
                      className="nav-link active"
                      data-toggle="pill"
                      to="/carHire"
                    >
                      Car Hire
                    </Link>
                  </li>
                </ul>
                <div className="tab-content mt-4">
                  {/* <!-- Car Hire Option --> */}
                  <div id="carHire" className="tab-pane fade show active">
                    <h5>Car Hire</h5>
                    <form className="form-group" onSubmit={onSubmit}>
                      <div className="form-group ">
                      <label htmlFor="name"> Name</label>
                      <input
                        type="text"
                        className="form-control blurred-button"
                        id="name"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}

                      />
                      <label htmlFor="contact"> Contact</label>
                      <input
                        type="text"
                        className="form-control blurred-button"
                        id="contact"
                        onChange={(e) => setContact(e.target.value)}

                      />
                      </div>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label htmlFor="roomType">Select Type</label>
                        <select
                          className="form-control blurred-button"
                          id="carType"
                          onChange={(e) => setClassType(e.target.value)}

                        >
                          <option>Mini</option>
                          <option>AC </option>
                          <option>Buisness</option>
                        </select>
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="Persons">Persons</label>
                        <input
                          type="number"
                          className="blurred-button form-control"
                          id="Persons"
                          onChange={(e) => setPersonCount(e.target.value)}

                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label htmlFor="">Pick-Up Location</label>
                        <input
                          type="text"
                          className="form-control blurred-button"
                          id="Pickup"
                          onChange={(e) => setPickupLocation(e.target.value)}

                        />
                      </div>
                      <div className="form-group   col-md-6">
                        <label htmlFor="">Destination</label>
                        <input
                          type="text"
                          className="form-control blurred-button"
                          id="Destination"
                          onChange={(e) => setDestination(e.target.value)}

                        />
                      </div>
                    </div>
                    <button className="btn btn-dark   btn-block">
                      Confirm Booking
                    </button>
                    </form>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default CarHireBookingComponent;
