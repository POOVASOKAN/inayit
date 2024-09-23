import "../app/globals.css";
import Navbar from "./components/Navbar";
import LandingSection from "./components/LandingSection";
import About from "./components/About";
import ServicesSection from "./components/ServicesSection";
import TestimonialSlider from "./components/TestimonialSlider";
import ContactUsForm from "./components/ContactUsForm";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Sen:wght@400..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <LandingSection />
        <About />
        <ServicesSection />
        <TestimonialSlider />
        <ContactUsForm />
        {children}
      </body>
    </html>
  );
}
