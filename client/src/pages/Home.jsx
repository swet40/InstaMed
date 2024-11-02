import "./home.css"

export const Home = () => {
  return (
    <>
      <div className="hero-section">
        <div className="pic">
          <img src="/doctor-removebg-preview.png" alt="" />
        </div>
        <div className="hero-content">
          <p>Emergency?</p>
          <h3>Find Nearest</h3>
          <p>Medical Facility</p>
          <a href="#">
            <button>View Hospitals</button>
          </a>
          <a href="#">
            <button>View Doctors</button>
          </a>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="container mt-5 search">
          <h3>Start your search</h3>
          <input
            placeholder="search doctors,clinics.etc"
            type="text"
            className="form-control"
            name="keyword"
            id="searchlocation"
            value
          ></input>
          <select placeholder="select a location" className="dropdown">
            <option value="1">Bangalore</option>
            <option value="2">Delhi</option>
            <option value="3">Mumbai</option>
            <option value="4">Noida</option>
          </select>
          <i className="fa-solid fa-magnifying-glass"></i>
          <hr />
          <div className="burger">
            <p href="#">
              <i className="fa-solid fa-bars"></i> advanced search
            </p>
          </div>
        </div>
        <div className="ask">
          <h3>Are you a doctor?</h3>
          <h1>Join Our Team</h1>
          <button>Join as Doctors</button>
        </div>
      </div>

      <div className="chars">
        <div className="item dc-doctordetails-holder dc-titlecolor1">
          <span className="dc-slidercounter">
            <img
              decoding="async"
              src="http://amentotech.com/projects/doctreat/wp-content/uploads/2019/10/3.png"
              alt="links"
            />
          </span>
          <h3>
            <span>Live Chat With</span>
            <br />
            Doctors
          </h3>
          <a href="#" className="dc-btn">
            Show All Nearest Hospitals
          </a>
        </div>
        <div className="item dc-doctordetails-holder dc-titlecolor2">
          <span className="dc-slidercounter">
            <img
              decoding="async"
              src="http://amentotech.com/projects/doctreat/wp-content/uploads/2019/10/2.png"
              alt="links"
            />
          </span>
          <h3>
            <span>Fast Appointment With</span>
            <br />
            Nearest Hospital{" "}
          </h3>
          <a href="#" className="dc-btn">
            Show All Nearest Hospitals
          </a>
        </div>
        <div className="item dc-doctordetails-holder dc-titlecolor3">
          <span className="dc-slidercounter">
            <img
              decoding="async"
              src="http://amentotech.com/projects/doctreat/wp-content/uploads/2019/10/1.png"
              alt="links"
            />
          </span>
          <h3>
            <span>Articles From Top</span>
            <br />
            Hospitals &amp; Doctors
          </h3>
          <a href="#" className="dc-btn">
            Show All Nearest Hospitals
          </a>
        </div>
        <div className="item dc-doctordetails-holder dc-titlecolor4">
          <span className="dc-slidercounter">
            <img
              decoding="async"
              src="http://amentotech.com/projects/doctreat/wp-content/uploads/2019/10/4.png"
              alt="links"
            />
          </span>
          <h3>
            <span>Our 24/7 Active</span>
            <br />
            Help Support
          </h3>
          <a href="#" className="dc-btn">
            Show All Nearest Hospitals
          </a>
        </div>
      </div>

      <section className="specialist">
        <p>Meet Our Professionals</p>
        <h1>Top rated Specialists</h1>
        <p>
          Get expert treatment from India's top-rated doctors, trusted for their
          exceptional care and expertise.
        </p>

        <div className="doctors-row">
          <div className="card">
            <img src="/doc-1.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Anesthesiology</h5>
              <h6 className="doctor-name">Flores Emily</h6>
              <p className="doctor-details">Ph.D, DPT, MS OMPT</p>
              <p className="feedback">
                <span className="stars">★★★★★</span> 1 Feedback
              </p>
              <p className="available-day">Thu</p>
              <p className="location">
                <i className="fas fa-map-marker-alt"></i> India
              </p>
              <p className="availability">Available Today</p>
            </div>
          </div>
          <div className="card">
            <img src="/doc-2.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <div className="card-body">
                <h5 className="card-title">Anesthesiology</h5>
                <h6 className="doctor-name">Flores Emily</h6>
                <p className="doctor-details">Ph.D, DPT, MS OMPT</p>
                <p className="feedback">
                  <span className="stars">★★★★★</span> 1 Feedback
                </p>
                <p className="available-day">Thu</p>
                <p className="location">
                  <i className="fas fa-map-marker-alt"></i> India
                </p>
                <p className="availability">Available Today</p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src="/doc-3.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <div className="card-body">
                <h5 className="card-title">Anesthesiology</h5>
                <h6 className="doctor-name">Flores Emily</h6>
                <p className="doctor-details">Ph.D, DPT, MS OMPT</p>
                <p className="feedback">
                  <span className="stars">★★★★★</span> 1 Feedback
                </p>
                <p className="available-day">Thu</p>
                <p className="location">
                  <i className="fas fa-map-marker-alt"></i> India
                </p>
                <p className="availability">Available Today</p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src="/doc-4.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <div className="card-body">
                <h5 className="card-title">Anesthesiology</h5>
                <h6 className="doctor-name">Flores Emily</h6>
                <p className="doctor-details">Ph.D, DPT, MS OMPT</p>
                <p className="feedback">
                  <span className="stars">★★★★★</span> 1 Feedback
                </p>
                <p className="available-day">Thu</p>
                <p className="location">
                  <i className="fas fa-map-marker-alt"></i> India
                </p>
                <p className="availability">Available Today</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="query-help">
        <h2>Ask Private Query</h2>
        <h1>Get Professional Help!</h1>
        <input
          type="text"
          placeholder="Add title here"
          className="title-input"
        />{" "}
        <br /> <br />
        <textarea
          className="question-input"
          placeholder="Type your question"
          rows="15"
        />{" "}
        <br /> <br />
        <button className="ask-query-btn">Ask Free Query</button>
      </div>

      <div className="container my-5 text-center">
        <h1 className="mb-4 work-title">How It Works</h1>
        <div className="row">
          <div className="col-md-4 work">
            <i className="fa fa-hospital fa-3x mb-3"></i>
            <h4>Step 1: Search for a Hospital</h4>
            <p>Find the nearest hospitals or clinics based on your location.</p>
          </div>
          <div className="col-md-4 work">
            <i className="fa fa-user-md fa-3x mb-3"></i>
            <h4>Step 2: Choose a Doctor</h4>
            <p>Select a doctor for online or offline consultation.</p>
          </div>
          <div className="col-md-4 work">
            <i className="fa fa-calendar-check fa-3x mb-3"></i>
            <h4>Step 3: Book an Appointment</h4>
            <p>
              Book an appointment for either in-person or virtual consultation.
            </p>
          </div>
        </div>
      </div>

      <div className="main-desc">
        <div className="dc-sectiontitle col-6 offset-3">
          <h2>
            Bring Care to Your <br />
            <span>Home With One Click</span>
          </h2>
        </div>
        <div className="dc-description">
          <p>
            Lorem ipsum dolor amet consectetur adipisicing elitiuim sete eiusmod
            tempor incididunt ut labore etnalom dolore magn aiqua udiminimate
            veniam quis norud exercitation ullamco laboris nisi aliquip commodo
            consequat duis aute irure dolor in reprehenderit.
          </p>
        </div>
      </div>
    </>
  );
};
