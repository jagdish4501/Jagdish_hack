import React, { useContext } from 'react';
import Course_Card from '../common/Course_Card';
import AppContext from '../../AppContext';

function Current_Courses({ coursesData }) {
  const { theme } = useContext(AppContext);
  const data = coursesData?.filter((item) => item?.attributes?.isRecorded === false);

  return (
    <div className={`${theme === 'dark' ? 'bg-[#1b1d1e]' : 'bg-section_bg'} ${data?.length === 0 && 'hidden'}`}>
      <div className="mx-auto w-full max-w-maxScreen ">
        {/* Header */}
        <div className="w-full pt-12 text-center" data-aos="fade-up">
          <p
            className={`section_heading ${
              theme === 'dark' ? 'text-[#e8e6e3]' : 'text-headText'
            } mx-auto max-w-[60%] font-rubik md:mx-0 md:max-w-none`}
          >
            What would you like to{' '}
            <span className={`${theme === 'dark' ? 'text-[#6e96cf]' : 'text-brand'}`}>learn?</span>
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap justify-evenly gap-4 py-14">
          {coursesData?.map((item, i) => {
            // const { title, main_price, discount_price, thumnail_asset } = item;
            return (
              <React.Fragment key={i}>
                {!item?.attributes?.isRecorded && (
                  <Course_Card
                    theme={theme}
                    course_img={item?.attributes?.ThumbnailImage?.data?.attributes?.url}
                    title={item?.attributes?.CourseName}
                    currentPrice={item?.attributes?.currentPrice}
                    actualPrice={item?.attributes?.actualPrice}
                    discount={item?.attributes?.DiscountPercent}
                    CourseLink={`/course/${item?.attributes?.courseSlug}`}
                    isUpcoming={item?.attributes?.isUpcoming}
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>
        <div className={`mx-auto mt-16 h-[1px] w-[90%] ${theme === 'dark' ? 'bg-[#4a5054]' : 'bg-grey100'} `}></div>
      </div>
    </div>
  );
}

export default Current_Courses;
