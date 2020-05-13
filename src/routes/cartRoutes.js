const { Router } = require('express');

const itemEntry = require('../models/item') //fix with correct MODEL

const router = Router();




router.get('/',(req,res) => {
	res.send('this is my cartRoutes router responding')
})

router.get ('/cart', async (req,res) => {
	try{
		const entries = await itemEntry.find();
		res.json(entries)
	} catch(error) {
	
	}
})

router.post('/cart', async(req,res)=>{
	
})





module.exports = router;