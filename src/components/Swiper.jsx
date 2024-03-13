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
        image: './images/swiper1.png'
    },
    {
        id: 1,
        image: './images/swiper1.png'
    },
    {
        id: 1,
        image: './images/swiper1.png'
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
                    <SwiperSlide>
                        <img className='w-full h-[360px] md:h-[450px] lg:h-[550px] xl:h-[650px] object-cover' src="https://cdn.dribbble.com/users/428659/screenshots/5805667/dribbblebnr.jpg?compress=1&resize=400x300&vertical=top" alt="" />
                    </SwiperSlide>
                ))}
        </Swiper>
    </div>
  )
}

export default MySwiper