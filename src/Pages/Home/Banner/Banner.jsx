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

// import img from '../../../assets/images/banner/b7.jpg';
import teacher from '../../../assets/images/svg icon/icons8-teacher-100.png'
import education from '../../../assets/images/svg icon/education-94.png'
import library from '../../../assets/images/svg icon/icons8-library-80.png'
import certificate from '../../../assets/images/svg icon/icons8-certificate-100.png'
// import Safety from '../../../assets/images/svg icon/icons8-safety-64.png'



const Banner = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper w-screen"
            >
                <SwiperSlide><img className=' mx-auto' src={banner4} alt="" /></SwiperSlide>
                <SwiperSlide><img className=' mx-auto' src={banner2} alt="" /></SwiperSlide>
                <SwiperSlide><img className=' mx-auto' src={banner3} alt="" /></SwiperSlide>
                <SwiperSlide><img className=' mx-auto' src={banner1} alt="" /></SwiperSlide>
            </Swiper>



            <div className='mt-20 '>
                <p className='text-center text-sky-400 font-extrabold'>Learn Anything</p>
                <h1 className="text-4xl font-extrabold text-center mb-10">Benefits About Online Learning Expertise</h1>
                <div className='grid sm:grid-cols-1 lg:grid-cols-4 gap-5'>
                    <div className='shadow-md rounded-md p-5 bg-sky-200'>
                        <img className='h-24 ' src={teacher} alt="" />
                        <h3 className="text-3xl font-bold">Certified Teachers</h3>
                        <p>Our Certified Teachers are not just instructors; they are experts in their respective fields who have undergone rigorous training and certification processes to ensure that you receive the highest quality education.</p>
                    </div>
                    <div className='shadow-md rounded-md p-5 bg-orange-200'>
                        <img className='h-24' src={education} alt="" />
                        <h3 className="text-3xl font-bold">Special Education</h3>
                        <p>Special Education is a field dedicated to supporting individuals with diverse learning needs, including those with disabilities, learning differences, and special requirements. </p>
                    </div>
                    <div className='shadow-md rounded-md p-5 bg-sky-200'>
                        <img className='h-24' src={library} alt="" />
                        <h3 className="text-3xl font-bold">Book & Library</h3>
                        <p>Whether you are an aspiring author, a library professional, or simply a book enthusiast, our Book & Library courses offer something for everyone. Immerse yourself in the world of words, stories, and knowledge as you explore the magic of books and libraries.</p>
                    </div>
                    <div className='shadow-md rounded-md p-5 bg-orange-200'>
                        <img className='h-24' src={certificate} alt="" />
                        <h3 className="text-3xl font-bold">Earn A Certificates</h3>
                        <p>Upon successful completion of our courses, you will earn a valuable certificate that is recognized and respected in your field. This certificate is a testament to your dedication and competence.</p>
                    </div>
                </div>
            </div>




            {/* <div className='mt-20 p-5 grid sm:grid-cols-1 lg:grid-cols-2'>
                <div className=''>
                    <img className='rounded-md' src={img} alt="" />
                </div>
                
                <div className='ml-10'>
                    <p className='font-extrabold'>What We Offer</p>
                    <h1 className="text-4xl font-extrabold">Benefits About Online Learning Expertise</h1>
                    <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word</p>
                    <div className='grid sm:grid-cols-1 lg:grid-cols-2'>
                        <div className='flex'>
                            <img className='bg-orange-400 p-2 rounded-2xl' src={Safety} alt="" />
                            <div className='ml-3'>
                                <h6 className='text-2xl font-bold'>Safety First</h6>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                            </div>
                        </div>
                        <div className='flex mt-10'>
                            <img src="" alt="" />
                            <div>
                                <h6 className='text-2xl font-bold'>Certified Teachers</h6>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <img src="" alt="" />
                            <div>
                                <h6 className='text-2xl font-bold'>Creative Lessons</h6>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <img src="" alt="" />
                            <div>
                                <h6 className='text-2xl font-bold'>Regular Classes</h6>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <img src="" alt="" />
                            <div>
                                <h6 className='text-2xl font-bold'>Sufficient Classrooms</h6>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <img src="" alt="" />
                            <div>
                                <h6 className='text-2xl font-bold'>Sports Facilities</h6>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

        </>
    );
};

export default Banner;