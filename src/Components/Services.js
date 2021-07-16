import React, { useState } from 'react';
import { FaBeer, FaSpa, FaHamburger, FaBicycle } from 'react-icons/fa';

const Services = () => {
  const data = [
    { icons: <FaBeer />, title: 'Delicious Food', content: 'Tdolor sit amet, consectetur, adipis civelit sed quia non qui dolorem ipsum quia dolor sit amet, consectetur, adipis civelit. Red quia numquam.' },
    { icons: <FaSpa />, title: 'Lexuary Spa', content: 'Tdolor sit amet, consectetur, adipis civelit sed quia non qui dolorem ipsum quia dolor sit amet, consectetur, adipis civelit. Red quia numquam.' },
    { icons: <FaHamburger />, title: 'In-House Restuarant', content: 'Tdolor sit amet, consectetur, adipis civelit sed quia non qui dolorem ipsum quia dolor sit amet, consectetur, adipis civelit. Red quia numquam.' },
    { icons: <FaBicycle />, title: 'Fitness Gym', content: 'Tdolor sit amet, consectetur, adipis civelit sed quia non qui dolorem ipsum quia dolor sit amet, consectetur, adipis civelit. Red quia numquam.' },
  ];
  const [servicesData] = useState(data);
  return (
    <>
      <section className='services'>
        <div className='section-title'>
          <h4>Services</h4>
          <div />
        </div>
        <div className='services-center'>
          {servicesData.map((service, idx) => {
            return (
              <article key={idx} className='service'>
                <span>{service.icons}</span>
                <h6>{service.title}</h6>
                <p>{service.content}</p>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Services;
