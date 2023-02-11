const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = require('./app');


dotenv.config({path : './config.env'});

mongoose.connect(process.env.DB_LOCAL).then(()=> console.log('database connected succesfully'));

const port = process.env.PORT || 8080;
app.listen(port,()=>{
    console.log(`hello listening fom server ${port}`);
})