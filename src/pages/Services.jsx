import '../assets/styles/Pages.css';

function Services() {
  const services = [
    { name: 'Dry Massage', price: 1500 },
    { name: 'Aroma Oil Massage', price: 2000 },
    { name: 'Cream Massage', price: 2500 },
    { name: 'Mintjel Massage', price: 2500 },
    { name: 'Chocolate Massage', price: 3000 },
    { name: 'Deep Tissue Massage', price: 3000 },
    { name: 'Thai Massage', price: 4000 },
    { name: 'Hand Massage', price: 4000 },
  ];

  return (
    <section className="page services-page">
      <h2 className="page-title">💫 Types of Massage 💫</h2>
      <ul className="service-list">
        {services.map((service, index) => (
          <li key={index} className="service-item">
            <span>{service.name}</span>
            <span>₹{service.price}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Services;
