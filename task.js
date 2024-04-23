
var express=require('express')
var server =express();
var passengerName;

// server.use(airportTerminal);
function getPassengerName(request,response,next){

    passengerName=request.query['passenger'];
    if(passengerName=='nivas')
     next()
else{
    response.send("<h1>Enter Valid Name</h1>");
}
}
function getPassword(request,response,next){
    var password=request.query['password'];
    if(password=='nivas123')
    next()
else{
    response.send("<h1>invalid password , we are not allowing you</h1>")
}
}
function getPhoneNumber(request,response,next){
    var phoneNumber=request.query['phonenumber']
    if(phoneNumber.length>9){
        next();
    }
    else{
        response.send('Invalid phone number')
    }
}

server.get("/targetflight",getPassengerName,getPassword,getPhoneNumber,(request,response)=>{
response.send("<h1> welcome " +passengerName+ " !!!.Have a wonderful journey</h1>")
})

server.get("/viptargetflight",(request,response)=>{
response.send("<h1> welcome " +"VIP"+ " !!!.Have a wonderful journey</h1>")
})

server.listen(5000,()=>{
    console.log("express server is waiting for client connections")
})










// http://localhost:5000/targetflight?passenger=nivas&password=nivas123&phonenumber=1234567890