let mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    ItemSchema = new Schema({
        title: {type:String,required:true}, //do items need to be a seperate model?
        _list:{type: Schema.Types.ObjectId, ref: "List"},
        checked:Boolean,
        creator:{type: Schema.Types.ObjectId, ref: "User"}
    },{timestamps:true, usePushEach:true})
mongoose.model('Item', ItemSchema);