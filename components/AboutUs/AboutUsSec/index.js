import React, { useContext } from 'react';
import AppContext from '../../../AppContext';
import assets from '../../../public/assets.json';

function AboutUsSec() {
  const { theme } = useContext(AppContext);

  return (
    <>
      <div className="relative">
        <div className="mx-auto my-10 grid min-h-[564px] max-w-maxScreen px-paddingXforMob md:grid-cols-2 md:px-4">
          <img
            src={assets.AboutUs_img}
            alt="img"
            className="-pt-1 mx-auto h-[80vw] w-[80vw] place-self-center rounded-full object-cover object-top sm:h-[500px] sm:w-full sm:rounded-3xl md:w-[660px] lg:h-[564px]"
          />

          {/* Text content */}
          <div className="flex flex-col items-center justify-center gap-4 px-4 py-10 md:items-start md:px-12 lg:px-20">
            <p className={`section_heading ${theme === 'dark' ? 'text-[#e8e6e3]' : 'text-headText'}`}>About us</p>
            <p
              className={`section_subheading text-center md:text-start ${
                theme === 'dark' ? 'text-[#989082]' : 'text-subText'
              } `}
            >
              Hello! Welcome to <span className="font-medium">Code Help</span>! Really happy to see you here.
            </p>
            <p
              className={`content_text text-justify md:text-start ${
                theme === 'dark' ? 'text-[#b0a99f]' : 'text-grey100'
              }`}
            >
              Thinking of taking a step towards a mentorship programme? It definitely seems a bit daunting at first. It
              is never easy to ask for someone&apos;s counsel or guidance be it for studies or just in general. So, at{' '}
              <span className="font-medium">CodeHelp</span> we are here to provide all the necessary counsel you might
              need for <span className="font-medium">placement preparations, interview experiences, programming</span>,
              et cetera! For any additional questions, feel free to email us at lovebabbar@codehelp.in
            </p>

            {/* <div>
              <MyButton option="solid" classes={`px-4 py-2 mt-3`}>
                Contact Us
              </MyButton>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUsSec;
