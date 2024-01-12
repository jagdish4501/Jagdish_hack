import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import React, { useContext, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { HiOutlineMail } from 'react-icons/hi';
import { TbSend } from 'react-icons/tb';
import AppContext from '../../../AppContext';
import MyButton from '../MyButton';

function Contact_Form() {
  const { theme } = useContext(AppContext);
  const [verified, setVerified] = useState(false);
  const [errorText, setErrorText] = useState('');

  const [inputFields, setInputFields] = useState({
    name: '',
    email: '',
    phoneNo: '',
    subject: '',
    message: '',
  });
  const [buttonText, setButtonText] = useState('Submit');

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (verified) {
      setButtonText('Sending...');

      const formInput = {};
      Array.from(e.target.elements).forEach((input) => {
        if (!input.name) return;
        formInput[input.name] = input.value;
      });
      // console.log('contact form data ====>', formInput);

      await fetch('/api/contactFormApi', {
        method: 'POST',
        body: JSON.stringify(formInput),
      })
        .then(async (res) => {
          await fetch(process.env.GOOGLE_SHEET_WEB_APP_URL, {
            method: 'POST',
            body: new FormData(e.target),
          })
            .then(res)
            .catch((err) => console.log(err));

          setButtonText('Submitted');
          setInputFields({
            name: '',
            email: '',
            phoneNo: '',
            subject: '',
            message: '',
          });
          setVerified(false);
          setErrorText('');
          setTimeout(() => {
            location.replace('/');
          }, 3000);
        })
        .catch((err) => {
          // console.log(err);
          setButtonText('Submit');
          setTimeout(() => {
            location.replace('/');
          }, 2000);
        });
    } else setErrorText('Please verify that you are not a robot.');
  };

  const handleChange = (event) => {
    setInputFields((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const CostomIpClass = {
    fontFamily: 'Rubik',
    color: theme === 'dark' ? 'white' : 'black',
    '& .MuiInput-input': {
      borderBottom: theme === 'dark' ? '2px solid white' : '2px solid #A6A6A6',
    },
  };

  return (
    <>
      <div className={`${theme === 'dark' ? 'bg-[#181a1b]' : 'bg-[#fff]'} px-10 py-12`}>
        <div className="flex sm:flex-row flex-col justify-between items-center sm:text-4xl text-2xl mb-14">
          <p className={`font-bold text-center ${theme === 'dark' && 'text-[#e8e6e3]'}`}>Send us a message</p>
          <div className="text-brand">
            <HiOutlineMail />
          </div>
        </div>
        <form name="contact-form" onSubmit={handleOnSubmit} method="post">
          <div className="grid gap-8 md:grid-cols-2 grid-cols-1 mb-8">
            <FormControl variant="standard">
              <InputLabel sx={{ fontFamily: 'Rubik', color: theme === 'dark' ? 'white' : '#777C85' }} htmlFor="name">
                Name
              </InputLabel>
              <Input
                sx={{ ...CostomIpClass }}
                id="name"
                value={inputFields.name}
                name="name"
                type="text"
                required
                onChange={handleChange}
              />
            </FormControl>
            <FormControl variant="standard">
              <InputLabel sx={{ fontFamily: 'Rubik', color: theme === 'dark' ? 'white' : '#777C85' }} htmlFor="email">
                Email Address
              </InputLabel>
              <Input
                sx={{ ...CostomIpClass }}
                id="email"
                value={inputFields.email}
                name="email"
                required
                onChange={handleChange}
              />
            </FormControl>
            <FormControl variant="standard">
              <InputLabel sx={{ fontFamily: 'Rubik', color: theme === 'dark' ? 'white' : '#777C85' }} htmlFor="phoneNo">
                Phone Number
              </InputLabel>
              <Input
                sx={{ ...CostomIpClass }}
                id="phoneNo"
                value={inputFields.phoneNo}
                name="phoneNo"
                type="tel"
                required
                onChange={handleChange}
              />
            </FormControl>
            <FormControl variant="standard">
              <InputLabel sx={{ fontFamily: 'Rubik', color: theme === 'dark' ? 'white' : '#777C85' }} htmlFor="subject">
                Subject
              </InputLabel>
              <Input
                sx={{ ...CostomIpClass }}
                id="subject"
                value={inputFields.subject}
                name="subject"
                required
                type="text"
                onChange={handleChange}
              />
            </FormControl>
          </div>
          <div className="grid">
            <FormControl variant="standard">
              <InputLabel sx={{ fontFamily: 'Rubik', color: theme === 'dark' ? 'white' : '#777C85' }} htmlFor="message">
                Message
              </InputLabel>
              <Input
                sx={{ ...CostomIpClass }}
                id="message"
                value={inputFields.message}
                name="message"
                required
                type="text"
                onChange={handleChange}
              />
            </FormControl>
          </div>
          <div className="flex mx-auto flex-col lg:flex-row items-center justify-between mt-8 md:mt-8">
            <div>
              <ReCAPTCHA sitekey="6Ld51bQjAAAAAIlbrh4zi-mIxM93_fAD_UCawU54" onChange={() => setVerified(true)} />
              <span className="text-[#f00] text-[0.85rem] font-extralight">{errorText}</span>
            </div>
            <div className="flex mt-2 lg:mt-0 md:flex-row-reverse md:justify-start justify-center">
              <MyButton
                theme={theme}
                option="solid"
                disabled={buttonText === 'Sending...' ? true : false}
                classes="px-6 h-12 py-2 flex items-center gap-3 xl:text-xl text-lg lg:h-[4rem]"
              >
                {buttonText}
                <TbSend />
              </MyButton>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact_Form;
