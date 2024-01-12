import React, { useContext, useState } from 'react';
import assets from '../../public/assets.json';
import { HiOutlineGlobeAlt } from 'react-icons/hi';
import { TbVideo } from 'react-icons/tb';
import AppContext from '../../AppContext';
import CourseCard from '../../components/Course/CourseCard';
import CourseOverview from '../../components/Course/CourseOverview';
import { useRouter } from 'next/router';
import Rating_Stars from '../../components/common/Rating_Stars';
import ReactMarkdown from 'react-markdown';

function Course({ courseData }) {
  const { theme } = useContext(AppContext);
  const router = useRouter();
  const [video, setVideo] = useState(0);

  if (router.isFallback) {
    return <>Loading...</>;
  }

  return (
    <div onClick={() => setVideo(5)}>
      {/* Hero Section */}
      <div className={`w-full ${theme === 'dark' ? 'bg-[#29347a]' : 'bg-brand'}  relative`}>
        <img
          src={assets.wavy_lines_for_blueBg}
          alt="bg-illus"
          className="hidden md:block absolute top-0 left-0 h-[850px] w-[100vw] object-cover md:-translate-y-72 -translate-y-52"
        />

        <div className="2xl:relative mx-auto min-h-[590px] max-w-maxScreen grid md:grid-cols-2 grid-cols-1 gap-4 md:gap-0">
          {/* Text Content */}
          <div
            className={`flex flex-col gap-4 place-self-center py-14 px-paddingXforMob max-w-[650px] ${
              theme === 'dark' ? 'text-[#e8e6e3]' : 'text-[#fff]'
            } z-30`}
          >
            <div>
              <p className={`text-[20px] ${theme === 'dark' ? 'text-[#e8e6e3]' : 'text-HeroSubText'}`}>
                <ReactMarkdown>{courseData?.attributes?.CourseBanner?.TagLine}</ReactMarkdown>
              </p>
              <h1 className="text-[42px] font-bold">{courseData?.attributes?.CourseName}</h1>
            </div>
            <p className={`text-[20px] ${theme === 'dark' ? 'text-[#e8e6e3]' : 'text-HeroSubText'}`}>
              <ReactMarkdown>{courseData?.attributes?.CourseBanner?.CourseDescription}</ReactMarkdown>
            </p>
            <div className="flex gap-2 items-center">
              <span>{courseData?.attributes?.CourseBanner?.Rating}</span>
              <Rating_Stars Review_Count={courseData?.attributes?.CourseBanner?.Rating} />
            </div>
            <div className="flex gap-5 text-lg">
              <p className="flex gap-2 items-center">
                <HiOutlineGlobeAlt /> {courseData?.attributes?.CourseBanner?.CourseLanguage}
              </p>
              <p className="flex gap-1 items-center">
                <TbVideo /> {courseData?.attributes?.CourseBanner?.NoOfLecture} Lectures
              </p>
            </div>
          </div>

          {/* Courses Card */}
          <div className="relative w-full min-h-[200px] px-paddingXforMob">
            <CourseCard
              CourseBannerData={courseData?.attributes?.CourseBanner}
              CourseCardData={courseData?.attributes?.CourseCard}
              CourseEnrollmentClosed={courseData?.attributes?.enrollmentClosed}
              CourseEnrollmentLink={courseData?.attributes?.enrollmentLink}
              CourseUpcoming={courseData?.attributes?.isUpcoming}
              videoVal={video}
            />
          </div>
        </div>
      </div>
      {/* Page Content */}
      <div className="max-w-[1000px] mx-auto">
        <CourseOverview courseData={courseData} />
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const courseRes = await fetch(
    `${process.env.baseUrl}/courses?populate=ThumbnailImage,CourseBanner.ThumbnailImage,CourseOverview.WhatYouWillLearn,CourseOverview.BasicDetails,Instructor.InstructorProfilePic,CourseSection.CourseDetails.SVGIcon,seo.CourseSection.CourseDetails.SVGIcon,seo.OgMetaImage,TwitterMetaImage,faq,CourseCard`
  );
  const courseData = await courseRes.json();

  const currentCourses = courseData?.data?.filter((course) => {
    if (course.attributes.UpcomingOrNot) return course;
  });

  const slugPaths = currentCourses?.map((item) => {
    return { params: { courseSlug: item?.attributes?.courseSlug } };
  });

  return {
    paths: slugPaths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const courseRes = await fetch(
    `${process.env.baseUrl}/courses?populate=ThumbnailImage,enrollmentClosed,enrollmentLink,isUpcoming,CourseBanner.ThumbnailImage,CourseOverview.WhatYouWillLearn,CourseOverview.BasicDetails,Instructor.InstructorProfilePic,CourseSection.CourseDetails.SVGIcon,seo.CourseSection.CourseDetails.SVGIcon,seo.OgMetaImage,TwitterMetaImage,faq,CourseBanner.Video,CourseCard&filters[courseSlug][$eq]=${context.params.courseSlug}`
  );
  const courseData = await courseRes.json();

  const discountRes = await fetch(`${process.env.baseUrl}/discount-banner?populate=*`);
  const discountData = await discountRes.json();

  if (!courseData?.data?.length) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      courseData: courseData?.data[0],
      discount: discountData.data,
      metaData: courseData?.data[0]?.attributes?.seo,
    },
    revalidate: 1,
  };
}

export default Course;
