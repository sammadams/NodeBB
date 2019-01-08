'use strict';

var async = require('async');
var nconf = require('nconf');

var categories = require('../categories');
var meta = require('../meta');
var helpers = require('./helpers');

var categoriesController = module.exports;

categoriesController.list = function (req, res, next) {
	res.locals.metaTags = [{
		name: 'title',
		content: String(meta.config.title || 'NodeBB'),
	}, {
		property: 'og:title',
		content: '[[pages:categories]]',
	}, {
		property: 'og:type',
		content: 'website',
	}];

	var data = {};
	res.render('categories', data);
};
