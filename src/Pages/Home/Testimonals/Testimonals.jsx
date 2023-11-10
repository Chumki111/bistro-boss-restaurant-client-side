import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './styles.css';
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css';

const Testimonals = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className="my-14 px-2 md:px-8 lg:px-14">
            <SectionTitle
                subHeading='---What Our Clients Say---'
                heading='TESTIMONIALS'
            ></SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">

                {
                    reviews?.map(review => <SwiperSlide key={review._id}>
                        <div className="flex flex-col items-center my-16 mx-16">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            
                            <p className="py-3 max-w-4xl">{review.details}</p>
                            <h2 className="text-2xl text-[#CD9003]">{review.name}</h2>
                        </div>

                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Testimonals;