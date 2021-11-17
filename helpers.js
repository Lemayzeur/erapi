const fs = require('fs');
const cheerio = require('cheerio');

async function unibankERA() {
	let html = fs.readFileSync("./unibank.html", "utf8");
	const $ = cheerio.load(html); 
	
	let tauxDiv = $('div.taux');

	let date = $(tauxDiv).find('.ld-connexion-span');

	let f = $(tauxDiv).find('tbody tr').last().text();
	var regex = /[+-]?\d+(\.\d+)?/g;
	let x = f.match(regex).map(function(v) { return parseFloat(v); });
	return {rate_buy : x[1], rate_sale : x[2]}
}

async function sogebankERA() {
	let html = fs.readFileSync("./sogebank.html", "utf8");
	const $ = cheerio.load(html); 
	
	let tauxDiv = $('article.category-taux');

	let date = $(tauxDiv).find('span.meta-date.date').text();

	let f = $('table.tg').find('tbody tr:eq(1)').text();
	var regex = /[+-]?\d+(\.\d+)?/g;
	let x = f.match(regex).map(function(v) { return parseFloat(v); });
	return {"Sogebank": {rate_buy : x[2], rate_sale : x[3]}}
}


exports.unibankERA = unibankERA;
exports.sogebankERA = sogebankERA;