const express = require('express');
const userRouter = require('./routes/userRoutes');
const blogRouter = require('./routes/blogRoute');
const app = express();

app.use(express.json());

app.use('/Users',userRouter)
app.use('/blogs',blogRouter)

module.exports=app;