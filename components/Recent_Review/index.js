import { useState, useRef, useEffect, useContext } from 'react';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
import Review_Card from '../common/Review_Card';
import reviews from './reviews.json';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Pagination, Scrollbar, A11y, Controller, Autoplay } from 'swiper';
import AppContext from '../../AppContext';

function Recent_Review({ testimonial }) {
  const [swiper, setSwiper] = useState();
  const prevRef = useRef();
  const nextRef = useRef();
  const { theme } = useContext(AppContext);

  useEffect(() => {
    if (swiper && !swiper.destroyed) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [swiper]);

  return (
    <div className="relative mx-auto max-w-maxScreen ">
      <div className="absolute -top-20 -left-20 -z-40 h-[490px] w-[490px] rounded-full bg-brand100/10 blur-[100px]"></div>
      {/* Headers */}
      <div className="flex flex-row items-center justify-between px-6 py-4 pb-0 md:px-16 md:py-14">
        <div className="py-6 font-rubik md:py-0">
          <p className={`pre_heading mb-2 ${theme === 'dark' ? 'text-[#6e96cf]' : 'text-brand'}`}>What student says</p>
          <p
            className={`md:section_heading text-3xl font-bold md:text-[42px] md:font-semibold ${
              theme === 'dark' ? 'text-[#e8e6e3]' : 'text-headText'
            }`}
          >
            Recent Reviews
          </p>
        </div>
        {/* Buttons */}
        <div className="hidden flex-row gap-4 md:flex ">
          <button
            className={`grid h-10 w-20 place-content-center rounded-full ${
              theme === 'dark' ? 'bg-[#222526] text-[#d3cfc9]' : 'bg-grey50 text-[#222]'
            } text-xl`}
            ref={prevRef}
            aria-label="Previous"
          >
            <BsArrowLeft />
          </button>
          <button
            className={`grid h-10 w-20 place-content-center rounded-full ${
              theme === 'dark' ? 'bg-[#29347a]' : 'bg-brand'
            }  text-xl text-[#fff]`}
            ref={nextRef}
            aria-label="Next"
          >
            <BsArrowRight />
          </button>
        </div>
      </div>
      <div
        className={`mx-auto select-none mb-16 h-[2px] w-[90%] bg-white100 md:mb-24 ${theme === 'dark' && 'opacity-30'}`}
      ></div>

      {/* Carousel Cards */}

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Controller, Autoplay]}
        onSwiper={setSwiper}
        slidesPerView={1}
        spaceBetween={0}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: prevRef?.current,
          nextEl: nextRef?.current,
        }}
        updateOnWindowResize
        observer
        observeParents
        className="mySwiper"
        breakpoints={{
          1340: {
            slidesPerView: 2.5,
          },
          850: {
            slidesPerView: 1.5,
          },
        }}
        autoplay={{
          delay: 1500,
        }}
        speed={1000}
      >
        {testimonial.map((card, i) => {
          return (
            <SwiperSlide key={i}>
              <Review_Card
                key={i}
                theme={theme}
                name={card?.attributes?.UserName}
                course_name={card?.attributes?.courseName}
                description={card?.attributes?.UserReview}
                review_count={card?.attributes?.UserRatings}
                user_Image={card?.attributes?.UserImage?.data?.attributes?.url}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Recent_Review;
