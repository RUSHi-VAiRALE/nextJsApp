'use client'
import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
//import image from '../../public/400x300.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Events() {
  const [progress, setProgress] = useState(0);
  
  const events = [
    {
      date: { day: '01', month: 'Oct' },
      time: '08:00 AM - 10:00 AM',
      title: 'Engaging Students in Real-World Problems Finding',
      location: 'United States',
      image: 'https://cdn.pixabay.com/photo/2021/04/24/15/37/online-6204349_640.jpg'
    },
    {
      date: { day: '01', month: 'Oct' },
      time: '08:00 AM - 10:00 AM',
      title: 'Engaging Students in Real-World Problems Finding',
      location: 'United States',
      image: 'https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg'
    },
    {
      date: { day: '01', month: 'Oct' },
      time: '08:00 AM - 10:00 AM',
      title: 'Engaging Students in Real-World Problems Finding',
      location: 'United States',
      image: 'https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg'
    },{
      date: { day: '01', month: 'Oct' },
      time: '08:00 AM - 10:00 AM',
      title: 'Engaging Students in Real-World Problems Finding',
      location: 'United States',
      image: 'https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg'
    }
  ];

  return (
    <section className="bg-[#e7edff] py-12">
      <div className="container mx-auto w-[85%] lg:w-[75%]">
        <div className="text-center mb-8">
          <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Our Upcoming Events
          </span>
          <h2 className="text-3xl font-bold">Upcoming Events & Webinars</h2>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={10}
          centeredSlides={true}
          breakpoints={{
            640: {
              slidesPerView: 1.2,
              spaceBetween: 8
            },
            768: {
              slidesPerView: 1.5,
              spaceBetween: 10
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 15
            }
          }}
          onSlideChange={(swiper) => {
            const progress = ((swiper.realIndex + 1) / events.length) * 100;
            setProgress(progress);
          }}
          className="w-full mb-8"
        >
          {events.map((event, index) => (
            <SwiperSlide key={index} className="py-2">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg h-full transition-transform duration-300 hover:-translate-y-1 max-w-[400px] mx-auto">
                <div className="relative w-full h-[300px]">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 400px) 100vw, 400px"
                  />
                  <div className="absolute top-0 left-0 bg-[#E3D7B8] px-5 py-2 rounded-br-xl">
                    <div className="text-center">
                      <h5 className="text-2xl font-bold text-gray-800">{event.date.day}</h5>
                      <small className="text-gray-600 text-sm">{event.date.month}</small>
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center mb-3">
                    <i className="bi bi-clock text-orange-500 mr-2 text-base"></i>
                    <span className="text-sm text-gray-600">{event.time}</span>
                  </div>

                  <h5 className="font-bold text-lg mb-3">{event.title}</h5>

                  <div className="flex items-center mb-4">
                    <i className="bi bi-geo-alt text-orange-500 mr-2 text-base"></i>
                    <span className="text-sm text-gray-600">{event.location}</span>
                  </div>

                  <button className="px-6 py-2.5 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 text-white font-semibold rounded-full hover:opacity-90 transition-opacity shadow-lg text-sm">
                    View Details
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons and Progress Bar */}
        <div className="w-[75%] mx-auto">
          <div className="flex items-center justify-between gap-4">
            <button className="relativeswiper-button-prev w-10 h-10 bg-white rounded-full flex items-center border-red-600 justify-center shadow-lg hover:bg-blue-50 transition-colors after:content-[''] group">
              <i className="bi bi-chevron-left text-red-600 group-hover:text-blue-600"></i>
            </button>
            
            <div className="flex-grow bg-gray-200 h-2 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            
            <button className="relativeswiper-button-next w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-50 transition-colors after:content-[''] group">
              <i className="bi bi-chevron-right text-red-600 group-hover:text-blue-600"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 