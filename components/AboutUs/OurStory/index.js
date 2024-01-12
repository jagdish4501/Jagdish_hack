import Image from 'next/image';
import React, { useContext } from 'react';
import AppContext from '../../../AppContext';
import assets from '../../../public/assets.json';
import MyButton from '../../common/MyButton';

function OurStory() {
  const { theme } = useContext(AppContext);

  return (
    <>
      <div className="relative">
        <div className="mx-auto my-10 grid h-fit max-w-maxScreen px-paddingXforMob md:grid-cols-2">
          {/* Image */}
          <img
            src={assets.OurStory_img}
            alt="img"
            className="mx-auto block h-[80vw] w-[80vw] rounded-full object-cover sm:h-[500px] sm:w-full sm:rounded-3xl md:hidden"
          />

          {/* Text content */}
          <div className="flex flex-col items-center justify-center gap-4 px-4 py-10 pr-0 md:items-start md:px-0 md:pr-12 lg:pr-20">
            <p
              className={`section_heading ${
                theme === 'dark' ? 'text-[#e8e6e3]' : 'text-headText'
              } text-center md:text-start`}
            >
              Our Story
            </p>
            <p
              className={`section_subheading ${
                theme === 'dark' ? 'text-[#989082]' : 'text-subText'
              } text-center md:text-start`}
            >
              At <span className="font-medium">Code Help</span>, we aim to provide new students with{' '}
              <span className="font-medium">proper mentorship and education</span> for their learning and growth.
            </p>
            <p
              className={`content_text ${
                theme === 'dark' ? 'text-[#b0a99f]' : 'text-grey100'
              } text-justify md:text-start`}
            >
              <span className="font-medium">Code Help</span> was founded in 2020 by{' '}
              <span className="font-medium">Love Babbar (Ex-Amazon, Ex-Microsoft)</span> to deliver “to the point, short
              and practical” educational content for learning programming, coding, and preparing for{' '}
              <span className="font-medium">job placements, and interviews</span>. He has been mentoring students
              through his Youtube channel which has now gained more than{' '}
              <span className="font-medium">17 million views</span> and is now looking forward to providing his guidance
              in different courses through <span className="font-medium">Code Help</span>.
            </p>
            {/* <div>
              <MyButton option="solid" classes={`px-4 py-2 mt-3`}>
                Contact Us
              </MyButton>
            </div> */}
          </div>

          {/* Image */}
          <img
            src={assets.OurStory_img}
            alt="img"
            className="hidden md:block mx-auto h-[80vw] w-[80vw] place-self-center rounded-full object-cover object-top sm:h-[500px] sm:w-full sm:rounded-3xl md:w-[660px] lg:h-[564px]"
          />
        </div>
      </div>
    </>
  );
}

export default OurStory;
