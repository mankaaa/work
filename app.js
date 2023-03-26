const API_KEY = '2_MQvTng';
const gfycatUrl = 'https://api.gfycat.com/v1/gfycats';

// Define the options for the request
const options = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${API_KEY}`
  }
};

// Make the request using fetch
fetch(gfycatUrl, options)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    // Do something with the data
  })
  .catch(error => {
    console.error('Error:', error);
  });
