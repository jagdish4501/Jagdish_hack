import React from 'react';
import Link from 'next/link';

function Course_Card({ theme, title, currentPrice, actualPrice, discount, course_img, CourseLink, isUpcoming }) {
  // const [discountPrice, setDiscountPrice] = useState(0);

  // useEffect(() => {
  //   setDiscountPrice(Math.floor(main_price - main_price * (discount / 100)));
  // }, []);

  return (
    <>
      {isUpcoming ? (
        <div
          className={`bg-white mx-auto max-w-[90%] rounded-lg border ${
            theme === 'dark' ? 'bg-[#181a1b] border-[#353a3c]' : 'border-grey50 bg-[#fff]'
          } shadow-md md:mx-0 p-5 overflow-hidden transition-all duration-300 hover:shadow-xl max-w-[400px] select-none`}
        >
          <div className="max-h-52 w-full overflow-hidden rounded-lg mb-4">
            <img src={course_img} alt="course_img" className="mx-auto object-bottom" />
          </div>

          <div>
            <div
              className={`${
                theme === 'dark' ? 'text-[#e8e6e3]' : 'text-gray-900'
              } mb-2 font-rubik text-lg font-bold tracking-tight md:text-2xl`}
            >
              {title}
            </div>
            <div className={`h-[2px] w-full bg-grey50 ${theme === 'dark' && 'opacity-10'}`}></div>
            <div className="mt-4 flex gap-3 font-bold justify-center items-center">
              <p className="rounded-md bg-red500 uppercase px-2 py-1 text-sm text-[#fff] font-medium tracking-tight md:text-base">
                Coming Soon
              </p>
            </div>
          </div>
        </div>
      ) : (
        <Link href={CourseLink || '#'}>
          <a>
            <div
              className={`bg-white mx-auto max-w-[90%] rounded-lg border ${
                theme === 'dark' ? 'bg-[#181a1b] border-[#353a3c]' : 'border-grey50 bg-[#fff]'
              } shadow-md md:mx-0 p-5 overflow-hidden transition-all duration-300 hover:shadow-xl max-w-[400px]`}
            >
              <div className="max-h-52 w-full overflow-hidden rounded-lg mb-4">
                <img src={course_img} alt="course_img" className="mx-auto object-bottom" />
              </div>

              <div>
                <div
                  className={`${
                    theme === 'dark' ? 'text-[#e8e6e3]' : 'text-gray-900'
                  } mb-2 font-rubik text-lg font-bold tracking-tight md:text-2xl`}
                >
                  {title}
                </div>
                {/* Prices */}
                {currentPrice && (
                  <>
                    <div className={`h-[2px] w-3/4 bg-grey50 ${theme === 'dark' && 'opacity-10'}`}></div>
                    <div className="mt-4 flex gap-3 font-bold">
                      <p className={`text-base ${theme === 'dark' ? 'text-[#6e96cf]' : 'text-brand'}`}>
                        ₹{actualPrice}
                      </p>
                      <p className="text-base text-subText line-through">₹{currentPrice}</p>
                      <p className="rounded-md bg-grassGreen px-2 py-1 text-sm text-[#fff]">{discount}% off</p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </a>
        </Link>
      )}
    </>
  );
}

export default Course_Card;
