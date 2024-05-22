const mongoose = require("mongoose")
const addressSchema = new mongoose.Schema(
    {
        street: String,
        city : String,
       
    })

const userSchema = new mongoose.Schema({
    name:String,
age:{
    type :Number,
    min:1,
    max:100,
    validate:{
        validator: (age) => age%2==0,
        message : (props) => `${props.value} is not an even number`
    }
},
    email : { 
        type :String,
        required:true,
        lowercase : true,
        minLength : 11
    },
    createdat : {
        type :Date,
        immutable : true,
        default : Date.now()
    },
    updatedat : {
        type :Date,
        default : Date.now()
    },
    bestFriend : 
    {
        type : mongoose.SchemaTypes.ObjectId,
        ref :"user"
    },
    hobbies :[String],
    address : addressSchema
})

userSchema.methods.greet = function(){
    console.log(`hello ${this.name} welcome to mongoose !`)
}


userSchema.statics.findByName = function(name){
return this.where({name: new RegExp (name,"i")})
}

// middleware

userSchema.pre("save",function(next){
    this.updatedat = Date.now()
    next()
})

module.exports = mongoose.model("user", userSchema)