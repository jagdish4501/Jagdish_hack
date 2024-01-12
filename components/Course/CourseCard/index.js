import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import { BsFillCaretRightFill } from 'react-icons/bs';
import AppContext from '../../../AppContext';
import MyButton from '../../common/MyButton';

function CourseCard({
  CourseBannerData,
  CourseCardData,
  CourseEnrollmentClosed,
  CourseEnrollmentLink,
  CourseUpcoming,
  videoVal,
}) {
  const { theme } = useContext(AppContext);

  return (
    <>
      <div
        className={`rounded-2xl p-4 md:absolute -bottom-[100px] right-[1rem] min-h-[600px] max-w-[423px] mx-auto md:translate-y-0  translate-y-24 flex flex-col gap-4 ${
          theme == 'dark' ? 'bg-[#000000c2]' : 'bg-[#ffffffc2]'
        } border border-grey80 shadow-md shadow-grey100 backdrop-blur-md`}
      >
        {videoVal === 0 ? (
          <img
            src={CourseBannerData?.ThumbnailImage?.data?.attributes?.url}
            className="md:max-w-full w-[400px] min-h-[180px] rounded-2xl overflow-hidden"
            alt="course image"
          />
        ) : CourseBannerData?.videoLink || CourseBannerData?.Video?.data?.attributes?.url ? (
          <video
            className="md:max-w-full w-[400px] min-h-[180px] rounded-2xl overflow-hidden"
            preload="auto"
            loop
            muted={videoVal === 0 ? true : false}
            autoPlay
            controls
          >
            <source
              src={CourseBannerData?.videoLink || CourseBannerData?.Video?.data?.attributes?.url}
              type="video/mp4"
            ></source>
          </video>
        ) : (
          <img
            src={CourseBannerData?.ThumbnailImage?.data?.attributes?.url}
            className="md:max-w-full w-[400px] min-h-[180px] rounded-2xl overflow-hidden"
            alt="course image"
          />
        )}
        <div className="px-4">
          <div className="text-xl space-x-3 font-semibold mb-3">
            <span className={`${theme == 'dark' ? 'text-HeroSubText' : 'text-[#000]'}`}>
              ₹{CourseBannerData?.CurrentPrice}
            </span>
            <span className={`${theme == 'dark' ? 'text-grey80' : 'text-textHead'} line-through`}>
              ₹{CourseBannerData?.ActualPrice}
            </span>
          </div>
          <Link
            href={CourseUpcoming ? '#' : CourseEnrollmentClosed ? CourseEnrollmentLink : CourseBannerData?.RazorPayLink}
          >
            <a className="mt-4" target={CourseEnrollmentClosed || CourseUpcoming ? '' : '_blank'}>
              <MyButton
                option={CourseEnrollmentClosed || CourseUpcoming ? '' : 'solid'}
                classes={`${
                  CourseUpcoming || CourseEnrollmentClosed
                    ? `${theme == 'dark' ? 'text-white100' : 'text-headText'}`
                    : 'cursor-pointer text-white100'
                } w-full text-center p-2`}
              >
                {CourseUpcoming ? 'Coming Soon' : CourseEnrollmentClosed ? 'Enrollment Closed' : 'Buy Now'}
              </MyButton>
            </a>
          </Link>

          <div className={`mt-4 ${theme == 'dark' ? 'text-white100' : 'text-headText'}`}>
            <p className={`font-semibold text-xl my-2`}>This Course Includes :</p>
            <div className="flex flex-col gap-3">
              {CourseCardData?.map((item, i) => {
                return (
                  <p className={`flex gap-2 items-center`} key={i}>
                    <BsFillCaretRightFill />
                    <span>{item.feature}</span>
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseCard;
