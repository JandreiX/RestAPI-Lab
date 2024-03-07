const express = require('express');
const app = express();

app.listen(3000, ()=>{
    res.send('List of all Employees')
})

Router.post('/', (req, res, next)=>{
    res.send('Create new Employee')
})

Router.post('/', (req, res, next)=>{
    res.send('Get a single Employee')
})

Router.post('/', (req, res, next)=>{
    res.send('Update an Employee')
})

Router.post('/', (req, res, next)=>{
    res.send('Get all Employee')
})

