var mongoose = require("mongoose"),
    User = mongoose.model('User');
List = mongoose.model('List')

//import bcrypt and hash passwords

module.exports = {
    register: function (req, res) {
        User.findOne({ email: req.body.email }, (err, user) => {
            if (err) { console.log("Register-Error", err) }
            if (!user) {
                let name = req.body.name.charAt(0).toUpperCase() + req.body.name.slice(1)
                User.create({ name: name, email: req.body.email, password: req.body.password }, (err, newuser) => {
                    if (err) {
                        console.log(" User Creation-Error:", err)
                    } else {
                        req.session.user = newuser;
                        //remove password from return object for security reasons
                        return res.json(newuser)
                    }
                })
            } else {
                return res.json(null)
            }
        })
    },

    login: function (req, res) {
        User.findOne({ email: req.body.email }, (err, user) => {
            if (err) { console.log("Login-Error:", err) }
            if (!user) {
                return res.json(null)
            } else {
                if (user.password == req.body.password) {
                    req.session.user = user;
                    //remove password from return object for security reasons
                    return res.json(user);
                } else {
                    return res.json(null)
                }
            }
        })
    },

    newList: function (req, res) {
        User.findOne({ _id: req.session.user._id }, function (err, user) {
            if (err) { console.log("List-Creation User Error:", err) }
            List.create({ creator: user._id, title: req.body.title }, function (error, list) {
                if (error) { console.log("List Creation-Error:", err) }
                user.lists.push(list._id)
                user.save()
                return res.json(list)
            })
        })
    },

    getLists: function (req,res) {
        List.find({creator:req.session.user._id}).exec(function(err,lists){
            // console.log("controller-user lists:",lists)
            return res.json(lists)
        })
    },

    viewList: function(req,res) {
        List.findOne({_id:req.params.id}).populate('creator').exec(function(err,list){
            console.log("viewList:" + list);
            return res.json(list);
        })
    },
    
    deleteList: function(req,res) {
        console.log("deleteList", req.params.id)
        List.findOneAndDelete({_id:req.params.id},function(err,list){
            if(list){console.log("deleteList:",list)}
            return res.json()
        })
    },

    //new Item

    //delete Item

    authenticate: function (req, res) {
        if (req.session.user == undefined) {
            return res.json(null)
        }
        return res.json(req.session.user)
    },
    logout: function (req, res) {
        req.session.destroy();
        res.redirect('/');
    }
}
