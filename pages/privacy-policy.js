import Head from 'next/head';
import { useContext } from 'react';
import ReactMarkdown from 'react-markdown';
import AppContext from '../AppContext';

const PrivacyPolicy = ({ data }) => {
  const { theme } = useContext(AppContext);

  return (
    <>
      <Head>
        <title>Privacy Policy - CodeHelp</title>
      </Head>
      <div className="mx-auto w-[80%] max-w-[1000px] py-12 animate__animated animate__fadeIn animate__fast">
        <h1 className={`mb-12 font-rubik text-4xl font-semibold mt-10 ${theme === 'dark' && 'text-[#e8e6e3]'}`}>
          {data?.attributes?.Heading}
        </h1>
        <div className={`makdownMakeup ${theme === 'dark' && 'text-[#e8e6e3]'}`}>
          <ReactMarkdown className="markdown-content font-rubik">{data?.attributes?.Content}</ReactMarkdown>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;

export async function getStaticProps() {
  const res = await fetch(`${process.env.baseUrl}/privacy-policy-page?populate=*`);
  const { data } = await res.json();

  const discountRes = await fetch(`${process.env.baseUrl}/discount-banner?populate=*`);
  const discountData = await discountRes.json();

  return {
    props: {
      data,
      discount: discountData.data,
    },
    revalidate: 1,
  };
}
