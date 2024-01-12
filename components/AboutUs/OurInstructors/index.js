import { useState, useRef, useEffect, useContext } from 'react';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Pagination, Scrollbar, A11y, Controller, Autoplay } from 'swiper';
import InstructorCard from '../InstructorCard';
import AppContext from '../../../AppContext';

function OurInstructors({ instructorData }) {
  const { theme } = useContext(AppContext);

  const [swiper, setSwiper] = useState();
  const prevRef = useRef();
  const nextRef = useRef();

  useEffect(() => {
    if (swiper && !swiper.destroyed) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [swiper]);
  return (
    <>
      <div className="relative mx-auto max-w-maxScreen ">
        <div className="absolute -top-20 -left-20 -z-40 h-[490px] w-[490px] rounded-full bg-brand100/10 blur-[100px]"></div>
        {/* Headers */}
        <div className="flex flex-row items-center justify-between px-paddingXforMob py-4 pb-0 md:px-16 md:py-14">
          <div className="max-w-[52rem] space-y-3 py-6 font-rubik md:py-0">
            <p
              className={`md:section_heading text-3xl ${
                theme === 'dark' && 'text-[#e8e6e3]'
              } font-bold md:text-[42px] md:font-semibold`}
            >
              Our Instructor
            </p>
            <p className={`section_subheading ${theme === 'dark' ? 'text-[#989082]' : 'text-subText'}`}>
              A mentor is someone confident enough with their experiences and knowledge in a particular topic or set of
              topics, to comfortably assist others with less experience or knowledge.
            </p>
          </div>
          {/* Buttons */}
          <div className="hidden flex-row gap-4 md:flex ">
            <button
              className={`grid h-10 w-20 place-content-center rounded-full ${
                theme === 'dark' ? 'bg-[#222526] text-[#d3cfc9]' : 'bg-grey50 text-[#222]'
              } text-xl`}
              ref={prevRef}
            >
              <BsArrowLeft />
            </button>
            <button
              className={`grid h-10 w-20 place-content-center rounded-full ${
                theme === 'dark' ? 'bg-[#29347a]' : 'bg-brand'
              }  text-xl text-[#fff]`}
              ref={nextRef}
            >
              <BsArrowRight />
            </button>
          </div>
        </div>
        <div
          className={`mx-auto mb-16 h-[2px] w-[90%] bg-white100 md:mb-24 ${theme === 'dark' && 'opacity-30'} `}
        ></div>

        {/* Carousel Cards */}

        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Controller, Autoplay]}
          onSwiper={setSwiper}
          slidesPerView={1}
          spaceBetween={30}
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
              slidesPerView: 1.1,
            },
          }}
          autoplay={{
            delay: 1500,
          }}
          speed={1000}
        >
          {instructorData?.map((item, i) => {
            return (
              <SwiperSlide key={i}>
                <InstructorCard
                  theme={theme}
                  profile_img={item.InstructorProfilePic.data[0].attributes.url}
                  Name={item.InstructorName}
                  designation={item.InstructorDesignition}
                  description={item.InstructorDescription}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}

export default OurInstructors;
