const express = require('express')
const app = express()


app.get('/', (req, res) => {
    var url = 'https://api.darksky.net/forecast/<API KEY>/37.8267,-122.4233';

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        res.send({ data });
      })
      .catch((err) => {
        res.send(err);
      });

    
})

const port = 3000; 
app.listen(port,() => {
	console.log('server runing on port', port)
})