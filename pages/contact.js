import React, { useContext } from 'react';
import Contact_Form from '../components/common/Contact_Form';
import assets from '../public/assets.json';
import { IoMdCall, IoMdMail } from 'react-icons/io';
import { IoLocation } from 'react-icons/io5';
import { BsYoutube } from 'react-icons/bs';
import { GrLinkedinOption } from 'react-icons/gr';
import { FaTelegramPlane, FaDiscord } from 'react-icons/fa';
import Link from 'next/link';
import AppContext from '../AppContext';

function Contact() {
  const { theme } = useContext(AppContext);

  const contactDetails = [
    {
      icon: <IoMdMail />,
      data: 'support@codehelp.in',
    },
    // {
    //   icon: <IoMdCall />,
    //   data: '+91 11 3577 2816',
    // },
    {
      icon: <IoLocation />,
      data: 'Plot. 4A, Street no-15, Uttam Nagar, New Delhi - 110059',
    },
  ];

  return (
    <>
      <div className="animate__animated animate__fadeIn animate__fast">
        <div className="relative h-fit w-[100vw] overflow-hidden bg-[#000]">
          <div
            style={{
              backgroundImage: 'url(' + assets.Contact_Banner_img + ')',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            className="sm:h-[60vh] h-[50vh] w-full opacity-40 flex items-center"
          >
            {/* <img src={assets.Contact_Banner_img}  /> */}
          </div>
          <div className="absolute sm:top-1/3 top-1/4 left-0 w-full text-[#fff]">
            <div className="mx-auto max-w-maxScreen px-12 sm:text-start text-center ">
              <p className="sm:text-[52px] text-5xl font-bold">Get In Touch</p>
              <p className="sm:text-lg text-base">The Ultimate Guide To Ace SDE Interviews.</p>
            </div>
          </div>
        </div>

        <div className="mx-auto flex h-full w-[80%] max-w-maxScreen -translate-y-20 flex-col shadow-md md:flex-row">
          <div className={`lg:w-[70%] md:w-[60%] ${theme === 'dark' ? 'bg-[#181a1b]' : 'bg-[#fff]'}`}>
            <Contact_Form />
          </div>
          <div
            className={`flex flex-col justify-center sm:items-start items-center gap-4 ${
              theme === 'dark' ? 'bg-[#333f90]' : 'bg-brand300'
            } px-5 py-8 text-[#fff] lg:w-[40%] md:w-[40%]`}
          >
            <p className="text-2xl font-bold">Contact Information</p>
            <div className="grid h-[440px] place-content-center place-self-center gap-4">
              {contactDetails.map((item, index) => (
                <div key={index} className="flex gap-2 items-center flex-col">
                  <div
                    className={`mx-auto grid h-[52px] w-[52px] place-content-center rounded-lg ${
                      theme === 'dark' ? 'bg-[#2e3982]' : 'bg-[#6572C8]'
                    } text-2xl`}
                  >
                    {item.icon}
                  </div>
                  <p className="text-center w-2/3">{item.data}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-5 text-xl md:text-3xl">
              <Link href="https://www.youtube.com/channel/UCldyi11QYNXYXiLjVbyw5dA">
                <a>
                  <BsYoutube />
                </a>
              </Link>
              <Link href="https://www.linkedin.com/in/love-babbar-38ab2887/">
                <a>
                  <GrLinkedinOption />
                </a>
              </Link>
              <Link href="https://t.me/lovebabbercodehelp">
                <a>
                  <FaTelegramPlane />
                </a>
              </Link>
              <Link href="https://discord.gg/y2yrEcQv75">
                <a>
                  <FaDiscord />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

export const getStaticProps = async () => {
  const discountRes = await fetch(`${process.env.baseUrl}/discount-banner?populate=*`);
  const discountData = await discountRes.json();

  const seoRes = await fetch(`${process.env.baseUrl}/contact-us-page?populate=SEO.OgMetaImage,SEO.TwitterMetaImage`);
  const data = await seoRes.json();

  return {
    props: {
      discount: discountData.data,
      metaData: data.data.attributes.SEO,
    },
    revalidate: 7200, // 2 hours
  };
};
