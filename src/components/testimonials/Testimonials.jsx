import React from 'react'
import './Testimonials.css'
import AVR1 from '../../assets/avatar1.jpg'
import AVR2 from '../../assets/avatar2.jpg'
import AVR3 from '../../assets/avatar3.jpg'
import AVR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Array

const data = [
  {
    avatar: AVR1,
    name: 'Amit Gorai',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo error doloribus sunt quia officiis, magni autem molestiae, ducimus veniam tenetur, eaque recusandae natus sint maiores quod impedit debitis? Distinctio, aut.'
  },
  {
    avatar: AVR2,
    name: 'Subha Das',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo error doloribus sunt quia officiis, magni autem molestiae, ducimus veniam tenetur, eaque recusandae natus sint maiores quod impedit debitis? Distinctio, aut.'
  },
  {
    avatar: AVR3,
    name: 'Sachin Dutta',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo error doloribus sunt quia officiis, magni autem molestiae, ducimus veniam tenetur, eaque recusandae natus sint maiores quod impedit debitis? Distinctio, aut.'
  },
  {
    avatar: AVR4,
    name: 'Jharna Mandal',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo error doloribus sunt quia officiis, magni autem molestiae, ducimus veniam tenetur, eaque recusandae natus sint maiores quod impedit debitis? Distinctio, aut.'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="Avatar One" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials
