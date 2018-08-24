var Prime = require('../controllers/PrimaryController.js');
module.exports = function(app){
    //routing
    


	app.all('*', (req,res)=>{
        res.sendFile(path.resolve('./client/dist/index.html'))
    })
}