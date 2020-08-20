const express = require('express');
const app = express();
const server = require('http').createServer(app);
const PORT = process.env.PORT || 5000;

const cool = require('cool-ascii-faces');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const max_face_length = req.query.max_face_length;
  const maximum_retries = 100;
  for (var i = 0; i < maximum_retries; i++) {
    var face = cool();
    if (face.length <= max_face_length) {
      break;
    }
  }
  if (face.length > max_face_length) {
    face = "OwO";
  }
  res.set({
    'Content-Type': 'text/plain',
    'Content-Length': '123',
    'Access-Control-Allow-Origin': '*',
  })
  res.send(face);
});

server.listen(PORT, () => console.log(`Listening on ${ PORT }`));
