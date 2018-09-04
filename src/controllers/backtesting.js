'use strict';


var async = require('async');
var nconf = require('nconf');

var db = require('../database');
var privileges = require('../privileges');
var user = require('../user');
var categories = require('../categories');
var meta = require('../meta');
var pagination = require('../pagination');
var helpers = require('./helpers');
var utils = require('../utils');
var translator = require('../translator');
var analytics = require('../analytics');

var backtestingController = module.exports;

backtestingController.get = function (req, res, callback) {

	var data = {}
	data.backtestingData =[
			["", "Tesla", "Volvo", "Toyota", "Honda"],
			["2017", 10, 11, 12, 13],
			["2018", 20, 11, 14, 13],
			["2019", 30, 15, 12, 13]
	];

	res.render('backtesting', data);
};
