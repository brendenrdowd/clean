const mongoose = require("mongoose"),
    User = mongoose.model('User'),
    List = mongoose.model('List'),
    Item = mongoose.model('Item');

const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
    register: function (req, res) {
        User.findOne({ email: req.body.email }, (err, user) => {
            if (err) { console.log("Register-Error", err) }
            if (!user) {
                let name = req.body.name.charAt(0).toUpperCase() + req.body.name.slice(1);
                bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
                    User.create({ name: name, email: req.body.email, password: hash }, (err, newuser) => {
                        if (err) {
                            console.log(" User Creation-Error:", err)
                        } else {
                            req.session.user = {
                                _id: newuser._id,
                                name: newuser.name,
                                lists: newuser.lists
                            };
                            return res.json(req.session.user)
                        }
                    })
                });
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
                bcrypt.compare(req.body.password, user.password, function (err, result) {
                    if (result) {
                        req.session.user = {
                            _id: user._id,
                            name: user.name,
                            lists: user.lists
                        };
                        return res.json(req.session.user)
                    } else {
                        return res.json(null)
                    }
                });
            }
        })
    },

    newList: function (req, res) {
        User.findOne({ _id: req.session.user._id }, (err, user) => {
            if (err) { console.log("List-Creation User Error:", err) }
            List.create({ creator: user._id, title: req.body.title }, (error, list) => {
                if (error) { console.log("List Creation-Error:", err) }
                user.lists.push(list._id)
                user.save()
                return res.json(list)
            })
        })
    },

    getLists: function (req, res) {
        List.find({ creator: req.session.user._id }).exec((err, lists) => {
            return res.json(lists)
        })
    },

    viewList: function (req, res) {
        List.findOne({ _id: req.params.id }).populate('items').exec((err, list) => {
            return res.json(list);
        })
    },

    deleteList: function (req, res) {
        List.findById(req.params.id).populate('items').exec((err, list) => {
            for (let item of list.items) {
                Item.findOneAndDelete({ _id: item._id }, (error, i) => {
                    if (err) { console.log("Loop Error:", error) }
                })
            }
        });
        List.findOneAndDelete({ _id: req.params.id }, (err, list) => {
            if (list) { console.log("deleteList:", list) }
            return res.json()
        });
    },

    newItem: function (req, res) {
        List.findOne({ _id: req.body._list }).exec((err, list) => {
            if (err) { console.log("Item-List-Error:", err) }
            Item.create({ title: req.body.title, _list: list._id, checked: false, creator: req.session.user._id }, (error, item) => {
                if (error) { console.log("Item-creation Error:", error) }
                list.items.push(item);
                list.save();
                return res.json(item);
            })
        })
    },

    deleteItem: function (req, res) {
        Item.findOneAndDelete({ _id: req.params.id }, (err, item) => {
            if (item) { console.log("deleteItem:", item) }
            return res.json()
        })
    },

    check: function (req, res) {
        Item.findOne({ _id: req.params.id }).exec((err, item) => {
            item.checked = !item.checked;
            item.save();
            return res.json();
        })
    },

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
