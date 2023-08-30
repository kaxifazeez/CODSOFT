import { Outlet, Link } from "react-router-dom";

const LayoutBooking = () => {
  return (
    <>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card blurred-form-background" style={{ margin: '40px', height: '600px' }}>
            <div class="card-body">
              <h3 class="card-title text-center">Choose Your Booking</h3>
              <ul class="nav nav-underline nav-justified mt-3">
                <li class="nav-item">
                  <Link class="nav-link " aria-current="page" data-toggle="pill" to="/flights">Flight</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" data-toggle="pill" to="/hotels">Hotel</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" data-toggle="pill" to="/carhire">Car Hire</Link>
                </li>
              </ul>
              <Outlet/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
};

export default LayoutBooking;