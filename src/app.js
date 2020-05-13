const path = require('path')
const express = require('express')
const hbs = require('hbs')
const cors = require('cors');
const morgan = require('morgan')
const helmet = require('helmet')
const itemEntry = require('./models/item')
const mongoose = require('mongoose')
require('./db/mongoose.js') //relative path from index.js



//const cartRouter = require('./routes/cartRoutes');
//const helpRouter = require('./routes/helpRoutes');
//const shopRouter = require('./routes/shopRoutes');
//const accountRoutes = require('./routes/accountRoutes')

//create new express app
const app = express()

app.enable('trust proxy'); // needed for rate limiting by Client IP

//setting paths for static resources (views,paths)
const publicPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')


//configuring express app
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)
app.use(express.static(publicPath))
app.use(morgan('common'));
app.use(helmet());
app.use(cors());

app.use(express.json());

//routes
app.get('/',(req,res)=>{
	res.render('index', {title: "RunFit"})
})
app.get('/home',(req,res)=>{
	res.render('index', {title: "RunFit"})
})
app.get('/mens',async (req,res) => {
	try{
		const entries = await itemEntry.find({category:'mens'});
		res.render('mens')
		//res.render('mens', )
	} catch(e) {
		res.json(e)
	}
})
app.get('/womens',(req,res) =>{
	res.render('womens')
})
app.get('/cart',(req,res) =>{
	res.render('cart')
})
app.get('/help',(req,res) =>{
	res.render('help')
})



/*
app.use('/myaccount',accountRoutes)
app.use('/myaccount/signup',accountRoutes)
app.use('/myaccount/login',accountRoutes)
app.use('/cart',cartRouter)
app.use('/shop',shopRouter)
app.use('/help', helpRouter)
*/

//-------------------

app.listen(1337,()=> {
	console.log('server listening on 1337')
})