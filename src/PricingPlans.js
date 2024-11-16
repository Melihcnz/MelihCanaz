import React from "react";
import './App.css'

const PricingPlans = () => {
    return (
        <section className="container">
            <h2 className="header">PROJECT PRICING PLANS</h2>
            <p className="sub-header">
                Our pricing plans come with various membership tiers, each tailored to cater to different projects and
                class+ code types.
            </p>
            <div className="pricing">
                {/* Basic Plan */}
                <div className="card">
                    <div className="content">
                        <h4>Basic Plan</h4>
                        <h3>0$</h3>
                        <p>
                            <i className="ri-checkbox-circle-line"></i>
                            Smart coding plan
                        </p>
                        <p>
                            <i className="ri-checkbox-circle-line"></i>
                            At home workouts
                        </p>
                    </div>
                    <button className="btn">Join Now</button>
                </div>
                {/* Gold Plan */}
                <div className="card">
                    <div className="content">
                        <h4>Gold Plan</h4>
                        <h3>10$</h3>
                        <p>
                            <i className="ri-checkbox-circle-line"></i>
                            Pro codes
                        </p>
                        <p>
                            <i className="ri-checkbox-circle-line"></i>
                            Smart coding plan
                        </p>
                        <p>
                            <i className="ri-checkbox-circle-line"></i>
                            At home workouts
                        </p>
                    </div>
                    <button className="btn">Join Now</button>
                </div>
                {/* Diamond Plan */}
                <div className="card">
                    <div className="content">
                        <h4>Diamond Plan</h4>
                        <h3>100$</h3>
                        <p>
                            <i className="ri-checkbox-circle-line"></i>
                            Elite Classes & Courses
                        </p>
                        <p>
                            <i className="ri-checkbox-circle-line"></i>
                            Pro codes
                        </p>
                        <p>
                            <i className="ri-checkbox-circle-line"></i>
                            Personal Coaching
                        </p>
                        <p>
                            <i className="ri-checkbox-circle-line"></i>
                            Smart coding plan
                        </p>
                        <p>
                            <i className="ri-checkbox-circle-line"></i>
                            At home workouts
                        </p>
                    </div>
                    <button className="btn">Join Now</button>
                </div>
            </div>
        </section>
    );
};

export default PricingPlans;
