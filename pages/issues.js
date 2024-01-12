import { useContext, useState } from 'react';
import AppContext from '../AppContext';
import Faq from '../components/Course/CourseOverview/Faq';
import RaiseIssueForm from '../components/Issues/RaiseIssueForm';
import { Box, Modal, Typography } from '@mui/material';
import lottieJson from '../public/confirmation.json';
import Lottie from 'react-lottie-player';

export default function IssuesPage({ issuesData }) {
  // Accordian states
  const [active, setActive] = useState(null);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [ticketId, setTicketId] = useState(null);

  const handleToggle = (index) => {
    if (active === index) {
      setActive(null);
    } else {
      setActive(index);
    }
  };

  const { theme } = useContext(AppContext);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    boxShadow: 24,
    p: 4,
    borderRadius: '10px',
  };

  return (
    <>
      <div className="bg-white py-20 relative">
        <div className="mx-auto w-[95%] max-w-[600px] xl:max-w-maxScreen flex flex-col xl:flex-row items-center xl:items-start justify-center gap-24 relative">
          <div className="flex-1">
            <div className="mb-10 md:mb-12">
              <h2
                className={`section_heading text-center md:text-start ${
                  theme === 'dark' ? 'text-[#e8e6e3]' : 'text-headText'
                } font-rubik md:mx-0 md:max-w-none`}
              >
                Frequently Faced <span className={`${theme === 'dark' ? 'text-[#6e96cf]' : 'text-brand'}`}>Issues</span>
              </h2>
            </div>
            <div className="mx-auto flex flex-col">
              {issuesData?.map((item, i) => {
                return <Faq Faq_data={item} key={i} active={active} handleToggle={handleToggle} />;
              })}
            </div>
          </div>
          <RaiseIssueForm handleOpen={handleOpen} setTicketId={setTicketId} />
        </div>
      </div>
      {open && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{
            zIndex: 9999,
            backdropFilter: 'blur(5px)',
          }}
        >
          <Box sx={{ ...style, backgroundColor: theme === 'dark' ? '#181a1b' : '#fff', outline: '0' }}>
            <Lottie
              loop={false}
              animationData={lottieJson}
              play
              style={{ width: 150, height: 150, marginLeft: 'auto', marginRight: 'auto', marginBottom: '30px' }}
            />
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              className="text-center"
              sx={{
                fontFamily: 'Rubik',
                color: theme === 'dark' ? 'white' : '#777C85',
              }}
            >
              We have received your Issue!
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2, textAlign: 'center', fontFamily: 'Rubik', color: theme === 'dark' ? 'white' : '#777C85' }}
            >
              Your ticket number is <span className="font-bold">#{ticketId ? ticketId : ''}</span>. An email has been
              sent to you with the ticket number. We will get back to you shortly.
            </Typography>
            <button
              onClick={handleClose}
              className={`focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 
          place-items-center rounded-md border xl:text-lg text-sm ${
            theme === 'dark' ? 'border-[#29347a] text-[#e8e6e3]' : 'border-brand'
          } px-4 py-2 mt-8 mx-auto flex items-center justify-center`}
            >
              Close
            </button>
          </Box>
        </Modal>
      )}
    </>
  );
}

export async function getStaticProps() {
  const issuesRes = await fetch(`${process.env.baseUrl}/issues-page?populate=*`);
  const issuesData = await issuesRes.json();

  return {
    props: {
      issuesData: issuesData?.data?.attributes?.Issue,
    },
    revalidate: 1,
  };
}
