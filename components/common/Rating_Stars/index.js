import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { TiStarFullOutline, TiStarHalfOutline, TiStarOutline } from 'react-icons/ti';

function Rating_Stars({ Review_Count }) {
  const [starCount, SetStarCount] = useState({
    full: 0,
    half: 0,
    empty: 0,
  });

  useEffect(() => {
    const wholeStars = Math.floor(Review_Count);
    SetStarCount({
      full: wholeStars,
      half: Number.isInteger(Review_Count) ? 0 : 1,
      empty: Number.isInteger(Review_Count) ? 5 - wholeStars : 4 - wholeStars,
    });
  }, []);
  return (
    <div className="flex gap-1 text-yellow500">
      {[...new Array(starCount.full)].map((_, i) => {
        return <TiStarFullOutline key={i} />;
      })}
      {[...new Array(starCount.half)].map((_, i) => {
        return <TiStarHalfOutline key={i} />;
      })}
      {[...new Array(starCount.empty)].map((_, i) => {
        return <TiStarOutline key={i} />;
      })}
    </div>
  );
}

export default Rating_Stars;
