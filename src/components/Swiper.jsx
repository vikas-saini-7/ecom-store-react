import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';

const SwiperImages = [
    {
        id: 1,
        image: './images/hero.png'
    },
    {
        id: 2,
        image: './images/hero-1.png'
    },
    {
        id: 3,
        image: './images/hero-2.png'
    },
]

const MySwiper = () => {
  return (
    <div className='w-full xl:px-[10%]'>
        <Swiper
            autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            }}
            spaceBetween={0}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}>
                {SwiperImages.map((item) => (
                    <SwiperSlide key={item.id}>
                        <img className='w-full h-[200px] sm:h-[280px] md:h-[320px] lg:h-[400px] xl:h-[600px] object-cover' src={item.image} alt="" />
                    </SwiperSlide>
                ))}
        </Swiper>
    </div>
  )
}

export default MySwiper