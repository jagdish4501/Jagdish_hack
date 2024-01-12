import React, { useState, useEffect, useRef, useContext } from 'react';
import Images from 'next/image';
import CountUp from 'react-countup';
import Link from 'next/link';
import assets from '../../public/assets.json';
import AppContext from '../../AppContext';
import Image from 'next/image';

function Stats({ socialMediaCount }) {
  const [showCounter, setShowCounter] = useState(false);
  const counterDiv = useRef(null);
  const { theme } = useContext(AppContext);

  useEffect(() => {
    let windowHeight = window.pageYOffset;
    if (windowHeight >= counterDiv.current?.offsetHeight) {
      setShowCounter(true);
    }
    window.addEventListener('scroll', () => {
      windowHeight = window.pageYOffset;
      if (windowHeight >= counterDiv.current?.offsetHeight) {
        setShowCounter(true);
      }
    });
  }, []);

  return (
    <div className={`relative ${theme === 'dark' ? 'bg-[#29347a]' : 'bg-brand'} `}>
      {/* Illustrations */}
      <div className="absolute top-0 left-0 hidden h-10 w-40 rotate-180 sm:block">
        <Image src={assets.dottedIllustration2} alt="dotted_illus" layout="fill" />
      </div>
      <div className="absolute bottom-0 right-0 hidden h-10 w-40 sm:block">
        <Image src={assets.dottedIllustration2} alt="dotted_illus" layout="fill" />
      </div>
      <div className="absolute bottom-0 left-0 hidden h-28 w-28 sm:block">
        <Images src={assets.circles_illus} width={20} height={20} alt="" layout="responsive" />
      </div>
      <div className="absolute top-0 right-0 hidden h-28 w-28 rotate-180 sm:block">
        <Images src={assets.circles_illus} width={20} height={20} alt="" layout="responsive" />
      </div>

      <div
        className={`relative mx-auto grid max-w-maxScreen grid-cols-2 gap-y-16 overflow-hidden py-16 px-10 font-bold ${
          theme === 'dark' ? 'text-[#e8e6e3]' : 'text-[#fff]'
        } sm:grid-cols-4 md:gap-0`}
        ref={counterDiv}
      >
        {/*----- All Counters ------ */}
        {showCounter ? (
          <>
            {socialMediaCount.map((element, i) => {
              return (
                <div
                  className={`flex flex-col items-center gap-y-4 ${
                    socialMediaCount.length - 1 === i ? `` : `border-r-grey50 sm:border-r`
                  }  `}
                  key={i}
                >
                  <div className="text-4xl md:text-5xl">
                    <CountUp start={0} end={element.SocialMediaCount} />
                    {element.PrefixAfterCount}
                  </div>
                  <div className="text-center font-medium">
                    {element.BottomText.split(' ')[0]} <br />{' '}
                    <Link href={element.SocialMediaLink}>
                      <a target="_blank" rel="noopener noreferrer" className="underline">
                        {element.BottomText.split(' ').slice(1).join(' ')}
                      </a>
                    </Link>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Stats;
