const axios = require('axios');

(async () => {
  try {
    const apiUrl = process.env.INPUT_API_URL;
    const apiKey = process.env.INPUT_API_KEY;
    const data = JSON.parse(process.env.INPUT_DATA);

    const response = await axios.post(apiUrl, data, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
    });

    if (response.status === 200) {
      console.log('Data sent successfully');
    } else {
      console.error(`Failed to send data: ${response.statusText}`);
      process.exit(1);
    }
  } catch (error) {
    console.error(`Error sending data: ${error.message}`);
    process.exit(1);
  }
})();
