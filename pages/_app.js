import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Head from 'next/head';
import Script from 'next/script';
import { useEffect, useState } from 'react';
import AppContext from '../AppContext';
import Footer from '../components/common/Footer';
import Navbar from '../components/common/Navbar';
import LoadingScreen from '../components/LoadingScreen';
import '../styles/accordion.css';
import '../styles/globals.css';
import '../styles/styles.css';
import { Toaster } from 'react-hot-toast';
import IssueButton from '../components/common/IssueButton/IssueButton';

function MyApp({ Component, pageProps }) {
  const fetchTheme = () => {
    if (typeof window !== 'undefined') {
      if (localStorage.theme === 'dark') {
        document.documentElement.classList.add('dark');
        return 'dark';
      } else if (!('theme' in localStorage)) {
        localStorage.theme = 'light';
        return 'light';
        // document.documentElement.classList.remove('dark');
      } else {
        document.documentElement.classList.remove('dark');
        return 'light';
      }
    }
  };

  const [bannerOpen, setBannerOpen] = useState(true);
  const [theme, setTheme] = useState();
  const { metaData } = pageProps;

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  // Loading screen
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (loading) document.body.style.overflow = 'hidden';
      else document.body.style.overflow = 'unset';
    }
  }, [loading]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setTheme(fetchTheme());
    }
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtm.js?id=GTM-5NHFSJ5`} />
      {metaData ? (
        <>
          <Head>
            {/* <-- Primary Meta Tags --> */}
            <title>{metaData?.MetaTitle}</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="title" content={metaData?.MetaTitle} />
            <meta name="description" content={metaData?.MetaDescription} />
            <meta name="keywords" content={metaData?.MetaKeyword} />
            <meta name="author" content={metaData?.MetaAuthor} />
            <meta name="copyright" content={metaData?.MetaCopyright} />
            <meta name="robots" content="index, follow" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            {/* <-- Open Graph / Facebook --> */}
            <meta property="og:type" content={metaData?.OgMetaType} />
            <meta property="og:url" content={metaData?.OgMetaURL} />
            <meta property="og:title" content={metaData?.OgMetaTitle} />
            <meta property="og:description" content={metaData?.OgMetaDescription} />
            <meta property="og:image" content={metaData?.OgMetaImage?.data?.attributes?.url} />

            {/* <-- Twitter --> */}
            <meta property="twitter:card" content={metaData?.TwitterMetaCard} />
            <meta property="twitter:url" content={metaData?.TwitterMetaURL} />
            <meta property="twitter:title" content={metaData?.TwitterMetaTitle} />
            <meta property="twitter:description" content={metaData?.TwitterMetaDescription} />
            <meta property="twitter:image" content={metaData?.TwitterMetaImage?.data?.attributes?.url} />
          </Head>
        </>
      ) : (
        <Head>
          <title>CodeHelp</title>
        </Head>
      )}
      <AppContext.Provider value={{ bannerOpen, setBannerOpen, theme, setTheme }}>
        <div className={`overflow-hidden animate-opacityanim ${theme === 'dark' ? 'bg-[#131516]' : 'bg-[#fff]'}`}>
          {loading ? (
            <LoadingScreen theme={theme} loading={loading} />
          ) : (
            <>
              <Navbar discount={pageProps.discount} />
              <div className={bannerOpen ? 'mt-[205px] lg:mt-[156px]' : 'mt-[85px]'}>
                <Component {...pageProps} />
              </div>
              <IssueButton />
              <Footer />
            </>
          )}
        </div>
      </AppContext.Provider>
      <Toaster />
    </>
  );
}

export default MyApp;
