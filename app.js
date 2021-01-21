const express = require('express')
const app = express()
const dataRoute = require('./route')




app.use('/api', dataRoute);



const port = 5000; 
   app.listen(port, () => {
     console.log('server runing on port', port);
   });
