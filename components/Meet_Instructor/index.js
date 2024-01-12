import React, { useContext } from 'react';
import MyButton from '../common/MyButton';
import Image from 'next/image';
import assets from '../../public/assets.json';
import Link from 'next/link';
import AppContext from '../../AppContext';

function Meet_Instructor({ instructorData }) {
  const { theme } = useContext(AppContext);

  return (
    <div className="relative overflow-y-hidden">
      {/* Backgrounds */}
      <img
        src={assets.wavy_lines}
        alt="bg-illus"
        className="absolute top-0 left-0 h-[850px] w-[100vw] object-cover md:-translate-y-72 -translate-y-52"
      />
      <div className="absolute bottom-10 -left-40 -z-40 h-[490px] w-[490px] rounded-full bg-brand100/10 blur-[100px]"></div>
      <div className="relative mx-auto max-w-maxScreen px-6 py-12">
        {/* Header */}
        <div className="flex items-center justify-between py-6">
          <p className={`section_heading font-rubik ${theme === 'dark' ? 'text-[#e8e6e3]' : 'text-headText'}`}>
            Meet your <span className={`${theme === 'dark' ? 'text-[#6e96cf]' : 'text-brand'}`}>Instructor</span>
          </p>
          <Link href={`/about`}>
            <a>
              <MyButton
                theme={theme}
                option="solid"
                classes="md:px-7 md:py-3 px-4 py-2 text-sm md:text-base whitespace-nowrap"
              >
                Know more
              </MyButton>
            </a>
          </Link>
        </div>
        <div className="h-[1px] w-full bg-subText"></div>

        {/* Bhaiya ka Photo */}
        <div className="space-y-4 py-16" data-aos="fade-up">
          <div className="mx-auto h-52 w-52 overflow-hidden rounded-full md:h-64 md:w-64">
            <Image
              src={instructorData?.InstructorProfilePic?.data?.attributes?.url}
              width={20}
              height={20}
              priority
              layout="responsive"
              alt="Love Babbar Headshot Image"
              className="object-cover object-top"
            />
          </div>
          <div className="text-center font-rubik">
            <p className={`text-3xl ${theme === 'dark' && 'text-[#e8e6e3]'} font-bold`}>
              {instructorData?.InstructorName}
            </p>
            <p className={`text-2xl ${theme === 'dark' ? 'text-[#989082]' : 'text-subText'}`}>
              {instructorData?.InstructorDesignition}
            </p>
          </div>
        </div>

        {/* Companies */}
        <div className="grid grid-cols-1 gap-16 pb-24 pt-10 md:grid-cols-3 md:gap-0" data-aos="fade-up">
          {instructorData?.CompanysWorkedIn.map((element, i) => {
            return (
              <div className="text-center" key={i}>
                {/* <Image src={element?.CompanyLogo?.data?.attributes?.url} width="100px" height="50px" /> */}
                {theme === 'dark' && i === 0 ? (
                  <img
                    src={assets.amazon_com_logo_white}
                    alt="company logo"
                    className="mx-auto w-fit w-[185px] h-[45px] object-contain"
                  />
                ) : (
                  <img src={element?.CompanyLogo?.data?.attributes?.url} alt="company logo" className="mx-auto w-fit" />
                )}
                <p className={`text-xl ${theme === 'dark' ? 'text-[#b4ada3]' : 'text-textpara'}`}>
                  {element?.CompanyRole}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Meet_Instructor;
