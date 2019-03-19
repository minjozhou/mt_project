var express = require('express');
var app = express();

app.use(express.static('dist'));

var goods = require("./data/goods.json")
var ratings = require("./data/ratings.json")
var seller = require("./data/seller.json")

app.get('/goods', (req,res) => {
	res.json(goods);
});
app.get('/ratings', (req,res) => {
	res.json(ratings);
});

app.get('/seller', (req,res) => {
	res.json(seller);
});


app.listen(3000)
