import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../assets/styles/Home.css";
import {
  FaLeaf,
  FaSpa,
  FaSnowflake,
  FaHeart,
  FaHandHoldingHeart,
  FaHandsHelping,
  FaHandPaper,
  FaMugHot,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

const Home = () => {
//  const [currentImage, setCurrentImage] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselData = [
  {
    image: "/images/y.jpg",
    title: "Relax in Pure Bliss",
    description: "Experience unmatched serenity with our signature spa rituals."
  },
  {
    image: "/images/f.jpg",
    title: "Luxury Redefined",
    description: "Indulge in our premium massage therapies curated just for you."
  },
  {
    image: "/images/p.jpg",
    title: "Nature’s Healing Touch",
    description: "Rejuvenate with aroma oils and herbal infusions."
  },
  {
    image: "/images/ab.jpg",
    title: "Feel the Difference",
    description: "From deep tissue to Thai massage, we tailor the experience."
  }
];


  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prev) => (prev + 1) % carouselData.length);
  }, 5000);
  return () => clearInterval(interval);
}, []);

  const handleCarouselClick = (index) => {
    setCurrentIndex(index);
  };



const services = [
  { name: "Dry Massage", price: "1500", desc: "Traditional dry therapy.", bgColor: "#ffe4e1", icon: <FaLeaf /> },
  { name: "Aroma Oil Massage", price: "2000", desc: "Calm with essential oils.", bgColor: "#e0f7fa", icon: <FaSpa /> },
  { name: "Cream Massage", price: "2500", desc: "Soothing cream touch.", bgColor: "#f3e5f5", icon: <FaHeart /> },
  { name: "Mintjel Massage", price: "2500", desc: "Cool mint therapy.", bgColor: "#e8f5e9", icon: <FaSnowflake /> },
  { name: "Chocolate Massage", price: "3000", desc: "Sweet stress relief.", bgColor: "#fff3e0", icon: <FaMugHot /> },
  { name: "Deep Tissue Massage", price: "3000", desc: "Relieve deep tension.", bgColor: "#fbe9e7", icon: <FaHandHoldingHeart /> },
  { name: "Thai Massage", price: "4000", desc: "Classic Thai technique.", bgColor: "#e3f2fd", icon: <FaHandsHelping /> },
  { name: "Hand Massage", price: "4000", desc: "Focused hand healing.", bgColor: "#f0f4c3", icon: <FaHandPaper /> }
];


  return (
    <div className="home" id="home">
     <div className="carousel" data-aos="fade-down">
  <div className="carousel-image-wrapper">
    <img
      src={carouselData[currentIndex].image}
      alt={`slide-${currentIndex}`}
      className="carousel-image"
    />
    <div className="carousel-overlay" />
    <div className="carousel-caption">
      <h2>{carouselData[currentIndex].title}</h2>
      <p>{carouselData[currentIndex].description}</p>
    </div>
  </div>
  <div className="carousel-nav">
    {carouselData.map((_, index) => (
      <button
        key={index}
        className={`carousel-btn ${currentIndex === index ? "active" : ""}`}
        onClick={() => setCurrentIndex(index)}
      ></button>
    ))}
  </div>
</div>


      <section id="services" className="services" data-aos="fade-up">
        <h2 className="section-title-services">Our Services</h2>
        <div className="service-grid">
  {services.map((service, index) => (
    <div
      key={index}
      className="service-card"
      style={{ backgroundColor: service.bgColor }}
      data-aos="zoom-in-up"
    >
      <div className="service-icon">{service.icon}</div>
      <h3>{service.name}</h3>
      <p>{service.desc}</p>
      <span>₹ {service.price}</span>
    </div>
  ))}
</div>
      </section>

      <section id="offers" className="offers" data-aos="zoom-in">
  <h2 className="section-title-offers">Special Offers</h2>
  <p className="offer-description">
    Enjoy our limited-time <span className="animated-offer-word">Uchit The Luxury Spa</span> spa packages starting at ₹1199!
  </p>
</section>


<section id="about" className="about" data-aos="fade-right">
  <h2 className="section-title-about">About Us</h2>
  <div className="about-content">
    <img className="about-image" src="/images/about.jpg" alt="about" />
    <div className="about-text">
      <p>
        <span className="animated-brand">Uchit The Luxury Spa</span> is your ultimate destination for relaxation and rejuvenation. 
        Offering various soothing therapies including Dry Massage, Aroma Oil Massage, 
        and more, our spa ensures you leave feeling refreshed and revitalized.
        At our spa, we believe in the healing power of touch and the serenity it brings to both body and soul. 
        Nestled in a tranquil environment, our sanctuary offers a blend of traditional therapies and modern wellness practices. 
        Our skilled therapists specialize in massages, aroma treatments, and personalized care to rejuvenate you from within. 
        We use only premium, natural products to ensure a holistic and luxurious experience. 
        Whether you're seeking relaxation, stress relief, or deep tissue healing, our spa is your peaceful escape. 
        Step in, unwind, and discover the art of relaxation redefined just for you.
      </p>
    </div>
  </div>
</section>


      <section className="three-image-carousel" data-aos="fade-left">
        <div className="carousel-row">
          <img src="/images/c.jpg" alt="img1" className="carousel-slide" />
          <img src="/images/d.jpg" alt="img2" className="carousel-slide" />
          <img src="/images/r.jpg" alt="img3" className="carousel-slide" />
          <img src="/images/slide3.jpg" alt="img3" className="carousel-slide" />
        </div>
      </section>

     <section id="contact" className="contact" data-aos="fade-up">
  <h2 className="section-title-contact">📞 Contact <span className="highlight">Us</span></h2>
  <form className="contact-form">
    <p>
      <a
        className="contact-icon map"
        href="https://maps.app.goo.gl/MxYxq1Ha4rXErzBC8"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaMapMarkerAlt />
      </a>
      <span className="contact-text">Uchit The Luxury Spa | 1st Flore, Krishna Business Center, M3, near Vedanta Hospital, Vijay Nagar, Scheme 54 PU4, Indore, Madhya Pradesh 451020</span>
    </p>
    <p>
      <a className="contact-icon phone" href="tel:+91 9179625864 | +91 9202853498 | +91 8269807884" title="Call us">
        <FaPhoneAlt />
      </a>
      <span className="contact-text">9179625864 | 9202853498 | 8269807884</span>
    </p>
  </form>
</section>

     
    </div>
  );
};

export default Home;
