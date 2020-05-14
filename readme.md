Read Me for  RunFit Site.

This is a simple ecommerce site that displays products to the users
    and allows login, signup,and checkout functions for completing purchases

Backend HTTP reqeust handler implemented on nodejs
    to ensure server is running, in a termnal, type "node app.js" in the src directory
    This will enable HTTP request routing as well as initiate the connection
        to the database

Database is implemented on MongoDb, is accessed using the unique
    API string provided by MongoDb whcih gives access to the collection
         that stores the product inventory.

Handlebars templating engine is used to render the HTML pages with focus on reusability and no-code retyping.

Pages:
    index
    login
    men
    signup
    women
    sale

Port:
    Port used is 1337


Routes:

//routes

app.get('/',(req,res)=>{
	res.render('index', {title: "RunFit"})
})
app.get('/home',(req,res)=>{
	res.render('index', {title: "RunFit"})
})
app.get('/mens',(req,res) =>{
	res.render('mens')
})
app.get('/mens/items',async (req,res) => {
	try{
		const entries = await itemEntry.find({category:'mens'});
		res.send(entries)
		//res.render('mens', )
	} catch(e) {
		res.json(e)
	}
})
app.get('/womens',(req,res) =>{
	res.render('womens')
})
app.get('/womens/items',async (req,res) => {
	try{
		const entries = await itemEntry.find({category:'womens'});
		res.send(entries)
	} catch(e) {
		res.json(e)
	}
})

app.get('/sale',(req,res) =>{
	res.render('sale')
})
app.get('/sale/items',async (req,res) => {
	try{
		const entries = await itemEntry.find({category:'sale'});
		res.send(entries)
	} catch(e) {
		res.json(e)
	}
})

app.get('/login',(req,res) =>{
	res.render('login')
})

app.get('/signup',(req,res) =>{
	res.render('signup')
})

app.post('/signup', async (req,res) =>{
	const user = new userEntry(req.body)
	try{
		await item.save()
		res.status(200).send(user)
	} catch(e) {
		res.status(400).send(e)
	}
})

app.post('/mens', async (req,res) =>{
	const item = new itemEntry(req.body)
	try{
		await item.save()
		res.status(200).send(item)
	} catch(e) {
		res.status(400).send(e)
	}
})

app.post('/womens',async (req,res)=>{
	const item = new itemEntry(req.body)
	try{
		await item.save()
		res.status(200).send(item)
	} catch (e){
		res.status(400).send(e)
	}
})

app.post('/sale', async (req,res) =>{
	const item = new itemEntry(req.body)
	try{
		await item.save()
		res.status(200).send(item)
	} catch(e) {
		res.status(400).send(e)
	}
})

