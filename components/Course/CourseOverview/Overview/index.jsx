const Overview = ({ OverviewData }) => {
  return (
    <>
      {/* What you will learn */}
      <div className="mt-16">
        <div className="text-[24px] leading-8 font-medium">What you will learn</div>
        <div className="grid md:grid-cols-2 grid-cols-1  px-5 py-14 gap-4">
          {OverviewData?.WhatYouWillLearn?.map((item, i) => {
            return (
              <div key={i} className="flex items-center gap-4">
                <div className="">
                  <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 6.90742L6.02241 12L17 1" stroke="#6674CC" strokeWidth="2" />
                  </svg>
                </div>
                <div className="text-[18px]">{item?.KeyPoints}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Basic Details */}
      <div className="mt-12">
        <div className="text-[24px] leading-8 font-medium">Basic Details</div>
        <div className="flex flex-col px-5 py-14 gap-4 w-full ">
          {OverviewData?.BasicDetails?.map((item, i) => {
            return (
              <div key={i} className="md:flex grid grid-cols-2 items-center md:justify-start justify-between">
                <div className="w-[40%]">{item.Col1}</div>
                <div className="text-[18px]">{item.Col2}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Overview;
