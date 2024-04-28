//select a randdom letter from my name
var name = "srinidhinivas";
let random_Number = Math.floor(Math.random() * name.length);
let random_letter = name.charAt(random_Number);
console.log(random_letter);
 
//learning to use template literals
var itemcount = 5;
var amout = 95 ;
console.log( ` "you have ${itemcount} in your cart.
your bill amount is ${amout} "`);

//print the last element when index is unknown
 marks = [11,22,3,44,555];
 console.log(marks[(marks.length)-1]);

 // propoertis of array

  var letters = ['a','b','c','d','e']
  
  letters.push('f');
  console.log(letters);    // adding element in last

  letters.pop();
  console.log(letters);      // removing element in last

  letters.shift();
  console.log(letters);       // removing element in first

  letters.unshift('a');       
  console.log(letters);        // adding element in first

  letters.splice(1,1);         // removing element in miidle from which index to 
  console.log(letters);        //start amd how many elements to be removed
        

  letters = ['a','b','c','d','e']

  letters.splice(1,2);
  console.log(letters);          //removing 2 elements from middle

  letters = ['a','b','c','d','e']

  letters.splice(1,1,"new");     // removing add replacing elements
  console.log(letters);

/// adding two arrays

 let array1 = [1,2,3];
let array2 = [4,5,6];

 let array3 = array1.concat(array2);
 console.log(array3);

 //method 2
 let array4 = [7,8,9];
 let array5 = [...array1,...array4];
 console.log(array5);

 //calculating numbr of words in para
 let para = "lorem akj ahs jhd qwoh qiowhd w ihioq ijwhdiqjpdo opqwjdpoqwj oiwjqod";
 let no_of_words = para.split(" ");
 console.log(no_of_words.length-1);

 //palindrome checker
  
 var string = "was it a car or a cat i saw"
var array = string.split("").filter(char =>char !== ' ');
var reversed_array = array.reverse();
if(array ==  reversed_array )
console.log("Palinddrome !");
else console.log("not a Plaindome !")

// using map function which is similar to foreach

var usdprice = [30,40,50];
var inrprice = usdprice.map(convert)

function convert(val){
   return val*83;
}
console.log(inrprice);

//////////////
console.clear();
//////////////

// using filter function in array

var cost = [22,33,456,44,764,55];
var lessthan100 = cost.filter( value => value<100);
console.log(lessthan100);


