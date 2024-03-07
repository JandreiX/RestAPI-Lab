const express = require('express');
const router = express.Router();

router.get((res, req, next)=>{
    res.send('List Products')
})

router.post((res, req, next)=>{
    res
})