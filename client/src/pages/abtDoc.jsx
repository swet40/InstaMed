import React from "react";

export const abtDoc = () => {
  return (
    <>
      <div class="doctor-container">
        <div class="doctor-image-card">
          <img src="/images/doc-1.png" alt="Dr. Richard James" />
        </div>

        <div class="doctor-info-card">
          <h2>Dr. Richard James</h2>
          <p>MBBS - General Physician (2 Years)</p>
          <p>About</p>
          <p>
            Dr. Davis has a strong commitment to delivering comprehensive
            medical care, focusing on preventive medicine, early diagnosis, and
            effective treatment strategies.
          </p>
          <p>Appointment fee: $50</p>
        </div>
      </div>
      <p id="book">Booking Slots</p>
      <div class="slots">
        <div id="slot-container"></div>
      </div>
      <select class="time-dropdown">
        <option value="" disabled selected>
          Select Time
        </option>
        <option value="9:00 AM">9:00 AM</option>
        <option value="10:00 AM">10:00 AM</option>
        <option value="11:00 AM">11:00 AM</option>
        <option value="12:00 PM">12:00 PM</option>
        <option value="1:00 PM">1:00 PM</option>
        <option value="2:00 PM">2:00 PM</option>
        <option value="3:00 PM">3:00 PM</option>
        <option value="4:00 PM">4:00 PM</option>
      </select>{" "}
      <br />
      <button class="book-btn">Book an Appointment</button>
      <h2 style="text-align: center; margin-top: 30px;">
        More Trusted Doctors
      </h2>
      <p style="text-align: center;">Our extensive list of trusted Doctors</p>
      <div class="col-md-9" style="margin-left: 300px;">
        <div class="row">
          <div class="col-md-3 mb-4">
            <div class="card doctor-image-card">
              <img
                src="/images/doc-2.png"
                class="card-img-top"
                alt="..."
                id="main-doctor-image"
              />
              <div class="card-body">
                <h5 class="doctor-name">Dr. Richard James</h5>
                <p class="card-title">General Physician</p>
              </div>
            </div>
          </div>
          <div class="col-md-3 mb-4">
            <div class="card doctor-image-card">
              <img
                src="/images/doc-3.png"
                class="card-img-top"
                alt="..."
                id="main-doctor-image"
              />
              <div class="card-body">
                <h5 class="doctor-name">Dr. Richard James</h5>
                <p class="card-title">General Physician</p>
              </div>
            </div>
          </div>
          <div class="col-md-3 mb-4">
            <div class="card doctor-image-card">
              <img
                src="/images/doc-4.png"
                class="card-img-top"
                alt="..."
                id="main-doctor-image"
              />
              <div class="card-body">
                <h5 class="doctor-name">Dr. Richard James</h5>
                <p class="card-title">General Physician</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
