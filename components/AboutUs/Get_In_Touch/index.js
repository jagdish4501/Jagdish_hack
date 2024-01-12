import React, { useContext } from 'react';
import AppContext from '../../../AppContext';
import Contact_Form from '../../common/Contact_Form';

function Get_In_Touch() {
  const { theme } = useContext(AppContext);

  return (
    <>
      <div className={`${theme === 'dark' ? 'bg-[#1b1d1e]' : 'bg-section_bg'}`}>
        <div className="mx-auto max-w-maxScreen px-paddingXforMob py-16">
          {/* Headings */}
          <div className="pb-16 text-center">
            <p className={`section_heading ${theme === 'dark' ? 'text-[#e8e6e3]' : 'text-headText'}`}>Get in Touch</p>
            <p className={`section_subheading ${theme === 'dark' ? 'text-[#989082]' : 'text-subText'} `}>
              The Ultimate Guide To Ace SDE Interviews.
            </p>
          </div>

          {/* Form */}
          <div>
            <Contact_Form />
          </div>
        </div>
      </div>
    </>
  );
}

export default Get_In_Touch;
