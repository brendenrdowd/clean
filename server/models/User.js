let mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    UserSchema = new Schema({
        name: {type:String,required:true},
        email: {type:String,required:true},
        password: {type:String,required:true},
        lists:[{type: Schema.Types.ObjectId, ref: "List"}]
    },{usePushEach:true})
mongoose.model('User', UserSchema);