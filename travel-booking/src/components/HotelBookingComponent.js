import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const HotelBookingComponent = () => {
  const [username, setUsername] = useState();
  const [contact, setContact] = useState();
  const [classType, setClassType] = useState();
  const [personCount, setPersonCount] = useState();
  const [checkinDate, setCheckinDate] = useState(new Date());
  const [checkoutDate, setCheckoutDate] = useState(new Date());

  const onSubmit = (e) => {
    e.preventDefault();
 

    axios
      .post("http://localhost:5000/hotel/add/", {
        username,
        contact,
        classType,
        personCount,
        checkinDate,
        checkoutDate,
      })
      .then((result) => {
        console.log(result);
        alert("Hotel Added Successfully");
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
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      aria-current="page"
                      data-toggle="pill"
                      to="/"
                    >
                      Flight
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link
                      className="nav-link active"
                      data-toggle="pill"
                      to="/hotels"
                    >
                      Hotel
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link
                      className="nav-link "
                      data-toggle="pill"
                      to="/carHire"
                    >
                      Car Hire
                    </Link>
                  </li>
                </ul>
                <div className="tab-content mt-4">
                  <div id="hotels" className="tab-pane fade show active">
                    <h5>Hotel</h5>
                    <form onSubmit={onSubmit} class="form-group">
                      <div className="form-group ">
                        <label for="name"> Name</label>
                        <input
                          type="text"
                          className="form-control blurred-button"
                          id="name"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                        <label for="contact"> Contact</label>
                        <input
                          type="text"
                          className="form-control blurred-button"
                          id="contact"
                          onChange={(e) => setContact(e.target.value)}
                        />
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label for="classType">Select Class</label>
                          <select
                            className="form-control blurred-button"
                            id="classType"
                            onChange={(e) => setClassType(e.target.value)}
                          >
                            <option>Standard</option>
                            <option>Luxury </option>
                            <option>Gold</option>
                          </select>
                        </div>
                        <div className="form-group col-md-6">
                          <label for="persons">Persons</label>
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
                          <label for="departureDate">Check-In Date</label>
                          <div>
                            <DatePicker
                              selected={checkinDate}
                              onChange={(chkindate) =>
                                setCheckinDate(chkindate)
                              }
                              className="blurred-button form-control"
                            />
                          </div>
                        </div>
                        <div className="form-group col-md-6">
                          <label for="returnDate">Check-Out Date</label>
                          <div>
                            <DatePicker
                              selected={checkoutDate}
                              onChange={(chkoutdate) =>
                                setCheckoutDate(chkoutdate)
                              }
                              className="blurred-button form-control"
                            />
                          </div>
                        </div>
                      </div>
                      <button className="btn btn-dark  btn-block ">
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

export default HotelBookingComponent;
