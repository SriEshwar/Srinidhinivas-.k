var popoverlay = document.querySelector(".pop-overlay");
var popcontent = document.querySelector(".pop-content");
var addpopButton = document.querySelector(".add-button");

addpopButton.addEventListener("click",function(){
    popcontent.style.display="block";
    popoverlay.style.display="block";
});

var cancelpopButton = document.querySelector("#cancel-pop");
  
cancelpopButton.addEventListener("click" , function(event){
    event.preventDefault();
    popcontent.style.display="none";
    popoverlay.style.display="none";
});


var containerr = document.querySelector(".container");
var booktitle = document.querySelector("#bookname");
var author = document.querySelector("#authorname");
var bookDescription = document.querySelector("#bookdetails");
var addentrybutton = document.querySelector("#add-entry");

addentrybutton.addEventListener("click",function(event){

     event.preventDefault();
     var div = document.createElement("div");
     div.setAttribute("class", "book-container");
     div.innerHTML = `<h2>${booktitle}</h2>
     <h4>${author}</h4>
     <p>${bookDescription}</p>
     <button onclick="deleteBookContainer(event)">Delete</button>`;
      containerr.append(div);

      popcontent.style.display="none";
      popoverlay.style.display="none";
    

})
 
function deleteBookContainer(event)
{
    event.target.parentElement.remove()
}



