import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import Typewriter from 'typewriter-effect';
import AppContext from '../../AppContext';
import MyButton from '../common/MyButton';
import assets from '/public/assets.json';

function Hero() {
  const {
    hero_bg_grad,
    hero_illustration_characters,
    computer,
    notegraph,
    mobile_illus,
    heroStudent1,
    heroStudent2,
    heroStudent3,
    heroStudent4,
    heroStudent5,
    hero_images_2x,
  } = assets;

  const { theme } = useContext(AppContext);

  return (
    <>
      <section className={`flex items-center py-12 md:py-0`}>
        {/* Illustrations */}
        <div className="absolute left-0 top-0 flex w-full justify-end -z-[1000] blur-3xl">
          <Image src={hero_bg_grad} alt="background-gradient" width={787} height={806} className="animate-wiggle" />
        </div>
        <div className="mx-auto flex w-11/12 max-w-7xl flex-col-reverse items-center justify-between md:flex-row">
          {/* text section */}
          <div className="flex flex-col gap-y-6 md:min-w-[400px] lg:min-w-[600px]">
            <h1
              className={`flex items-center gap-x-2 text-3xl font-bold md:text-4xl xl:text-6xl`}
              data-aos="fade-right"
            >
              <span className={`${theme === 'dark' ? 'text-[#6e96cf]' : 'text-brand'}`}>Learn</span>
              <span className={`${theme === 'dark' ? 'text-[#e8e6e3]' : 'text-textHead'}`}>With</span>
              <span className={`${theme === 'dark' ? 'text-[#e8e6e3]' : 'text-textHead'}`}>
                <Typewriter
                  options={{
                    strings: ['Love', 'Babbar'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h1>
            <p className={`font-rubik text-xl md:text-2xl xl:text-4xl`} data-aos="fade-right" data-aos-delay={50}>
              <span className={`${theme === 'dark' ? 'text-[#e8e6e3]' : 'text-textpara'}`}>
                The Ultimate Guide To Ace <br /> SDE Interviews.
              </span>
            </p>
            <div className="flex items-center gap-x-4 font-rubik" data-aos="fade-right" data-aos-delay={100}>
              <Link href="#courses">
                <a>
                  <MyButton theme={theme} option="solid" classes="xl:px-9 px-5 xl:py-4 py-2">
                    View Courses
                  </MyButton>
                </a>
              </Link>
              <Link href="https://www.youtube.com/@CodeHelp/videos">
                <a target="_blank">
                  <MyButton theme={theme} option="outline" classes="xl:px-9 px-5 xl:py-4 py-2">
                    Watch Video
                  </MyButton>
                </a>
              </Link>
            </div>
            <div className="mt-8 flex items-center justify-start gap-x-4" data-aos="fade-right" data-aos-delay={150}>
              <div className="relative flex h-[48px] w-[190px] items-center">
                <div className="absolute top-0 left-0 rounded-full overflow-hidden">
                  <Image
                    src={heroStudent1}
                    alt="student"
                    width={48}
                    height={48}
                    quality={100}
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <div className="absolute top-0 left-8 z-10 rounded-full overflow-hidden">
                  <Image
                    src={heroStudent2}
                    alt="student"
                    width={48}
                    height={48}
                    quality={100}
                    className="rounded-full border border-white100"
                  />
                </div>
                <div className="absolute top-0 left-[4rem] z-10 rounded-full overflow-hidden">
                  <Image
                    src={heroStudent3}
                    alt="student"
                    width={48}
                    height={48}
                    quality={100}
                    className="rounded-full border border-white100"
                  />
                </div>
                <div className="absolute top-0 left-[6rem] z-10 rounded-full overflow-hidden">
                  <Image
                    src={heroStudent4}
                    alt="student"
                    width={48}
                    height={48}
                    quality={100}
                    className="rounded-full border border-white100"
                  />
                </div>
                <div className="absolute top-0 left-[8rem] z-10 rounded-full overflow-hidden">
                  <Image
                    src={heroStudent5}
                    alt="student"
                    width={48}
                    height={48}
                    quality={100}
                    className="rounded-full border border-white100"
                  />
                </div>
              </div>
              <div>
                <p
                  className={`font-rubik font-semibold leading-3 ${
                    theme === 'dark' ? 'text-[#dbd8d3]' : 'text-headText'
                  }`}
                >
                  20000 +
                </p>
                <p className={`font-rubik ${theme === 'dark' ? 'text-[#989082]' : 'text-subText'}`}>Happy Students</p>
              </div>
            </div>
          </div>
          {/* image section */}
          <div className="flex items-center md:max-w-[60%]">
            <div className="relative hidden xl:block">
              <Image
                src={hero_illustration_characters}
                placeholder="blur"
                blurDataURL={hero_illustration_characters}
                width={5112}
                height={5963}
                objectFit="contain"
                priority
                alt="image illustration"
              />
              <div className="absolute top-16 left-64 h-[172px] w-[172px] animate-topdown">
                <Image src={computer} alt="" layout="fill" objectFit="cover" quality={100} />
              </div>
              <div className="absolute bottom-64 right-28 h-[157px] w-[157px] animate-topdown">
                <Image src={mobile_illus} alt="" layout="fill" objectFit="cover" quality={100} />
              </div>
              <div className="absolute bottom-56 left-28 h-[182px] w-[182px] animate-topdown">
                <Image src={notegraph} alt="" layout="fill" objectFit="cover" quality={100} />
              </div>
            </div>
            <div className="relative block xl:hidden">
              <Image
                src={hero_images_2x}
                placeholder="blur"
                blurDataURL={hero_images_2x}
                width={5112}
                height={5963}
                objectFit="contain"
                priority
                alt="hero image illustration"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
