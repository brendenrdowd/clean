let mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    ListSchema = new Schema({
        title: {type:String,required:true},
        items: [{type: Schema.Types.ObjectId, ref: "Item"}], //do items need to be a seperate model?
        creator:{type: Schema.Types.ObjectId, ref: "User"}
    },{timestamps:true, usePushEach:true})
mongoose.model('List', ListSchema);