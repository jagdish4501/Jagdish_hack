import Head from 'next/head';
import { useContext } from 'react';
import AppContext from '../AppContext';

const Temporarily = () => {
  const { theme } = useContext(AppContext);

  return (
    <>
      <Head>
        <title>Temporarily Closed</title>
      </Head>
      <section>
        <div
          className={`flex flex-col items-center justify-center h-[60vh] ${
            theme === 'dark' ? 'text-white100' : 'text-black100'
          }`}
        >
          <h1 className="text-4xl font-bold text-center">Temporarily Closed</h1>
          <p className="mt-4 text-lg text-center text-gray-500">
            The enrollment for the <b>Web Development Master Course</b> is temporarily closed. We will open the
            enrollments in some time.
            <br />
            Please check back later.
          </p>
        </div>
      </section>
    </>
  );
};

export default Temporarily;
