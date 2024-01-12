import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import { BiLinkExternal } from 'react-icons/bi';
import AppContext from '../../AppContext';
import assets from '../../public/assets.json';

function Join_Coding_Fam({ socialLinks }) {
  const { theme } = useContext(AppContext);

  // console.log('Social Links :', socialLinks);
  return (
    <div className="relative w-full font-rubik">
      <div
        className={`absolute top-0 left-0 h-[2px] w-[100vw] translate-x-[60%] bg-grey50 ${
          theme === 'dark' && 'opacity-30'
        }`}
      ></div>
      <img src={assets.dottedIllustration} alt="dotted illustration" className="absolute top-0 -left-44 md:-left-0" />

      <div className="relative mx-auto max-w-maxScreen overflow-hidden">
        {/* Headers */}
        <div className="pt-16" data-aos="fade-up">
          <p className={`section_heading ${theme === 'dark' ? 'text-[#e8e6e3]' : 'text-headText'} text-center`}>
            Join our Coding family
          </p>
          <p className={`section_subheading text-center ${theme === 'dark' ? 'text-[#989082]' : 'text-subText'} `}>
            If you would like to keep up on the latest posts and courses, <br /> come by and connect with us on the
            following links.
          </p>
        </div>

        {/* Social Media Logos */}
        <div className="mx-auto grid w-[90%] grid-cols-2 gap-8 py-28 text-2xl md:w-[60%] md:grid-cols-4">
          {socialLinks.map((item, i) => {
            return (
              <div className="flex flex-col items-center justify-center gap-4" key={i}>
                <div className="h-24 w-24">
                  <Link href={item?.SocilMediLink || '/'}>
                    <a target="_blank">
                      <Image
                        src={item.SocialMediaIcon.data.attributes.url}
                        alt="social media logo"
                        width={50}
                        height={50}
                        layout="responsive"
                        placeholder="blur"
                        blurDataURL={item.SocialMediaIcon.data.attributes.url}
                      />
                    </a>
                  </Link>
                </div>
                <div>
                  <Link href={item?.SocilMediLink || '/'}>
                    <a
                      target="_blank"
                      className={`text-[${item.HexCodeForText}] flex items-center justify-center gap-1`}
                    >
                      <div>
                        <BiLinkExternal size={20} style={{ color: item.HexCodeForText }} />
                      </div>
                      <div style={{ color: item.HexCodeForText }} className="font-semibold">
                        {item.SocialMediaName}
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Join_Coding_Fam;
