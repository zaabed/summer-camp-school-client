import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'


const Reviews = () => {

    const [axiosSecure] = useAxiosSecure();

    const { data: reviews = [] } = useQuery(['reviews'], async () => {
        const res = await axiosSecure.get('/reviews');
        return res.data;
    })

    return (
        <div className="mt-20">
            <h1 className="text-4xl text-center font-bold uppercase">Our Student Reviews</h1>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >

                        <div className="flex flex-col items-center mx-24  my-16">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <p className="py-8">{review.reviewDetails}</p>
                            <h3 className="text-3xl text-orange-500">{review.studentName}</h3>
                        </div>

                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Reviews;