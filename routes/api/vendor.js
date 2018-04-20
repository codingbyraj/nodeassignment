const express = require('express');
const route = express.Router();
const Vendor = require('../../database/db').Vendor;

route.get('/addvendor',(req,res)=>{
    Vendor.create({
        name:'Toofan'
    })
    .then((vendor)=>{
            res.status(200).send(vendor)
    })
    .catch((err)=>res.status(500).send())
});

route.get('/getvendors',(req,res)=>{
    Vendor.findAll({
        attributes:['id', 'name']
        })
        .then((vendors)=>{
            res.status(200).send(vendors)
        })
        .catch((err)=>{
            res.status(500).send()
        })
});

module.exports = route;