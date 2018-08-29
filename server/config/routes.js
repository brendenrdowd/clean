const Prime = require('../controllers/PrimaryController.js');
const path = require('path');

module.exports = function(app){
    //log-reg functions
    app.post('/register', (req,res)=>{
        Prime.register(req,res);
    })
    app.post('/login', (req,res)=>{
        Prime.login(req,res);
    })
    app.post('/newList',(req,res)=>{
        Prime.newList(req,res);
    })

    // app.post new list item           

    app.get('/getLists',(req,res)=>{
        Prime.getLists(req,res);
    })

    app.get('/viewList/:id',(req,res)=>{
        Prime.viewList(req,res)
    })
    //should these be posts routes?
    app.get('/deleteList/:id',(req,res)=>{
        console.log("hitting route")
        Prime.deleteList(req,res);
    })

    //app get delete list by id

    //app get delete item by id/index?
    
    //universal functions
    app.get('/authenticate',(req,res)=>{
        Prime.authenticate(req,res);
    })
    app.get('/logout',(req,res)=>{
        Prime.logout(req,res);
    })
	app.all('*', (req,res)=>{
        res.sendFile(path.resolve('./client/dist/client/index.html'))
    })
}