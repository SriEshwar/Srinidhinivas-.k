// normal function 

function add(a,b){
    return a+b;
}

console.log("the added value "+ add(2,2));

// pitting function in a variable

var multiply = function(a,b)
{
    console.log("the multiplied value "+ (a+b));
}
multiply(4,8);

// using array in function

var numbers = [1,2,3,4,5];

 function addvalue(array){
    var sum =0;
    for(let val of array)
    {
         sum+= val;
    }
    console.log("the added value of array " +  sum);
 }
 addvalue(numbers);

 //arrow function

 let volume = (l,b,h) => {
    console.log("volume is " + (l*b*h))
 }

 volume(1,2,3);

 //example 2

 var num = [1,2,3,4,5];

 let addition = (array) => {
    var total =0;
    for(let val of array)
    {
         total+= val;
    }
    console.log("the added value of array " +  total);
 }
 addition(num);

 // example 3...if only one parameter is passed, no brackets are required !

 var circle  = radius => 3.14 * radius * radius
  console.log(circle(2));

  // if we put console.clear no output of the above code will be displayed ....
  //it is used to avoidd confusions when n number of outputs are received 
  console.clear();

  // using spread operator... it is used when number of inputs are un known

   var multiplication = (...array) => {
    var result = 1;
    for(let val of array)
    {
        result*=val;
    }
    console.log(" the multiplied value of array is " + result)
   }
   multiplication(1,2,3,4,5,6,7);
   multiplication(1,2,3);

   var sample = function()
    { console.log(arguments)}

    sample(1,2,3,4,5);

    //call back function

    function greethello(){
        console.log("hello");
    }

    function greethi(){
        console.log("hi");
    }

    function call(function_name){
          function_name();
    }

    call(greethello);
    call( greethi);

    //call back example 2

function welcome(callback){
    console.log("welcome user...");
    callback();
}

function thankyou(){
    console.log("thank you !");
}
function leave(){
    console.log("Leave !");
}
function wait(){
    console.log(" am Waiting !");
}

welcome(wait);
welcome(thankyou);
welcome(leave);

// callback function with parameters
console.clear();

function start(callback,x=3,y=6)
{
    console.log(" function started ! ")
    var a = x+y;
    console.log(a);
    callback();
}

function bye() { console.log("byeeee !"); }

start(bye,2,2);
