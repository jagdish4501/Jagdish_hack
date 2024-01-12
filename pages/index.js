import Current_Courses from '../components/Current_Courses';
import Get_Offers from '../components/Get_Offers';
import Join_Coding_Fam from '../components/Join_Coding_Fam';
import Recent_Review from '../components/Recent_Review';
import Recorded_Courses from '../components/Recorded_Courses';
import Hero from '../components/Hero';
import Why_Code_Help from '../components/Why_Code_Help';
import Stats from '../components/Stats';
import Meet_Instructor from '../components/Meet_Instructor';
import React from 'react';

export default function Home({
  featureCardData,
  socialLinks,
  socialMediaCount,
  testimonial,
  instructorData,
  coursesData,
}) {
  return (
    <div className={`animate__animated animate__fadeIn animate__fast`}>
      {/*========== 'Stats Counter' Section Starts Here ==========*/}
      <Hero />
      <section className="home__statsCounterSection">
        <Stats socialMediaCount={socialMediaCount} />
      </section>
      {/*========== 'Stats Counter' Section Ends Here ==========*/}

      {/*========== 'Why Code Help' Section Starts Here ==========*/}
      <section className="home__whyCodeHelpSection">
        <Why_Code_Help featureCardData={featureCardData} />
      </section>
      {/*========== 'Why Code Help' Section Ends Here ==========*/}

      {/*========== 'Instructor Profile' Section Starts Here ==========*/}
      <section className="home__instructorProfileSection">
        <Meet_Instructor instructorData={instructorData} />
      </section>
      {/*========== 'Instructor Profile' Section Ends Here ==========*/}

      {/*========== 'Placement' Section Starts Here ==========*/}
      <section className="home__placementSection">
        <Get_Offers />
      </section>
      {/*========== 'Placement' Section Ends Here ==========*/}

      {/*========== 'Current Courses' Section Starts Here ==========*/}
      <section className="home__currentCoursesSection" id="courses">
        <Current_Courses coursesData={coursesData} />
      </section>
      {/*========== 'Current Courses' Section Ends Here ==========*/}

      {/*========== 'Upcoming Courses' Section Starts Here ==========*/}
      <section className="home__upcomingCoursesSection">
        <Recorded_Courses coursesData={coursesData} />
      </section>
      {/*========== 'Upcoming Courses' Section Ends Here ==========*/}

      {/*========== 'Reviews' Section Starts Here ==========*/}
      <section className="home__reviewsSection">
        <Recent_Review testimonial={testimonial} />
      </section>
      {/*========== 'Reviews' Section Ends Here ==========*/}

      {/*========== 'Join Coding Family' Section Starts Here ==========*/}
      <section className="home_joinCodingFamilySection">
        <Join_Coding_Fam socialLinks={socialLinks} />
      </section>
      {/*========== 'Join Coding Family' Section Ends Here ==========*/}
    </div>
  );
}

export async function getStaticProps() {
  const featureRes = await fetch(
    `${process.env.baseUrl}/home-page?populate[0]=SocialMediaCount,CardComponent,MeetTheInstructor.InstructorProfilePic,MeetTheInstructor.CompanysWorkedIn.CompanyLogo,SocialLinks.SocialMediaIcon,SEO,SEO.OgMetaImage,SEO.TwitterMetaImage`
  );
  const featureCardData = await featureRes.json();

  const courseRes = await fetch(`${process.env.baseUrl}/courses?populate=*`);
  const courseData = await courseRes.json();

  const testimonialRes = await fetch(`${process.env.baseUrl}/testomonials?populate=%2A`);
  const testimonialData = await testimonialRes.json();

  const discountRes = await fetch(`${process.env.baseUrl}/discount-banner?populate=*`);
  const discountData = await discountRes.json();

  // console.log('data : ', metaData);

  return {
    props: {
      metaData: featureCardData.data.attributes.SEO,
      featureCardData: featureCardData.data.attributes.CardComponent,
      socialLinks: featureCardData.data.attributes.SocialLinks,
      socialMediaCount: featureCardData.data.attributes.SocialMediaCount,
      instructorData: featureCardData.data.attributes.MeetTheInstructor,
      testimonial: testimonialData.data,
      coursesData: courseData.data,
      discount: discountData.data,
    },
    revalidate: 1,
  };
}
