// src/app/components/LandingSection.js
export default function LandingSection() {
  return (
    <section className="landing-section">
      <div className="container">
        <div className="content">
          <h1>
            Efficient <span>Solutions</span> for your Business
          </h1>
          <p>
            Power your business with agile, scalable IT infrastructure that
            drives efficiency, boosts performance, and adapts to your
            growth—built to meet today's demands and tomorrow's challenges.
          </p>
          <button className="contact-button">Contact us</button>
        </div>
        <div className="image">
          <img src="/Group 2.png" alt="IT Infrastructure" />
        </div>
      </div>
    </section>
  );
}
