import React from "react";
import { NavLink } from "react-router-dom";
import Products from "./Products";

const Home = () => {
    return (
        <div className="hero">
            <div className="card bg-dark text-white border-0">
                <img
                    src="assets/dress.jpg"
                    className="card-img"
                    alt="pic"
                    height="550px"
                />
                <div className="card-img-overlay d-flex flex-column">
                    <div className="container">
                        <h5 className="card-title display-3 fw-bolder mb-0 text-dark">
                            New Season Arrivals
                        </h5>
                        <p className="card-text fs-2 text-dark fw-bolder">
                            Check Out All The Trends
                        </p>
                        <NavLink
                            to="/"
                            className="btn btn-warning ms-2 px-4 fw-bolder"
                        >
                            SHOP
                        </NavLink>
                    </div>
                </div>
            </div>
            <Products />
        </div>
    );
};

export default Home;
