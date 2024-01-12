import Image from 'next/image';
import React, { useContext } from 'react';
import MyButton from '../../common/MyButton';
import assets from '../../../public/assets.json';
import { TiStarFullOutline } from 'react-icons/ti';
import { HiOutlineGlobeAlt } from 'react-icons/hi';
import { TbVideo } from 'react-icons/tb';
import Link from 'next/link';
import AppContext from '../../../AppContext';

function AboutUsHero() {
  const { theme } = useContext(AppContext);

  return (
    <div className={`w-full ${theme === 'dark' ? 'bg-[#29347a]' : 'bg-brand'}  relative`}>
      {/* Dotted Illustration */}
      <div className="absolute bottom-0 right-0">
        <img src={assets.dottedIllustration3} alt="dotted_illus" />
      </div>
      <img
        src={assets.wavy_lines_for_blueBg}
        alt="bg-illus"
        className="hidden md:block absolute top-0 left-0 h-[850px] w-[100vw] object-cover md:-translate-y-72 -translate-y-52"
      />

      <div className="2xl:relative mx-auto grid min-h-[590px] max-w-maxScreen md:grid-cols-2 grid-cols-1">
        {/* Photos */}
        <div className="hidden md:block absolute top-0 right-0 z-30 w-full h-full overflow-hidden">
          <div className="absolute bottom-0 right-0 xl:w-[600px] w-[500px] xl:h-[600px] h-[500px] overflow-hidden">
            <Image
              src={assets.AboutUs_heroImg}
              alt="hero_img"
              placeholder="blur"
              blurDataURL={assets.AboutUs_heroImg}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>

        {/* Text Content */}
        <div
          className={`flex flex-col gap-4 place-self-center md:p-5 px-paddingXforMob ${
            theme === 'dark' ? 'text-[#e8e6e3]' : 'text-[#fff]'
          } z-30`}
        >
          <p className="text-[42px] font-bold">A platform for the next generation of learners!</p>
          <p className={`text-[20px] ${theme === 'dark' ? 'text-[#e8e6e3]' : 'text-HeroSubText'}`}>
            Place for imparting education to next-generation students.
          </p>
          <div className="flex gap-2 items-center">
            <span>4.7</span>
            <span className="flex gap-1">
              {[...new Array(5)].map((_, i) => {
                return <TiStarFullOutline key={i} className="text-yellow500 text-lg" />;
              })}
            </span>
          </div>
          <div className="flex gap-5 text-lg">
            <p className="flex gap-2 items-center">
              {' '}
              <HiOutlineGlobeAlt /> Engilsh &#47; Hindi
            </p>
            <p className="flex gap-1 items-center">
              {' '}
              <TbVideo /> 10+ courses
            </p>
          </div>
          <div>
            <MyButton classes={`bg-white100 text-brand100 px-6 py-[0.5rem] text-[#000]`}>
              <Link href="/#courses">
                <a>Start Learning</a>
              </Link>
            </MyButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsHero;
