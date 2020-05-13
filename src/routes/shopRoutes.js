/* This router will return products from the db to be rendered on the mens and women page */


const { Router } = require('express');

const itemEntry = require('../models/item')

const router = Router();



router.get('/',(req,res) => {
	res.send('this is my shopRoutes router responding')
})

/* Gets all items under mens */
router.get ('/mens', async (req,res) => {
	
	try{
		const entries = await itemEntry.find({category:'mens'});
		res.render('mens')
		
		//res.render('mens', )
	} catch(e) {
		res.json(e)
	}
})
router.get('/womens', async (req,res) => {
	
	try{
		const entries = await itemEntry.find('womens');
		res.json(entries)
	} catch(error) {
		
	}
})
router.get('/sale', (req,res) => {
	
	try{
		const entries =  itemEntry.find('sale');
		res.json(entries)
	} catch(error) {
		
	}
})
//======================
//POST REQS

router.post('/mens', async (req,res) =>{
	const item = new itemEntry(req.body)
	try{
		await item.save()
		res.status(200).send(item)
	} catch(e) {
		res.status(400).send(e)
	}
})

router.post('/womens',async (req,res)=>{
	const item = new itemEntry(req.body)
	try{
		await item.save()
		res.status(200).send(item)
	} catch (e){
		res.status(400).send(e)
	}
})

router.post('/sale', async (req,res) =>{
	const item = new itemEntry(req.body)
	try{
		await item.save()
		res.status(200).send(item)
	} catch(e) {
		res.status(400).send(e)
	}
})

module.exports = router;