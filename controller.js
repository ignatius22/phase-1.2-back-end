const fetch = require('node-fetch');


exports.getCurrency = ((req, res) => {

    let { base, currency } = req.query;

  base = typeof base !== undefined ? base.trim().toUpperCase() : '';


	let url = `https://api.exchangeratesapi.io/latest?base=${base}`;
	
  fetch(url)
    .then((res) => res.json())
		.then((data) => {
			
		  currency =
        typeof currency !== undefined ? currency.trim().split(',') : [];
           let rates = {};
           currency.forEach((rate) => {
             totalRate = rate.toUpperCase() || undefined;
             if (rate.length >= 1) {
               rates[totalRate] =
                 data.rates[totalRate] || 'we could not find the following query';
             } else {
               rates[totalRate] = data.rates[totalRate];
             }
           });
         const requestedData = {
           results: {
             base: base,
             date: data.date,
             rates: rates,
           },
         };
         
         return res.send(requestedData).status(200);
      
    })
    .catch((err) => {
      res.send(err);
		});
	 
});



