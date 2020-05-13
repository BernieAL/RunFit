const { Router } = require('express');

const userEntry = require('../models/user') //fix with correct MODEL

const router = Router();

/* http://localhost:1337/myaccount */
router.get('/',(req,res,next) => {
	res.send('this is myaccount router responding')
})


/* http://localhost:1337/myaccount */
router.post('/',(req,res,next)=>{
	console.log(req.body)
})


/*http://localhost:1337/myaccount/signup*/
router.post('/signup', async (req,res) => {
	
	const user = new userEntry(req.body)
	try{
		await user.save();
		res.status(200).send(user)
	} catch (e){
		res.status(400).send(e)
	}
})

/*http://localhost:1337/myaccount/login*/
router.get('/login',(req,res) =>{

})



module.exports = router;