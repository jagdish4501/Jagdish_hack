import React from 'react';
import AboutUsSec from '../components/AboutUs/AboutUsSec';
import Get_In_Touch from '../components/AboutUs/Get_In_Touch';
import AboutUsHero from '../components/AboutUs/Hero';
import OurInstructors from '../components/AboutUs/OurInstructors';
import OurStory from '../components/AboutUs/OurStory';
import Recent_Review from '../components/Recent_Review';

function About({ instructorData, testimonial }) {
  return (
    <>
      <div className="animate__animated animate__fadeIn animate__fast font-rubik ">
        <AboutUsHero />
        <AboutUsSec />
        <OurStory />
        <OurInstructors instructorData={instructorData} />
        <Recent_Review testimonial={testimonial} />
        <Get_In_Touch />
      </div>
    </>
  );
}

export default About;

export const getStaticProps = async () => {
  const res = await fetch(
    `${process.env.baseUrl}/aboutus-page?populate=SEO.OgMetaImage,SEO.TwitterMetaImage,Instructor.InstructorProfilePic`
  );
  const data = await res?.json();

  const testimonialRes = await fetch(`${process.env.baseUrl}/testomonials?populate=%2A`);
  const testimonialData = await testimonialRes?.json();

  const discountRes = await fetch(`${process.env.baseUrl}/discount-banner?populate=*`);
  const discountData = await discountRes?.json();

  return {
    props: {
      metaData: data?.data?.attributes?.SEO,
      instructorData: data?.data?.attributes?.Instructor,
      testimonial: testimonialData?.data,
      discount: discountData?.data,
    },
    revalidate: 1800, // 30 minutes
  };
};
