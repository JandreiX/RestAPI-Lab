const express = require('express');
const app = express();
const mongoose = require('mongoose');

//jiggerandreigobenza
//TUvkTVtx1ib4XZh8

mongoose.connect('mongodb+srv://jiggerandreigobenza:TUvkTVtx1ib4XZh8@ustp.bpnnrtb.mongodb.net/?retryWrites=true&w=majority&appName=ustp')
.then(() => {
    console.log('MongoDB connected successfuly')
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});

console.log('Connection attempt started...');

const EmployeeRoute =require('./routes/Employee.route')
app.use('/Employee', EmployeeRoute);

const UserRoute = require('./routes/User.route');
app.use('/User', UserRoute);

const ProductRoute = require('./Routes/Products.route');
app.use('/Product', ProductRoute);

//Error ID wrong endpoint
app.use((req, res, next)=>{
    const err = new Error("Not found");
    err.status = 404;
    next(err);
})

//Middleware Express
app.use((req, res, next)=>
    res.setMaxListeners(err.statis || 500))
    res.send({
        error: {
            status: err.status || 500,
            message: err.message
        }
    })

app.listen(3000, ()=>{
    console.log('Listening on port 3000....')
})