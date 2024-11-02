import "./allDocs.css"

export const AllDoctors = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-3">
          <div className="filter-sidebar">
            <button className="btn btn-outline-secondary w-100">
              General Physician
            </button>
            <button className="btn btn-outline-secondary w-100">
              Gynecologist
            </button>
            <button className="btn btn-outline-secondary w-100">
              Dermatologist
            </button>
            <button className="btn btn-outline-secondary w-100">
              Pediatrician
            </button>
            <button className="btn btn-outline-secondary w-100">Neurologist</button>
            <button className="btn btn-outline-secondary w-100">
              Gastroenterologist
            </button>
          </div>
        </div>
        <div className="col-md-9">
          <div className="row">
            <div className="col-md-3 mb-4">
              <div className="card">
                <img src="/images/doc-1.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="doctor-name">Dr. Richard James</h5>
                  <p className="card-title">General Physician</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card">
                <img src="/images/doc-2.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="doctor-name">Dr. Richard James</h5>
                  <p className="card-title">General Physician</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card">
                <img src="/images/doc-3.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="doctor-name">Dr. Richard James</h5>
                  <p className="card-title">General Physician</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card">
                <img src="/images/doc-4.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="doctor-name">Dr. Richard James</h5>
                  <p className="card-title">General Physician</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card">
                <img src="/images/doc-1.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="doctor-name">Dr. Richard James</h5>
                  <p className="card-title">General Physician</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card">
                <img src="/images/doc-2.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="doctor-name">Dr. Richard James</h5>
                  <p className="card-title">General Physician</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card">
                <img src="/images/doc-3.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="doctor-name">Dr. Richard James</h5>
                  <p className="card-title">General Physician</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card">
                <img src="/images/doc-4.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="doctor-name">Dr. Richard James</h5>
                  <p className="card-title">General Physician</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
