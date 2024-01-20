import React from "react";
import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div className="home-container d-flex flex-column justify-content-center align-items-center vh-100">
      <div className="background-container">
        <div className="background"></div>
      </div>
      <Typography variant="h3" align="center" className="mb-5">
        Get Hired or Hire People for Free!
      </Typography>
      <div>
        <ul className="list-unstyled d-flex justify-content-center">
          <li>
            <Button variant="outlined" className="mx-3 my-2">
              <Link to="/employer/dashboard">Hire Talent</Link>
            </Button>
          </li>
          <li>
            <Button variant="outlined" className="mx-3 my-2">
              <Link to="/employee/feed">Get a Job Now</Link>
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;