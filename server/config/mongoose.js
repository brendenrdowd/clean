const mongoose = require("mongoose"),
    path = require("path"),
    fs = require("fs"), //file system, allows us to read or write files
    mp = path.join(__dirname, './../models'); //mp = models path

let database = process.env.MONGODB_URI || 'mongodb://localhost/todolist_db'
mongoose.connect(database);
console.log("connected to database:",database)

// mongoose.connect('mongodb://localhost/todolist_db');

fs.readdirSync(mp).forEach(function (file) {
    if (file.indexOf('.js') >= 0) {
        require(mp + '/' + file)
    }
})
