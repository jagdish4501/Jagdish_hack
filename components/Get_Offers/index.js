import React, { useContext } from 'react';
import Image from 'next/image';
import assets from '../../public/assets.json';
import AppContext from '../../AppContext';

function Get_Offers() {
  const { theme } = useContext(AppContext);

  return (
    <div className="relative mx-auto grid max-w-maxScreen grid-cols-1 items-center py-24 md:grid-cols-2 md:justify-start">
      <div
        className={`absolute top-0 -left-1/2 h-[2px] w-full bg-gradient-to-r  ${
          theme === 'dark' ? 'from-[#fff] top-[#000]' : 'from-subText to-[#fff]'
        }`}
      ></div>
      {/* Content */}
      <div className="mx-auto w-[90%] md:w-fit md:pl-10 md:text-start xl:pl-0">
        <p className="font-rubik text-base font-semibold uppercase  md:text-xl" data-aos="fade-right">
          <span className={`${theme === 'dark' ? 'text-[#6e96cf]' : 'text-brand'}`}>Placements</span>
        </p>
        <p
          className="section_heading mt-5 mb-8 font-rubik leading-7 md:leading-[2.8rem]"
          data-aos="fade-right"
          data-aos-delay={100}
        >
          <span className={`${theme === 'dark' && 'text-[#dbd8d3]'}`}>
            Get Offers from
            <br />
            Top Companies
          </span>
        </p>
        <p className="font-rubik" data-aos="fade-right" data-aos-delay={150}>
          <span className={`section_subheading ${theme === 'dark' ? 'text-[#989082]' : 'text-[#777c85]'}`}>
            Our finest get offers from top-notch companies.
          </span>
        </p>
      </div>
      {/* Cicles */}
      <div className="relative grid place-content-center py-16 md:py-0 ">
        <div className="outer_wheel circle_animation relative grid h-72 w-72 place-content-center rounded-full border border-purple100 transition-all sm:h-96 sm:w-96">
          <div className="crotate absolute h-16 w-16">
            <Image
              src={assets.wheel_logo_1}
              alt="circle logo"
              width={20}
              height={20}
              layout="responsive"
              className="scale-[2.2]"
            />
          </div>
          <div className="crotate absolute h-16 w-16">
            <Image
              src={assets.amazon_logo}
              alt="circle logo"
              width={20}
              height={20}
              layout="responsive"
              className="scale-[2.2]"
            />
          </div>
          <div className="crotate absolute h-16 w-16">
            <Image
              src={assets.wheel_logo_9}
              alt="circle logo"
              width={20}
              height={20}
              layout="responsive"
              className="scale-[2.2]"
            />
          </div>
          <div className="crotate absolute h-16 w-16">
            <Image
              src={assets.wheel_logo_2}
              alt="circle logo"
              width={20}
              height={20}
              layout="responsive"
              className="scale-[2.2]"
            />
          </div>
          <div className="crotate absolute h-16 w-16">
            <Image
              src={assets.wheel_logo_3}
              alt="circle logo"
              width={20}
              height={20}
              layout="responsive"
              className="scale-[2.2]"
            />
          </div>
          <div className="crotate absolute h-16 w-16">
            <Image
              src={assets.wheel_logo_4}
              alt="circle logo"
              width={20}
              height={20}
              layout="responsive"
              className="scale-[2.2]"
            />
          </div>

          <div
            className={`circle_animation2 relative grid h-52 w-52 place-content-center rounded-full ${
              theme === 'dark' ? 'bg-[#202224]' : 'bg-purple100'
            } sm:h-72 sm:w-72`}
          >
            <div
              className={`inner_cicle h-32 w-32 rounded-full ${
                theme === 'dark' ? 'bg-[#181a1b]' : 'bg-[#fff]'
              } sm:h-40 sm:w-40 `}
            >
              <div className="crotate2 absolute h-16 w-16">
                <Image
                  src={assets.wheel_logo_5}
                  alt="circle logo"
                  width={20}
                  height={20}
                  layout="responsive"
                  className="scale-[2.2]"
                />
              </div>
              <div className="crotate2 absolute h-16 w-16">
                <Image
                  src={assets.wheel_logo_6}
                  alt="circle logo"
                  width={20}
                  height={20}
                  layout="responsive"
                  className="scale-[2.2]"
                />
              </div>
              <div className="crotate2 absolute h-16 w-16">
                <Image
                  src={assets.wheel_logo_7}
                  alt="circle logo"
                  width={20}
                  height={20}
                  layout="responsive"
                  className="scale-[2.2]"
                />
              </div>
              <div className="crotate2 absolute h-16 w-16">
                <Image
                  src={assets.wheel_logo_8}
                  alt="circle logo"
                  width={20}
                  height={20}
                  layout="responsive"
                  className="scale-[2.2]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Get_Offers;
