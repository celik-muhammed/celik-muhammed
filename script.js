// Get the button, and when the user clicks on it, execute myFunction
document.getElementById("my_msg").onclick = function() {msg()};

function msg(){  
 alert("Hello Javatpoint");  
} 

/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
