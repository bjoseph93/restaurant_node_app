// const axios = require('axios');

// const response =  axios.get('https://api.yelp.com/v3/businesses/search?location="700 S Flower StLos Angeles, CA 90017"&radius=.5')  
//   .catch(error => {
//     console.log(error);
//   });

// const response =  axios.get('https://api.yelp.com/v3/businesses/search?location="700 S Flower StLos Angeles, CA 90017"&radius=.5', { headers: { Authorization: "Bearer E5UumIdMDoTmhR9r_usV2dugaI8CRlCZ8aaUx6KGRG8VZZaC45RzROi23UgZVs3si8uyzZnO2cMvW9OjD9kjDZYSt7aa50dzmYW5tcUSyrX-kXK-hrDp9DELlTp2W3Yx" } })  
//   .catch(error => {
//     console.log(error);
//   });

// 
const https = require('https');
const apiKey = ''
const options = {
  'host': 'api.yelp.com',
  'path': '/v3/businesses/search?location=\'700+S+Flower+St+Los+Angeles,+CA+90017\'&radius=805',
  'headers': {
  	'Authorization': apiKey
  }
};

const req = https.get(options, (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
});

req.on('error', (e) => {
  console.error(e);
});
req.end();
