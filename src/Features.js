import React from 'react';
import './App.css';

function Features() {
  return (
    <section className="container">
      <h2 className="header">OUR FEATURES</h2>
      <div className="features">
        <FeatureCard
          icon="ri-money-dollar-box-line"
          title="Free Tutorials"
          description="My tutorials in my channel 'AsmrProg' are free and you don't need to pay anything."
        />
        <FeatureCard
          icon="ri-bug-line"
          title="Fix Your Bugs"
          description="You have any problem in your codes? Tell me, I will help you fix it."
        />
        <FeatureCard
          icon="ri-history-line"
          title="On Time Videos"
          description="We have video each 4 days, so check channel every 4 days to watch it!"
        />
        <FeatureCard
          icon="ri-shake-hands-line"
          title="Cooperation"
          description="You want we work together? Write an email to us, we will read it."
        />
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="card">
      <span><i className={icon}></i></span>
      <h4>{title}</h4>
      <p>{description}</p>
      <a href="https://example.com">Join Now <i className="ri-arrow-right-line"></i></a>
    </div>
  );
}

export default Features;
