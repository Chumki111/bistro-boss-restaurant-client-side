// import{ useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,FreeMode} from 'swiper/modules';
import './styles.css';
import img1 from '../../../assets/home/slide1.jpg';
import img2 from '../../../assets/home/slide2.jpg';
import img3 from '../../../assets/home/slide3.jpg'
import img4 from '../../../assets/home/slide4.jpg'
import img5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const OrderSlider = () => {
    return (
        <section className="mt-12 mb-12">
             <div>
                <SectionTitle 
                subHeading='---From 11:00am to 10:00pm---'
                heading='ORDER ONLINE'></SectionTitle>
             </div>

            <div className='px-2 md:px-8 lg:px-14'>
            <Swiper
        slidesPerView={4}
        initialSlide={2}
        freeMode={true}
        spaceBetween={30}
        centeredSlides={true}
        pagination= {{
          clickable: true,
          
        }}
        modules={[FreeMode,Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div>
                <img src={img1} alt="" />
                <h3 className="text-3xl uppercase -mt-16 text-center text-white shadow-md">Salads</h3> 
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <img src={img2} alt="" />
                <h3 className="text-3xl uppercase -mt-16 text-center text-white shadow-md">Soups</h3>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <img src={img3} alt="" />
                <h3 className="text-3xl uppercase -mt-16 text-center text-white shadow-md">pizzas</h3>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <img src={img4} alt="" />
                <h3 className="text-3xl uppercase -mt-16 text-center text-white shadow-md">desserts</h3>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <img src={img5} alt="" />
                
                <h3 className="text-3xl uppercase -mt-16 text-center text-white shadow-md">Salads</h3>
            </div>
        </SwiperSlide>
       
       
      </Swiper>
            </div>
        </section>
    );
};

export default OrderSlider;