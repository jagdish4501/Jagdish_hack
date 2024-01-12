import AppContext from '../../AppContext';
import { useContext, useState } from 'react';
import { FormControl, Input, InputLabel, MenuItem, Select } from '@mui/material';
import ReCAPTCHA from 'react-google-recaptcha';
import MyButton from '../common/MyButton';
import { TbSend } from 'react-icons/tb';
import issueData from '../../data/issueData';
import { toast } from 'react-hot-toast';

export default function RaiseIssueForm({ handleOpen, setTicketId }) {
  const { theme } = useContext(AppContext);

  const [inputFields, setInputFields] = useState({
    name: '',
    email: '',
    phoneNo: '',
    subject: '',
    message: '',
  });
  const [verified, setVerified] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [buttonText, setButtonText] = useState('Submit');

  const handleChange = (event) => {
    setInputFields((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (verified) {
      setButtonText('Sending...');
      setErrorText('');
      try {
        const res = await fetch('/api/supportApi', {
          method: 'POST',
          body: JSON.stringify(inputFields),
        });
        const data = await res.json();

        setTicketId(data.data);

        if (!data.success) {
          throw new Error('Something went wrong');
        }

        handleOpen();
      } catch (error) {
        // console.log(error);
        toast.error('Something went wrong');
        setButtonText('Submit');
      } finally {
        setInputFields({
          name: '',
          email: '',
          phoneNo: '',
          subject: '',
          message: '',
        });
        if (typeof window !== 'undefined') {
          window.grecaptcha.reset();
        }
        setButtonText('Submit');
        setVerified(false);
        setErrorText('');
      }
    } else {
      setErrorText('Please verify that you are not a robot.');
    }
  };

  const CostomIpClass = {
    fontFamily: 'Rubik',
    color: theme === 'dark' ? 'white' : 'black',
    '& .MuiInput-input': {
      borderBottom: theme === 'dark' ? '2px solid white' : '2px solid #A6A6A6',
    },
  };

  return (
    <div
      className={`px-10 py-12 flex-1 rounded-lg ${
        theme === 'dark' ? 'bg-[#181a1b]' : 'bg-[#fff] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]'
      }`}
    >
      <div className="flex sm:flex-row flex-col justify-between items-center sm:text-4xl text-2xl mb-14">
        <p className={`font-bold text-center ${theme === 'dark' && 'text-[#e8e6e3]'}`}>Raise An Issue</p>
        {/* <div className="text-brand grid items-center"> */}
        {/* <button onClick={() => setOpen(false)}>
            <IoMdClose className={`${theme === 'dark' && 'text-[#e8e6e3]'}`} />
          </button> */}
        {/* </div> */}
      </div>
      <form name="contact-form" onSubmit={handleOnSubmit}>
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
          <FormControl variant="standard" sx={CostomIpClass}>
            <InputLabel htmlFor="topic_id" sx={{ fontFamily: 'Rubik', color: theme === 'dark' ? 'white' : '#777C85' }}>
              Category
            </InputLabel>
            <Select
              id="topic_id"
              name="subject"
              value={inputFields.subject}
              onChange={handleChange}
              required
              sx={{
                '.MuiSvgIcon-root': {
                  fill: theme === 'dark' ? '#fff' : '#777C85',
                },
                color: theme === 'dark' ? '#fff' : '#111',
              }}
              label="Subject"
            >
              {issueData.map((item) => (
                <MenuItem key={item.id} value={item.issueName}>
                  {item.issueName}
                </MenuItem>
              ))}
            </Select>
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
  );
}
