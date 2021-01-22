const fetch = require('node-fetch');


exports.getCurrency = ((req, res) => {
	var url = 'https://api.exchangeratesapi.io/latest';
	
  fetch(url)
    .then((res) => res.json())
		.then((data) => {
			
		  res.send(data)
    })
    .catch((err) => {
      res.send(err);
		});
	 
});

