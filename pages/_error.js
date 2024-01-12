import Head from 'next/head';
import Link from 'next/link';
import { useContext } from 'react';
import AppContext from '../AppContext';
import assets from '../public/assets.json';

const Error = () => {
  const { theme } = useContext(AppContext);

  return (
    <>
      <Head>
        <title>404 - CodeHelp</title>
      </Head>
      <div>
        <div className="h-[60vh] w-[100vw]">
          <div
            className="xl:w-11/12 xl:max-w-[1000px] mx-auto h-full bg-no-repeat bg-center"
            style={{ backgroundImage: 'url(' + assets.ErrorImage + ')' }}
          ></div>
        </div>
        <Link href="/">
          <a
            className={`cursor-pointer rounded-md text-center ${
              theme === 'dark' ? 'bg-[#29347a]' : 'bg-brand'
            } font-rubik xl:text-lg text-sm text-[#fff] xl:max-w-[10%] max-w-[30%] mx-auto py-3 block mb-8`}
          >
            Go to Home
          </a>
        </Link>
      </div>
    </>
  );
};

export default Error;
