var mongoose = require('mongoose'),
 Product = require('../models/product')

var getProducts = function(application,callback){
    callback = function(req, res){
        Product.find({},function(err,data){
            if(err) throw err;
            return res.json({message:'Succefully Get the Data',data:data});
        });
    };
    application.get('/api/products', callback)
};

module.exports = { getProducts };
/*
var postProducts = function(req, res) {
    
    // var newProduct = new Product(req.body);

    var newProduct = new Product({

        itemname: "Samsung",
        itemprice: "500"

    });
    
    newProduct.save((err,book) => {
        if(err) {
            res.send(err);
        }
        else { 
            res.json({message: "Product successfully added!", product });
        }
    });
}


var getProduct = function(req, res) {
    Product.findById(req.params.id, (err, product) => {
        if(err) res.send(err);
        
        res.json(product);
    });     
}

module.exports = { getProducts, postProducts, getProduct };
*/
