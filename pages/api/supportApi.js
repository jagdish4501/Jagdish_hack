import issueData from '../../data/issueData';

const supportApi = async (req, res) => {
  try {
    const { name, email, phoneNo, subject, message } = req?.body && JSON.parse(req?.body);
    if (!(name?.trim() && email?.trim() && phoneNo?.trim() && subject?.trim() && message?.trim())) {
      return res.status(400).json({ success: false, error: 'Please fill all the field' });
    }

    const topicId = issueData.find((issue) => issue?.issueName === subject)?.topic_id;

    const payload = {
      alert: true,
      autorespond: true,
      source: 'API',
      name: name,
      email: email,
      phone: phoneNo,
      subject: subject,
      topicId: topicId,
      message: message,
    };

    // post request to endpoint
    const res1 = await fetch(process.env.OST_API_URL, {
      method: 'POST',
      headers: {
        'X-API-KEY': process.env.OST_API_KEY,
      },
      body: JSON.stringify(payload),
    });

    const data = await res1.json();

    return res.status(200).json({ success: true, data: data });
  } catch (error) {
    // console.log(error)
    return res.status(500).json({ success: false, error: error?.message || 'Something went wrong' });
  }
};

export default supportApi;
