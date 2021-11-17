const express = require('express');
// const { JSDOM } = require('jsdom')
// const axios = require('axios');

// const http = require('http');

const helpers = require('./helpers')

const port = 5000;


const app = express();

app.get('/', async (req, res) => {
	try{
		const response = await helpers.sogebankERA()
		res.send(response)
	}catch(err){
		res.send('err' + err)
	}
})

const bankList = new Array(
	{
		'name':'Unibank',
		'website': '',
		'target_url': 'https://www.unibankhaiti.com/nouvelles/',
	},
	{
		'name':'Sogebank',
		'website': '',
		'target_url': 'https://www.sogebank.com/dollars-us/',
	}
)


app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
}); 