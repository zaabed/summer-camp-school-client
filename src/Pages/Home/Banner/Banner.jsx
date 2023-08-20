// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


import banner1 from '../../../assets/images/banner/b1.jpg';
import banner2 from '../../../assets/images/banner/b2.jpg';
import banner3 from '../../../assets/images/banner/b3.jpg';
import banner4 from '../../../assets/images/banner/b4.jpg';
import banner5 from '../../../assets/images/banner/b5.jpg';


const Banner = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper h-96"
            >
                <SwiperSlide><img className=' mx-auto' src={banner1} alt="" /></SwiperSlide>
                <SwiperSlide><img className=' mx-auto' src={banner2} alt="" /></SwiperSlide>
                <SwiperSlide><img className=' mx-auto' src={banner3} alt="" /></SwiperSlide>
                <SwiperSlide><img className=' mx-auto' src={banner4} alt="" /></SwiperSlide>
                <SwiperSlide><img className=' mx-auto' src={banner5} alt="" /></SwiperSlide>
            </Swiper>
        </>
    );
};

export default Banner;