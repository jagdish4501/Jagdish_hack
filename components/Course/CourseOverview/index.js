import Link from 'next/link';
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import AppContext from '../../../AppContext';
import AccordionItem from './CourseContent';
import Course_Instructor from './Course_Instructor';
import Faq from './Faq';
import Overview from './Overview';

const CourseOverview = ({ courseData }) => {
  const [tab, setTab] = useState('overview');
  const { theme } = useContext(AppContext);

  const tabClass =
    'p-4 px-10 cursor-pointer transition- duration-300  whitespace-nowrap ' + (theme == 'dark' && 'text-[#fff]');

  // Accordian states
  const [active, setActive] = useState(null);

  const handleToggle = (index) => {
    if (active === index) {
      setActive(null);
    } else {
      setActive(index);
    }
  };

  return (
    <div className="py-10 mt-36 px-paddingXforMob">
      <div className="flex border border-[#D2D2D2] justify-between  font-medium bg-[#6674CC1A] overflow-x-auto">
        <div
          className={` ${tabClass} ${tab === 'overview' ? 'border-b border-brand text-brand' : ''} `}
          onClick={() => setTab('overview')}
        >
          Overview
        </div>
        <Link href={'#course_content'}>
          <a>
            <div
              className={` ${tabClass} ${tab === 'course-content' ? 'border-b border-brand text-brand' : ''} `}
              onClick={() => setTab('course-content')}
            >
              Course Content
            </div>
          </a>
        </Link>
        <Link href={'#instructor'}>
          <a>
            <div
              className={` ${tabClass} ${tab === 'instructor' ? 'border-b border-brand text-brand' : ''} `}
              onClick={() => setTab('instructor')}
            >
              Instructor
            </div>
          </a>
        </Link>
        <Link href={'#faq'}>
          <a>
            <div
              className={` ${tabClass} ${tab === 'faq' ? 'border-b border-brand text-brand' : ''} `}
              onClick={() => setTab('faq')}
            >
              FAQs
            </div>
          </a>
        </Link>
      </div>

      <div className={`border-b-[1.5px] ${theme == 'dark' ? 'text-[#fff] border-grey50' : 'border-[#00000033]'}`}>
        <Overview OverviewData={courseData?.attributes?.CourseOverview} />
      </div>

      <div
        className={`border-b-[1.5px] ${theme == 'dark' ? 'border-grey50' : 'border-[#00000033]'} py-16`}
        id="course_content"
      >
        {/* <CourseContent /> */}
        <div className={`text-2xl font-semibold mb-14  ${theme == 'dark' && 'text-[#fff]'}`}>Course Content</div>
        {courseData?.attributes?.CourseSection?.map((item, index) => {
          return <AccordionItem key={index} active={active} handleToggle={handleToggle} AccData={item} />;
        })}
      </div>

      <div
        className={`py-14 border-b-[1.5px] ${theme == 'dark' ? 'border-grey50' : 'border-[#00000033]'}`}
        id="instructor"
      >
        <div className={`text-2xl font-semibold mb-14 ${theme == 'dark' && 'text-[#fff]'}`}>
          {courseData?.attributes?.Instructor?.length == 1 ? 'Instructor' : 'Instructors'}
        </div>
        <div>
          <Course_Instructor Course_Ins_data={courseData?.attributes?.Instructor} />
        </div>
      </div>

      {/* Faq */}
      <div className="my-14" id="faq">
        <div className={`text-2xl font-semibold mb-14 ${theme == 'dark' && 'text-[#fff]'}`}>FAQs</div>
        <div>
          {courseData?.attributes?.faq?.map((item, i) => {
            return <Faq Faq_data={item} key={i} active={active} handleToggle={handleToggle} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default CourseOverview;
