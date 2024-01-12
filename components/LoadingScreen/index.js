import Image from 'next/image';
import React from 'react';
import { DotLoader } from 'react-spinners';
import assets from '/public/assets.json';

function LoadingScreen({ theme, loading }) {
  const { hero_bg_grad, website_logo_flexcol, website_logo_flexcol_dark } = assets;

  return (
    <div
      className={`${!loading && 'opacity-0 hidden -z-[10000000]'} ${
        theme === 'dark' ? 'bg-[#131516]' : 'bg-[#fff]'
      } w-full h-screen grid place-content-center text-3xl font-bold absolute inset-0 z-[10000000]`}
    >
      {/* <DotLoader color="#6674CC" /> */}
      <div className="absolute inset-0 flex w-full justify-end -z-[1000] blur-2xl">
        <Image
          src={hero_bg_grad}
          loading="lazy"
          alt="background-gradient"
          width={787}
          height={806}
          className="animate-wiggle"
        />
      </div>
      <div className="absolute inset-0 flex w-full justify-end -z-[1000] rotate-180 blur-2xl">
        <Image
          src={hero_bg_grad}
          loading="lazy"
          alt="background-gradient"
          width={787}
          height={806}
          className="animate-wiggle"
        />
      </div>
      <div className="relative w-[300px] h-[170px] animate-growreveal ">
        {theme === 'dark' ? (
          <Image
            src={website_logo_flexcol_dark}
            priority
            placeholder="blur"
            blurDataURL={website_logo_flexcol_dark}
            alt="CodeHelp"
            layout="fill"
          />
        ) : (
          <Image
            src={website_logo_flexcol}
            priority
            placeholder="blur"
            blurDataURL={website_logo_flexcol}
            alt="CodeHelp"
            layout="fill"
          />
        )}
      </div>
    </div>
  );
}

export default LoadingScreen;
