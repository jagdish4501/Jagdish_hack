import Image from 'next/image';
import React from 'react';
import assets from '../../../public/assets.json';
import ReactMarkdown from 'react-markdown';

function InstructorCard({ theme, Name, profile_img, designation, description, Course_page }) {
  return (
    <>
      <div
        className={`flex md:flex-row flex-col justify-between gap-4 max-w-maxScreen items-center ${
          Course_page && 'px-8'
        }`}
      >
        <Image
          src={profile_img || assets.AboutUs_heroImg_1}
          alt="instructor_img"
          width={320}
          height={374}
          className={!Course_page && 'rounded-2xl'}
          objectFit="cover"
          quality={100}
        />

        {/* Description */}
        <div className={`${Course_page ? 'md:max-w-[55%]' : 'md:max-w-[70%]'} space-y-6 text-center md:text-start`}>
          <div>
            <p className={`section_heading ${theme === 'dark' ? 'text-[#dbd8d3]' : 'text-textHead'}`}>{Name}</p>
            <p className={`section_subheading ${theme === 'dark' ? 'text-[#989082]' : 'text-textHead'}`}>
              {designation}
            </p>
          </div>
          <p className={`content_text pr-5 text-justify ${theme === 'dark' ? 'text-[#b0a99f]' : 'text-[#a6a6a6]'}`}>
            <ReactMarkdown>{description}</ReactMarkdown>
          </p>
        </div>
      </div>
    </>
  );
}

export default InstructorCard;
