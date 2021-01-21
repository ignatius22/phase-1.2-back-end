const fetch = require('node-fetch');



exports.getData = ((req, res) => {
  var url = 'https://api.exchangeratesapi.io/latest';

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(url);
      res.send({ data });
    })
    .catch((err) => {
      res.send(err);
    });
});