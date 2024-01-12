import React from 'react';
import { useContext } from 'react';
// import Swiper from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import AppContext from '../../../../AppContext';
import InstructorCard from '../../../AboutUs/InstructorCard';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Navigation, Pagination, Scrollbar, A11y, Controller, Autoplay } from 'swiper';

function Course_Instructor({ Course_Ins_data }) {
  const { theme } = useContext(AppContext);
  return (
    <>
      <div className="max-w-maxScreen mx-auto">
        {Course_Ins_data.length <= 1 ? (
          <>
            <InstructorCard
              theme={theme}
              profile_img={Course_Ins_data[0]?.InstructorProfilePic.data[0].attributes.url}
              Name={Course_Ins_data[0]?.InstructorName}
              designation={Course_Ins_data[0]?.InstructorDesignition}
              description={Course_Ins_data[0]?.InstructorDescription}
              Course_page={true}
            />
          </>
        ) : (
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Controller, Autoplay]}
            //   onSwiper={setSwiper}
            slidesPerView={1}
            spaceBetween={30}
            slidesPerGroup={1}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            updateOnWindowResize
            observer
            observeParents
            className="mySwiper"
            breakpoints={{
              1340: {
                slidesPerView: 1,
              },
            }}
            autoplay={{
              delay: 1500,
            }}
            speed={1000}
          >
            {Course_Ins_data?.map((item, i) => {
              return (
                <SwiperSlide key={i}>
                  <InstructorCard
                    theme={theme}
                    profile_img={item.InstructorProfilePic.data[0].attributes.url}
                    Name={item.InstructorName}
                    designation={item.InstructorDesignition}
                    description={item.InstructorDescription}
                    Course_page={true}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
      </div>
    </>
  );
}

export default Course_Instructor;
