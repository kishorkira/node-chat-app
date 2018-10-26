const path = require('path');
const express = require('express');

const port = process.env.PORT || 3000;
const pulicPath = path.join(__dirname,'../public');

const app = express();
app.use(express.static(pulicPath));

// app.get('/',(req,res)=>{
//     res.render('index.html');
// });


app.listen(port,()=>console.log(`Server is up at port ${port}`));