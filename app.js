const express = require('express')
const app = express()
const dataRoute = require('./route')




app.use('/api', dataRoute);



const port = process.env.PORT || 3000; 
   app.listen(port, () => {
     console.log('server runing on port', port);
   });
