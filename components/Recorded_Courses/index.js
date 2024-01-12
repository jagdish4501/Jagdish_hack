import React, { useContext } from 'react';
import Course_Card from '../common/Course_Card';
import AppContext from '../../AppContext';

function Recorded_Courses({ coursesData }) {
  const { theme } = useContext(AppContext);
  const data = coursesData?.filter((item) => item?.attributes?.isRecorded === true);

  return (
    <div className={`${theme === 'dark' ? 'bg-[#1b1d1e]' : 'bg-section_bg'} ${data?.length === 0 && 'hidden'}`}>
      <div className="mx-auto w-full max-w-maxScreen ">
        {/* Header */}
        <div className="w-full pt-12 text-center font-rubik" data-aos="fade-up">
          <p className={`section_heading ${theme === 'dark' ? 'text-[#e8e6e3]' : 'text-headText'}`}>
            Recorded <span className={`${theme === 'dark' ? 'text-[#6e96cf]' : 'text-brand'}`}>Courses</span>
          </p>
        </div>

        {/* Cards */}

        <div className="flex flex-wrap justify-evenly gap-4 py-14">
          {coursesData?.map((item, i) => {
            // const { title, main_price, discount_price, thumnail_asset } = item;
            return (
              <React.Fragment key={i}>
                {item?.attributes?.isRecorded && (
                  <Course_Card
                    theme={theme}
                    course_img={item?.attributes?.ThumbnailImage?.data?.attributes?.url}
                    title={item?.attributes?.CourseName}
                    currentPrice={item?.attributes?.currentPrice}
                    actualPrice={item?.attributes?.actualPrice}
                    discount={item?.attributes?.DiscountPercent}
                    CourseLink={`/course/${item?.attributes?.courseSlug}`}
                    isRecorded={true}
                    key={i}
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Recorded_Courses;
