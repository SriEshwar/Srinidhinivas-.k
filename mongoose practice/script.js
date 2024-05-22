const mongoose = require('mongoose')
const user = require("./user")

main().catch(err => console.log(err.message));
async function main(){
    await mongoose.connect("mongodb://localhost/testdb");

    // const user1 = await user.create({
    //     name:"nivas",
    //     age:22,
    //     email : "Abc@gmail.com" ,
    //     hobbies : ["cooking", "reading"],
    //     address : {
    //         street : "Meer ghouse colony",
    //         city : "udumalai"
    //     }

    // })


    const details = await user.findOne({name:"sri"})
    // details.greet()
     details.save()
     console.log(details)

}

