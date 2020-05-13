const { Router } = require('express');

const itemEntry = require('../models/item') //fix with correct MODEL

const router = Router();

router.get('/help',(req,res)=>{
	res.render('Help Page')
})



module.exports = router;