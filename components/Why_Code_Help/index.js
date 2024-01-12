import React, { useContext } from 'react';
import Feature_Card from '../common/Feature_Card';
import assets from '../../public/assets.json';
import AppContext from '../../AppContext';

function Why_Code_Help({ featureCardData }) {
  const { theme } = useContext(AppContext);

  // console.log("Card Data: ", featureCardData);
  return (
    <div className={`${theme === 'dark' ? 'bg-[#1b1d1e]' : 'bg-section_bg'} relative`}>
      <img src={assets.zig_zag} alt="zig-zag" className="absolute top-16 left-0 z-[1]" />
      <div className="mx-auto max-w-maxScreen py-12 px-6 md:px-0 z-[100]">
        {/* Headers */}
        <div className="w-full text-center md:py-14 py-10">
          <p className={`pre_heading ${theme === 'dark' ? 'text-[#6e96cf]' : 'text-brand'}`}>Why Code-help?</p>
          <p
            className={`section_heading ${
              theme === 'dark' ? 'text-[#e8e6e3]' : 'text-headText'
            } mx-auto max-w-xl font-rubik`}
          >
            Making learning easier and more convenient for you.
          </p>
        </div>
        {/* Cards */}
        <div className="mx-auto grid w-fit justify-center gap-x-6 gap-y-16 py-6 text-center lg:grid-cols-2 xl:grid-cols-3">
          {featureCardData.map((item, i) => {
            const aos_style = i == 0 || i == 3 ? 'fade-right' : i == 1 || i == 4 ? 'fade-up' : 'fade-left';
            return <Feature_Card theme={theme} key={i} featureCardData={item} aos_style={aos_style} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Why_Code_Help;
