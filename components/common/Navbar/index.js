import Image from 'next/image';
import Link from 'next/link';
import { useContext, useEffect, useRef, useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import AppContext from '../../../AppContext';
import Hamburger from '../Hamburger';
import MyButton from '../MyButton';
import NewsBanner from '../NewsBanner';
import links from './links.json';
import assets from '/public/assets.json';

import { FiLogIn } from 'react-icons/fi';

export default function Navbar({ discount }) {
  const { appLogo_desktop, appLogo_desktop_dark } = assets;
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useContext(AppContext);

  const toggleTheme = () => {
    if (typeof window !== 'undefined') {
      if (theme === 'dark') {
        localStorage.theme = 'light';
        document.body.style.backgroundColor = 'unset';
        setTheme('light');
      } else {
        localStorage.theme = 'dark';
        document.body.style.backgroundColor = '#131516';
        setTheme('dark');
      }
    }
  };

  const navbar = useRef(null);

  return (
    <>
      <div ref={navbar} className="fixed z-[9999] w-full transition-all duration-300">
        <NewsBanner theme={theme} discount={discount} />
        <div
          className={`relative flex items-center justify-center py-4 transition-all duration-300 ${
            theme === 'dark' ? 'bg-[#131516]' : 'bg-section_bg'
          }`}
          style={{
            boxShadow: '0px 4px 10px rgba(157, 157, 157, 0.2)',
          }}
        >
          <nav className="flex w-[95%] max-w-maxScreen justify-between">
            <Link href="/">
              <a onClick={() => setOpen(false)}>
                {theme === 'dark' ? (
                  <Image src={appLogo_desktop_dark} width={201} height={46} alt="CodeHelp Logo" />
                ) : (
                  <Image src={appLogo_desktop} width={201} height={46} alt="CodeHelp Logo" />
                )}
              </a>
            </Link>

            <ul className="hidden items-center gap-x-6 md:flex">
              {links.map((link, index) => (
                <li key={index}>
                  <Link href={link?.link}>
                    <a
                      className={`font-rubik py-5 ${
                        theme === 'dark' && 'text-[#e8e6e3]'
                      } text-lg leading-5 relative group flex gap-1 items-center hover:text-[#6674CC] transition-all duration-150`}
                      target={link?.target}
                    >
                      <span>{link.name}</span>
                      <span className={`${link?.sublinks ? 'block scale-75' : 'hidden'}`}>
                        <BsChevronDown />
                      </span>
                      {/* Sub Link Mapping */}
                      {link?.sublinks && (
                        <>
                          {/* invisible opacity-0 */}
                          <div
                            className={`flex invisible opacity-0 group-hover:opacity-100 group-hover:visible group-hover:translate-y-[1.65em] transition-all duration-150 rounded-lg absolute text-headText w-[300px] p-4 left-[50%] top-[50%] translate-y-[3em] translate-x-[-50%] flex-col gap-7 ${
                              theme === 'dark' ? 'bg-[#131516]' : 'bg-section_bg '
                            } `}
                          >
                            {link?.sublinks.map((sublink, i) => (
                              <div key={i} className={`${theme === 'dark' ? 'text-[#fff]' : 'text-headText'} `}>
                                <Link href={sublink?.link}>
                                  <a className="opacity-80 hover:opacity-100" target={sublink?.target}>
                                    <div className="flex gap-1 items-center">
                                      <div className="font-bold text-lg">{sublink?.name}</div>
                                      <div
                                        style={{
                                          backgroundColor: sublink?.tags?.backgroundColor,
                                          color: sublink?.tags?.textColor,
                                        }}
                                        className="w-fit rounded-full px-3 font-medium text-xs"
                                      >
                                        {sublink?.tags?.name}
                                      </div>
                                    </div>
                                    <div className="text-sm">{sublink.description}</div>
                                  </a>
                                </Link>
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="hidden items-center gap-x-2 font-rubik md:flex">
              <Link href="https://learn.thecodehelp.in/s/dashboard">
                <a target="_blank">
                  <MyButton theme={theme} option="outline" classes="py-[0.5rem] px-7 flex flex-row items-center">
                    Dashboard
                  </MyButton>
                </a>
              </Link>
              <Link href="https://learn.thecodehelp.in/s/dashboard">
                <a target="_blank">
                  <MyButton theme={theme} option="solid" classes="py-[0.5rem] px-10 flex flex-row items-center">
                    Login <FiLogIn className="ml-2 text-xl" />
                  </MyButton>
                </a>
              </Link>
              {theme === 'light' ? (
                <MdOutlineDarkMode fontSize={38} onClick={toggleTheme} cursor="pointer" fill="#6674CC" />
              ) : (
                <MdOutlineLightMode fontSize={38} onClick={toggleTheme} cursor="pointer" fill="#fff" />
              )}
            </div>

            <div className="flex items-center md:hidden">
              <Hamburger theme={theme} open={open} setOpen={setOpen} />
              {theme === 'light' ? (
                <MdOutlineDarkMode fontSize={32} onClick={toggleTheme} cursor="pointer" fill="#6674CC" />
              ) : (
                <MdOutlineLightMode fontSize={32} onClick={toggleTheme} cursor="pointer" fill="#fff" />
              )}
            </div>
          </nav>
        </div>

        {/* mobile menu */}
        <div
          className={`animate__animated animate__fadeIn animate__faster absolute top-full left-0 right-0 z-[9998] backdrop-blur-lg pt-[10vh] pb-[8vh] font-rubik md:hidden  ${
            open ? 'opacity-1 pointer-events-auto visible' : 'pointer-events-none hidden opacity-0'
          } transition-all duration-300`}
          style={{
            backgroundColor: `${theme === 'dark' ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.25)'}`,
            boxShadow: '0px 4px 10px rgba(157, 157, 157, 0.2)',
          }}
        >
          <ul className="flex flex-col items-center gap-y-6 md:hidden select-none">
            {links.map((link, index) => (
              <li onClick={() => setOpen(false)} key={index} className="text-center">
                <Link href={link.link} target="_blank">
                  <a className={`font-rubik ${theme === 'dark' && 'text-[#fff]'} text-xl leading-5`}>{link.name}</a>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex w-full flex-col items-center justify-center gap-x-2 md:hidden">
            <Link href="https://learn.thecodehelp.in/s/dashboard">
              <a
                target="_blank"
                className="cursor-pointer py-2 px-9 place-items-center rounded-md xl:text-lg bg-[#fff] text-lg"
              >
                Dashboard
              </a>
            </Link>
            <Link href="https://learn.thecodehelp.in/s/dashboard">
              <a target="_blank">
                <MyButton theme={theme} option="solid" classes="mt-6 py-2 px-11 text-lg flex items-center">
                  Login <FiLogIn className="ml-2 text-xl" />
                </MyButton>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
