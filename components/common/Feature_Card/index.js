import React from 'react';
import Image from 'next/image';
import assets from '../../../public/assets.json';

function Feature_Card({ theme, featureCardData, aos_style }) {
  return (
    <>
      <div data-aos={aos_style} className="z-[200]">
        <div
          style={{ borderBottomColor: featureCardData.HEXValue + '63' }}
          className={`${
            theme === 'dark' ? 'bg-[#181a1b]' : 'bg-[#fff]'
          } flex min-h-[330px] max-w-[380px] flex-col items-center gap-y-4 px-4 py-12 rounded-md border-b-[6px] shadow-lg z-20 hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105`}
        >
          <div
            className="grid place-content-center rounded-full p-4"
            style={{ backgroundColor: featureCardData.HEXValue + '63' }}
          >
            <div
              className=""
              dangerouslySetInnerHTML={{
                __html:
                  featureCardData.CardIconSVG !== null
                    ? featureCardData.CardIconSVG
                    : `<svg width="32" height="30" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.1784 0.532847C13.5056 0.713151 13.2095 0.884868 12.7161 1.3485C11.9267 2.10406 11.7383 2.71366 11.7383 4.52527C11.7383 6.25962 11.9177 6.89497 12.6085 7.62477C13.3531 8.41467 14.1335 8.64648 16.0443 8.64648C17.9731 8.64648 18.7715 8.39749 19.4982 7.59901C20.1889 6.82628 20.3504 6.25103 20.3504 4.52527C20.3504 2.67931 20.162 2.08689 19.3098 1.29699C18.5473 0.584363 18.1256 0.464161 16.2238 0.429817C15.0486 0.412645 14.5372 0.438403 14.1784 0.532847ZM17.6591 2.59345C18.1256 2.82527 18.1974 3.08285 18.1974 4.52527C18.1974 6.52578 18.1346 6.58588 16.0443 6.58588C13.9541 6.58588 13.8913 6.52578 13.8913 4.52527C13.8913 2.52477 13.9451 2.47325 16.0264 2.46467C17.085 2.46467 17.4618 2.49042 17.6591 2.59345Z" fill="${featureCardData.HEXValue}"/><path d="M15.5957 10.8535C15.0844 11.1025 14.9677 11.4373 14.9677 12.6995V13.7984H11.1102C6.43635 13.7984 6.23899 13.8242 5.27909 14.6399C4.49862 15.2924 4.15772 16.254 4.21155 17.5591C4.2564 18.3747 4.42685 18.6666 4.97408 18.8555C5.28806 18.9585 5.35983 18.9585 5.68279 18.8126C6.19413 18.5808 6.35561 18.2287 6.35561 17.3358C6.35561 16.8636 6.40046 16.5373 6.49017 16.3742C6.76827 15.8591 6.77725 15.8591 11.0654 15.8591H14.9677V16.9495C14.9677 18.2459 15.0754 18.555 15.6316 18.8126C15.9546 18.9585 16.0174 18.9671 16.3403 18.8555C16.9772 18.6409 17.0759 18.4262 17.1028 17.0525L17.1387 15.8591H21.0321C25.3113 15.8591 25.3203 15.8591 25.5984 16.3742C25.697 16.5631 25.7329 16.9237 25.7329 17.851C25.7329 19.2934 25.8316 19.5767 26.3968 19.8429C26.7197 19.9889 26.7825 19.9974 27.1055 19.8858C27.7514 19.6712 27.8411 19.4565 27.868 18.0656C27.9129 16.1939 27.7245 15.5242 26.8991 14.7429C25.9572 13.8328 25.7329 13.7984 20.9783 13.7984H17.1208V12.7252C17.1208 11.9868 17.0759 11.5575 16.9952 11.3515C16.7619 10.8192 16.134 10.5959 15.5957 10.8535Z" fill="${featureCardData.HEXValue}"/><path d="M3.43152 21.1307C2.24735 21.4054 1.33231 22.3155 1.07215 23.4832C0.93759 24.11 0.946561 26.265 1.09907 26.8575C1.38614 28.0337 2.31912 28.9095 3.55712 29.1585C4.212 29.2873 6.46371 29.2787 7.08271 29.1327C8.31173 28.858 9.22677 27.965 9.48693 26.7802C9.61252 26.1963 9.61252 24.0671 9.48693 23.4832C9.22677 22.2984 8.31173 21.4054 7.08271 21.1307C6.44577 20.9847 4.05949 20.9847 3.43152 21.1307ZM6.89432 23.1999C7.36081 23.4317 7.43258 23.6893 7.43258 25.1317C7.43258 27.1322 7.36978 27.1923 5.27954 27.1923C3.18931 27.1923 3.12651 27.1322 3.12651 25.1317C3.12651 23.1312 3.18033 23.0797 5.2616 23.0711C6.32018 23.0711 6.69696 23.0969 6.89432 23.1999Z" fill="${featureCardData.HEXValue}"/><path d="M14.1963 21.1307C13.5953 21.2681 13.0122 21.6029 12.6085 22.0322C11.9177 22.762 11.7383 23.3974 11.7383 25.1317C11.7383 26.9433 11.9267 27.5529 12.7251 28.3085C13.5235 29.0726 14.1515 29.2529 16.0713 29.2529C17.9731 29.2529 18.7715 29.0039 19.4982 28.2055C20.1889 27.4327 20.3504 26.8575 20.3504 25.1317C20.3504 23.406 20.1889 22.8307 19.4982 22.058C19.0855 21.6029 18.5024 21.2767 17.8475 21.1307C17.2106 20.9847 14.8243 20.9847 14.1963 21.1307ZM17.6591 23.1999C18.1256 23.4317 18.1974 23.6893 18.1974 25.1317C18.1974 27.1322 18.1346 27.1923 16.0443 27.1923C14.5372 27.1923 14.2681 27.1236 14.0259 26.6772C13.9272 26.4883 13.8913 26.1191 13.8913 25.1317C13.8913 23.1312 13.9451 23.0797 16.0264 23.0711C17.085 23.0711 17.4618 23.0969 17.6591 23.1999Z" fill="${featureCardData.HEXValue}"/><path d="M24.9708 21.1307C23.7866 21.414 22.9074 22.264 22.6293 23.406C22.4768 23.9984 22.4679 26.1534 22.6024 26.7802C22.746 27.4156 22.9882 27.8363 23.4906 28.3085C24.289 29.0726 24.9169 29.2529 26.8367 29.2529C28.7386 29.2529 29.537 29.0039 30.2636 28.2055C30.9544 27.4327 31.1159 26.8575 31.1159 25.1317C31.1159 23.406 30.9544 22.8307 30.2636 22.058C29.851 21.6029 29.2679 21.2767 28.613 21.1307C27.976 20.9847 25.5898 20.9847 24.9708 21.1307ZM28.4246 23.1999C28.8911 23.4317 28.9629 23.6893 28.9629 25.1317C28.9629 27.1322 28.9001 27.1923 26.8098 27.1923C24.7196 27.1923 24.6568 27.1322 24.6568 25.1317C24.6568 23.1312 24.7106 23.0797 26.7919 23.0711C27.8504 23.0711 28.2272 23.0969 28.4246 23.1999Z" fill="${featureCardData.HEXValue}"/></svg>`,
              }}
            ></div>
          </div>
          <p className={`text-lg font-bold ${theme === 'dark' && 'text-[#e8e6e3]'}`}>{featureCardData.CardHeading}</p>
          <p className={`max-w-[80%] font-rubik text-base ${theme === 'dark' ? 'text-[#989082]' : 'text-subText'}`}>
            {featureCardData.CardDescription}
          </p>
        </div>
      </div>
    </>
  );
}

export default Feature_Card;