import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import ReactMarkdown from 'react-markdown';
import AppContext from '../../../AppContext';

function CountDown({ date }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const difference = Date.parse(date) - Date.parse(new Date());
    if (difference > 0) {
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }
  }, [date]);

  return (
    <div className="flex items-center space-x-1">
      {(timeLeft.days && (
        <div className="flex items-center space-x-1">
          <div className="flex items-center space-x-1">
            <p className="lg:text-lg font-rubik">{timeLeft.days}</p>
            <p className="lg:text-lg font-rubik">{timeLeft.days > 1 ? 'Days' : 'Day'}</p>
          </div>
          <div className="flex items-center space-x-1">
            <p className="lg:text-lg font-rubik">{timeLeft.hours}</p>
            <p className="lg:text-lg font-rubik">{timeLeft.hours > 1 ? 'Hours' : 'Hour'}</p>
          </div>
        </div>
      )) ||
        (timeLeft.hours && (
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <p className="lg:text-lg font-rubik">{timeLeft.hours}</p>
              <p className="lg:text-lg font-rubik">{timeLeft.hours > 1 ? 'Hours' : 'Hour'}</p>
            </div>
            <div className="flex items-center space-x-1">
              <p className="lg:text-lg font-rubik">{timeLeft.minutes}</p>
              <p className="lg:text-lg font-rubik">{timeLeft.minutes > 1 ? 'Mins' : 'Min'}</p>
            </div>
          </div>
        )) || (
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <p className="lg:text-lg font-rubik">{timeLeft.minutes}</p>
              <p className="lg:text-lg font-rubik">{timeLeft.minutes > 1 ? 'Mins' : 'Min'}</p>
            </div>
          </div>
        )}
      <p className="lg:text-lg font-rubik">Left</p>
    </div>
  );
}

function NewsBanner({ discount, theme }) {
  const { bannerOpen, setBannerOpen } = useContext(AppContext);

  useEffect(() => {
    if (!discount?.attributes?.BannerVisibility) setBannerOpen(false);
  }, [discount?.attributes?.BannerVisibility, setBannerOpen]);

  if (!discount?.attributes?.BannerVisibility) return null;

  return (
    <div
      className={`left-0 right-0 top-0 z-[9999] w-full py-1 flex justify-center items-center bg-gradient-to-b ${
        theme === 'dark' ? 'from-[#2b3782] to-[#3c0084]' : 'from-brand to-purple500'
      } ${!bannerOpen && 'hidden'}`}
      style={{
        boxShadow: '2px -26px 49px -21px rgba(0,0,0,0.49)',
      }}
    >
      <div className="w-11/12 max-w-[1200px] mx-auto flex justify-between items-center">
        <div className="xl:flex xl:flex-row xl:items-center py-2 xl:space-x-2 mx-auto text-center">
          <div className="leading-6 lg:text-lg text-[#fff] font-rubik">
            <ReactMarkdown>{discount?.attributes?.DiscountText}</ReactMarkdown>
          </div>
          <div className="flex items-center space-x-2 justify-center">
            <Link href={discount?.attributes?.BannerLink}>
              <a
                className={`p-1 px-2 ${
                  theme === 'dark' ? 'bg-[#181a1b] text-[#6e96cf]' : 'bg-[#fff] text-brand'
                } lg:text-l font-rubik font-semibold rounded-md`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {discount?.attributes?.SaleEndDate &&
                Date.parse(discount?.attributes?.SaleEndDate) - Date.parse(new Date()) > 0 ? (
                  <CountDown date={discount?.attributes?.SaleEndDate} />
                ) : (
                  discount?.attributes?.CouponCode
                )}
              </a>
            </Link>
          </div>
        </div>
        <button aria-label="close" className="rotate-45 text-4xl text-[#fff]" onClick={() => setBannerOpen(false)}>
          <BiPlus />
        </button>
      </div>
    </div>
  );
}

export default NewsBanner;
