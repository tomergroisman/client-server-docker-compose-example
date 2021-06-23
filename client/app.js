const axios = require('axios');

setInterval(() =>{
  axios.get(`http://${process.env.HOST}:${process.env.PORT}/health-check`)
  .then(() => {
      console.log('Client sent a GET request to localhost:3000/health-check and sleep for 5 seconds');
    })
    .catch(() =>{
      console.log('Client could not send a GET request to localhost:3000/health-check. Try again in 5 seconds...');
    });
}, 5000);
