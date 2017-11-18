const yelp = require('yelp-fusion');
const clientId= 'LinjPlK3GuE8B-fFUBpjOA';
const clientSecret= 'sWZvSF14sTKzkCedorTmjhEy5yrOlPMlhpizOvcTBHeMmVN4MXun4TmaP4OcKI0j';

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.static('build'));

app.get('/api/yelp/latitude/:latitude/longitude/:longitude', (req, res) => {
  yelp.accessToken(clientId, clientSecret).then(response => {
    const client = yelp.client(response.jsonBody.access_token);
    client.search({
      term:'sports bar',
      latitude: req.params.latitude,
      longitude: req.params.longitude,
      limit: 10,
      radius: 2000
    }).then(response => {
      res.send(response.jsonBody.businesses);
    });
  }).catch(e => {
    console.log(e);
  });
});

// app.use(express.static('src'));
// app.use(express.static('public'));

const PORT = process.env.PORT || 4080; 

app.listen(PORT, function () {
  console.log(`CORS-enabled web server listening on http://localhost:${PORT}`)
});