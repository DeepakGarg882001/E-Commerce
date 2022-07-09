const express = require("express");
const router= express.Router();

module.exports= router;

//  ===== Product Routes ===== //

require('./product/getProductList');
require("./product/addNewProduct");
require("./product/updateProduct");
require("./product/deletProduct");
require("./product/getSingleProduct");


//  =====     =======  //

        