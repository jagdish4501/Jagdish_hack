import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import assets from '../../../public/assets.json';
import Rating_Stars from '../Rating_Stars';

function Review_Card({ theme, name, course_name, description, review_count, user_Image }) {
  // Description
  description = description.length > 300 ? description.slice(0, 300).concat('...') : description;

  return (
    <div
      className={`w-[350px] space-y-4 rounded-xl px-5 py-7 shadow-xl md:w-[456px] md:py-10 ${
        theme === 'dark' ? 'bg-[#181a1b]' : ' bg-[#fff]'
      }`}
    >
      <p
        className={`${
          theme === 'dark' ? 'text-[#989082]' : 'text-subText'
        } min-h-[200px] text-justify  md:min-h-[150px] md:text-start`}
      >
        {description}
      </p>

      <div className="flex md:flex-row flex-col items-center justify-between ">
        <div className="flex md:flex-row flex-col items-center gap-2">
          <div className="h-14 w-14 translate-y-1 rounded-full overflow-hidden border border-white100">
            <Image src={user_Image} width={20} height={20} alt="author img" layout="responsive" objectFit="cover" />
          </div>
          <div className="flex flex-col justify-center md:items-start items-center gap-2 mb-2">
            <span className={`text-sm font-bold ${theme === 'dark' && 'text-[#e8e6e3]'}`}>{name}</span>
            <span className="text-xs text-subText text-center md:text-start">{course_name}</span>
          </div>
        </div>
        <Rating_Stars Review_Count={review_count} />
      </div>
    </div>
  );
}

export default Review_Card;
