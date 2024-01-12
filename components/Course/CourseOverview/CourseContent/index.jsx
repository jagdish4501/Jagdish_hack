import React, { useState, useRef } from 'react';
import { useContext } from 'react';
import { AiOutlineDown } from 'react-icons/ai';
import AppContext from '../../../../AppContext';
import { HiOutlineVideoCamera, HiOutlineDocumentText, HiOutlineCode } from 'react-icons/hi';

const AccordionItem = ({ AccData, handleToggle, active }) => {
  const contentEl = useRef();
  const { theme } = useContext(AppContext);
  // const { handleToggle, active, faq } = props;
  // const { header, id, text } = faq;

  return (
    <div className="rc-accordion-card">
      <div className="rc-accordion-header">
        <div
          className={`rc-accordion-toggle p-3 ${active === AccData?.id ? 'active' : ''}`}
          onClick={() => handleToggle(AccData?.id)}
        >
          <h5 className={`rc-accordion-title ${theme == 'dark' ? 'text-brColor' : 'text-brand'}`}>
            {AccData?.SectionName}
          </h5>
          <i className="fa fa-chevron-down rc-accordion-icon">
            <AiOutlineDown />
          </i>
        </div>
      </div>
      <div
        ref={contentEl}
        className={`rc-collapse ${active === AccData?.id ? 'show' : ''}`}
        style={active === AccData?.id ? { height: contentEl.current.scrollHeight } : { height: '0px' }}
      >
        <div className="p-4 flex flex-col gap-5 text-textHead font-semibold">
          {AccData?.CourseDetails?.map((item, i) => {
            return (
              <div className="flex justify-between" key={i}>
                <div className={`flex gap-2 items-center ${theme == 'dark' && 'text-HeroSubText'}`}>
                  <span>
                    {item?.lectureType == 'Video' ? (
                      <HiOutlineVideoCamera />
                    ) : item?.lectureType == 'Document' ? (
                      <HiOutlineDocumentText />
                    ) : item?.lectureType == 'Codesandbox' ? (
                      <HiOutlineCode />
                    ) : (
                      ''
                    )}
                  </span>
                  <p>{item?.LectureTitle}</p>
                </div>
                <p className={`${theme == 'dark' ? 'text-HeroSubText' : 'text-subText'}`}>{item?.LectureDuration}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
