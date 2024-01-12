import React from 'react';
import { useContext } from 'react';
import AppContext from '../../../../AppContext';
import { AiOutlineDown } from 'react-icons/ai';
import { useRef } from 'react';
import ReactMarkdown from 'react-markdown';

function Faq({ Faq_data, active, handleToggle }) {
  const { theme } = useContext(AppContext);
  const contentEl = useRef();
  return (
    <>
      <div className="rc-accordion-card_Faq" id="faq">
        <div className="rc-accordion-header">
          <div
            className={`rc-accordion-toggle_Faq p-3 ${active === Faq_data?.id ? 'active' : ''}`}
            onClick={() => handleToggle(Faq_data?.id)}
          >
            <h5 className={`rc-accordion-title ${theme == 'dark' ? 'text-brColor' : 'text-brand'}`}>
              {Faq_data?.question}
            </h5>
            <i className="fa fa-chevron-down rc-accordion-icon">
              <AiOutlineDown />
            </i>
          </div>
        </div>
        <div
          ref={contentEl}
          className={`rc-collapse ${active === Faq_data?.id ? 'show' : ''}`}
          style={active === Faq_data?.id ? { height: contentEl.current.scrollHeight } : { height: '0px' }}
        >
          <div
            className={`p-4 flex flex-col gap-5  font-semibold ${
              theme == 'dark' ? 'text-HeroSubText' : 'text-textHead'
            }`}
          >
            <div className="faq_mdx">
              <ReactMarkdown>{Faq_data?.answer}</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Faq;
