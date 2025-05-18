import { Link } from "react-router-dom";

function Footer() {
  return (
    <div id="footer-end">
      <div
        className="row justify-content-around mt-5 w-100 p-5 "
        style={{ marginTop: "15vh", width: "fit-content" }}
      >
        <div className="col-sm-3 text-white text-start mb-3">
            <div className="h3">Pharma</div>
            <div className="fw-bold">Country of origin: India</div>
            <div><span className="fw-bold">Address:</span> Near Fatima Hospital, Gorakhpur, Uttar Pradesh 273014</div>
        <div><span className="fw-bold"><i class="bi bi-envelope-fill"></i></span>  xyz@me</div>
        </div>
        <div className="col-sm-2  text-start">
          <p className="footer-detail text-start">Quick Links</p>
          <ul style={{ listStyle: "none" }} className=" p-0">
            <li>
              <Link style={{ textDecoration: "none", color: "white" }}>
                Home
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none", color: "white" }}>
                About Us
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none", color: "white" }}>
                Blog
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none", color: "white" }}>
                Companies
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none", color: "white" }}>
                Testimonials
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-sm-4 ">
          <p className="footer-detail fw text-start">
            Subscribe to News Letters
          </p>
          <p className="text-start" style={{ color: "white" }}>
            We'll send you some latest updates daily to help you stay updated
          </p>
          <div className="input-group">
            <input type="text" className="form-control" />{" "}
            <button className="btn btn-success">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
