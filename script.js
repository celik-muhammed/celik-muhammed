// Get the button, and when the user clicks on it, execute myFunction
document.getElementById("my_msg").onclick = function() {msg()};

function msg(){  
 alert("Hello Javatpoint");  
} 

/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

let toggle = () => {
   let element = document.getElementById("myth");

   if (element.style.backgroundColor === "lightblue") {
     element.style.backgroundColor = "#222";
     element.style.color = "#fff";
  } else {
     element.style.backgroundColor = "lightblue";
     element.style.color = "#222";
  }
}
