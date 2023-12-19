const express = require('express');
const router = express.Router();
const Item = require('../Modules/schema');
const {getdatabyid, getdata} = require('../Controllers/dashboard');

//Dashboard data
router.get('/dashboard/items',getdata)
router.get('/dashboard/item',getdatabyid)


module.exports = router