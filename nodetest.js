var _ = require('underscore')._,
	Backbone = require('backbone');
	
	
var Company = Backbone.Model.extend();	

var Companies = Backbone.Collection.extend({model:Company});

companies = new Companies();
companies.url = "companies";
companies.add([{name: "nodeheaven"}]);
console.log(companies.at(0).url());


