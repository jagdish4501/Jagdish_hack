import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import AppContext from '../../../AppContext';
import assets from '../../../public/assets.json';

const menu = [
  {
    link: '/about',
    name: 'About Us',
  },
  {
    link: '/#courses',
    name: 'Courses',
  },
  {
    link: 'https://labs.thecodehelp.in',
    name: 'Labs',
    target: '_blank',
  },
  {
    link: '/contact',
    name: 'Contact',
  },
];
const services = [
  {
    link: '/privacy-policy',
    name: 'Privacy Policy',
  },
  {
    link: '/terms-of-use',
    name: 'Terms of use',
  },
  {
    link: '/refund-and-cancellation-policy',
    name: 'Refund & Cancellation Policy',
  },
];

export default function Footer() {
  const { theme } = useContext(AppContext);

  return (
    <>
      <footer
        className={`relative min-h-[280px] w-full overflow-hidden ${
          theme === 'dark' ? 'bg-[#29347a] text-[#e8e6e3]' : 'bg-brand text-[#fff]'
        } py-8 px-8 font-rubik`}
      >
        {/* BACKGROUND IMAGES */}
        <img
          src={assets.wavy_lines}
          alt="bg-illus"
          className="absolute top-0 left-0 z-[-1] h-[15vh] w-[100vw] object-cover"
        />
        <img src={assets.dottedIllustration2} alt="dotted_illus" className="absolute bottom-0 right-0" />
        {/* CONTENT */}
        <div className="max-w-maxScreen mx-auto">
          <div className="flex flex-col items-center md:items-start gap-4 md:flex-row md:justify-around md:gap-0 my-6">
            <div className="flex flex-col px-4 text-center md:text-start">
              <div className="mx-auto mb-4 h-16 w-20 md:mx-0">
                <Image
                  src={assets.appLogo_white}
                  alt="CodeHelp Logo"
                  width={40}
                  height={40}
                  layout="responsive"
                  placeholder="blur"
                  blurDataURL={assets.appLogo_white}
                  className="w-fit"
                />
              </div>
              <h2 className="text-xl font-bold uppercase">Code Help</h2>
              <p className="mt-4 text-base max-w-[300px]">The Ultimate Guide To Ace SDE Interviews.</p>
            </div>

            <div className="flex flex-col text-center text-base md:text-left">
              <p className="mb-2 md:mb-6 font-bold uppercase text-center md:text-left">menu</p>
              <div className="flex flex-col gap-y-2">
                {menu.map((item, i) => {
                  return (
                    <Link href={item?.link} key={i}>
                      <a target={item?.target}>{item?.name}</a>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col text-center text-base md:text-left">
              <p className="mb-2 md:mb-6 font-bold uppercase text-center md:text-left">services</p>
              <div className="flex flex-col  gap-y-2">
                {services.map((item, i) => {
                  return (
                    <Link href={item?.link} key={i}>
                      <a className="">{item?.name}</a>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="hidden h-[190px] w-[1px] bg-brColor md:block"></div>

            <div className="flex flex-col text-center text-base md:text-left">
              <p className="mb-2 md:mb-6 font-bold uppercase text-center md:text-left">GET IN TOUCH</p>
              <p>
                Email: <a href="mailto:support@codehelp.in">support@codehelp.in</a>
              </p>
            </div>
          </div>
          <div className="mt-4 text-base text-center border-t border-brColor pt-10">
            Copyright © {new Date().getFullYear()} Sorting Code Help Technologies Pvt Ltd. All Rights Reserved.
          </div>
        </div>
        <div className="text-center hidden">
          This website is built by Target Technology (https://targettechnology.in/links)
        </div>
      </footer>
    </>
  );
}
