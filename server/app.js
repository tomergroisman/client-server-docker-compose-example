const express = require('express');

const app = express();
const port = process.env.PORT

app.get('/health-check', (req, res) => {
  console.log(`${req.method} request from ${req.hostname} on ${req.url}. Docker secret key: ${process.env["SECRET_KEY"]}`);
  res.send("I'm healthy!")
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`)
});