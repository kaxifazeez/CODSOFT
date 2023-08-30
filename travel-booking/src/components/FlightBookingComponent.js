import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const FlightBookingComponent = () => {
  const [username, setUsername] = useState();
  const [contact, setContact] = useState();
  const [departureCountry, setDepartureCountry] = useState();
  const [arrivalCountry, setArrivalCountry] = useState();
  const [departureDate, setDepartureDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());
  const [adultsCount, setAdultsCount] = useState();
  const [childrenCount, setChildrenCount] = useState();

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/flight/add/", {
        username,
        contact,
        departureCountry,
        arrivalCountry,
        departureDate,
        returnDate,
        adultsCount,
        childrenCount,
      })
      .then((result) => {
        console.log(result);
        alert("Flight Added Successfully");
      })
      .catch((error) => {
        console.error("Error while sending data:", error);
        alert("Error :Try Again");

      });
  };
  return (
    <>
      {/* <!-- Main Content Container --> */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 ">
            <div
              className="card blurred-form-background "
              style={{ margin: "20px", height: "600px" }}
            >
              <div className="card-body">
                <h3 className="card-title text-center">Choose Your Booking</h3>
                <ul className="nav nav-underline nav-justified mt-3 ">
                  <li className="nav-item  ">
                    <Link
                      className="nav-link active "
                      aria-current="page"
                      data-toggle="pill"
                      to="/"
                    >
                      Flight
                    </Link>
                  </li>
                  <li className="nav-item  ">
                    <Link className="nav-link " data-toggle="pill" to="/hotels">
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
                  <div className="tab-content mt-4">
                    {/* <!-- Flights Option --> */}
                    <div id="flights" className="tab-pane fade show active">
                      <h5>Flights</h5>
                      <form onSubmit={onSubmit}>
                        <div className="form-row">
                          <div className="form-group col-md-6">
                            <label htmlFor="name"> Name</label>
                            <input
                              type="text"
                              className="form-control blurred-button"
                              id="name"
                              onChange={(e) => setUsername(e.target.value)}
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <label htmlFor="contact"> Contact</label>
                            <input
                              type="text"
                              className="form-control blurred-button"
                              id="contact"
                              onChange={(e) => setContact(e.target.value)}
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <label htmlFor="departureCountry">From</label>
                            <select
                              className="form-control blurred-button"
                              id="departureCountry"
                              onChange={(e) =>
                                setDepartureCountry(e.target.value)
                              }
                            >
                              {/* <!-- Options here --> */}
                              <option value="England">England</option>
                              <option value="NewYork">NewYork</option>
                              <option value="Sweden">Sweden</option>
                              <option value="Canada">Canada</option>
                              <option value="Australia">Australia</option>
                            </select>
                          </div>
                          <div className="form-group col-md-6">
                            <label htmlFor="arrivalCountry">To</label>
                            <select
                              className="form-control blurred-button"
                              id="arrivalCountry"
                              onChange={(e) =>
                                setArrivalCountry(e.target.value)
                              }
                            >
                              {/* <!-- Options here --> */}
                              <option value="NewYork">NewYork</option>
                              <option value="Sweden">Sweden</option>
                              <option value="England">England</option>
                              <option value="Canada">Canada</option>
                              <option value="Australia">Australia</option>
                            </select>
                          </div>
                        </div>

                        <div className="form-row">
                          <div className="form-group col-md-6">
                            <label htmlFor="departureDate">
                              Departure Date
                            </label>
                            <div>
                              <DatePicker
                                selected={departureDate}
                                onChange={(depDate) =>
                                  setDepartureDate(depDate)
                                }
                                className="blurred-button form-control"
                              />
                            </div>
                          </div>
                          <div className="form-group col-md-6">
                            <label htmlFor="returnDate">Return Date</label>
                            <div>
                              <DatePicker
                                selected={returnDate}
                                onChange={(retDate) => setReturnDate(retDate)}
                                className="blurred-button form-control"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="form-group col-md-6">
                            <label htmlFor="adults">Adults</label>
                            <input
                              type="number"
                              className="blurred-button form-control"
                              id="adults"
                              onChange={(e) => setAdultsCount(e.target.value)}
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <label htmlFor="children">Children</label>
                            <input
                              type="number"
                              className="form-control blurred-button"
                              id="children"
                              onChange={(e) => setChildrenCount(e.target.value)}
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
      </div>
      {/* </div> */}
    </>
  );
};

export default FlightBookingComponent;
