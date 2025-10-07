import React from "react";

function Contact() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
   
        <div className="col-md-6 mb-4 mb-md-0">
          <h1 className="fw-bold mb-3">Contact Us</h1>
          <p className="lead text-muted">
            Have questions or need support? Get in touch with us.  
            We’d love to hear from you.
          </p>
          <ul className="list-unstyled">
            <li className="mb-2">
              <i className="bi bi-envelope-fill text-primary me-2"></i>
              support@studentms.com
            </li>
            <li className="mb-2">
              <i className="bi bi-telephone-fill text-success me-2"></i>
              +91 98765 43210
            </li>
            <li className="mb-2">
              <i className="bi bi-geo-alt-fill text-danger me-2"></i>
              Pune, Maharashtra, India
            </li>
          </ul>
        </div>

        {/* Right Side - Contact Form */}
        <div className="col-md-6">
          <div className="card shadow border-0">
            <div className="card-body p-4">
              <h5 className="fw-bold mb-3">Send us a Message</h5>
              <form>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input type="text" className="form-control" placeholder="Enter your name" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" placeholder="Enter your email" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea className="form-control" rows="4" placeholder="Write your message"></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
