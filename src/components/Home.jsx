import React from "react";

function Home() {
  return (
    <div>
      
      <header
        className="d-flex align-items-center justify-content-center text-center text-white"
        style={{
          height: "90vh",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1500&q=80')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <h1 className="fw-bold display-5">Welcome to Student Management System</h1>
          <p className="lead mt-3 mb-4">
            Manage student records, courses, and performance all in one place.
          </p>
          <a href="/about" className="btn btn-primary btn-lg">
            Learn More
          </a>
        </div>
      </header>

    
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Features</h2>
            <p className="text-muted">
              Everything you need to handle students and courses efficiently.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 text-center p-3 shadow-sm border-0">
                <div className="card-body">
                  <i className="bi bi-people-fill fs-1 text-primary"></i>
                  <h5 className="card-title mt-3">Student Records</h5>
                  <p className="card-text text-muted">
                    Store and access student data securely and quickly.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 text-center p-3 shadow-sm border-0">
                <div className="card-body">
                  <i className="bi bi-journal-bookmark-fill fs-1 text-success"></i>
                  <h5 className="card-title mt-3">Course Management</h5>
                  <p className="card-text text-muted">
                    Assign, update, and manage courses easily.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 text-center p-3 shadow-sm border-0">
                <div className="card-body">
                  <i className="bi bi-bar-chart-fill fs-1 text-warning"></i>
                  <h5 className="card-title mt-3">Performance Tracking</h5>
                  <p className="card-text text-muted">
                    Monitor grades and student progress in real-time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
