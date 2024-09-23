// src/app/components/AboutUs.js
export default function AboutUs() {
  return (
    <section className="about-us-section">
      <div className="about-us-container">
        <div className="about-us-image">
          <img src="/abt.png" alt="About Us" />
        </div>
        <div className="about-us-content">
          <h2>About us</h2>
          <h3>Lorem Ipsum simply</h3>
          <p>
            Power your business with agile, scalable IT infrastructure that
            drives efficiency, boosts performance, and adapts to your
            growth—built to meet today's demands and tomorrow's challenges.
          </p>
          <button className="about-us-contact-button">Contact Us</button>
        </div>
      </div>
    </section>
  );
}
