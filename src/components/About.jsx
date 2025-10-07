import React from "react";

function About() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src="https://tse4.mm.bing.net/th/id/OIP.U4yKW0-nCLobTWDhe3zeLwHaF8?rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="Students studying"
            className="img-fluid rounded shadow"
          />
        </div>

        <div className="col-md-6">
          <h1 className="fw-bold mb-3">About Us</h1>
          <p className="lead text-muted">
            Welcome to <span className="fw-semibold">Student Management System</span>, 
            your one-stop solution for managing student records, courses, and 
            performance. Our mission is to make administration simpler and smarter.
          </p>
          <ul className="list-group list-group-flush mb-3">
            <li className="list-group-item">✔ Easy student record management</li>
            <li className="list-group-item">✔ Course and schedule organization</li>
            <li className="list-group-item">✔ Performance and grade tracking</li>
            <li className="list-group-item">✔ Simple and user-friendly interface</li>
          </ul>
          <a href="/contact" className="btn btn-primary btn-lg">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
