//get the modal
var modal = document.getElementById("mymodal");
//get the button that opens the modal
var btn = document.getElementById("myBtn");
//get the span element that closes the modal
var span = document.getElementsByClassName("close")[0];
//when the user clicks on the button, open the modal
btn.onclick = function(){
    modal.style.display = "block";
}

//when the user clicks anywhere outside the modal close it
// window.onclick = function(event){
//     if(event.target == modal){
//         modal.style.display ="none";
//     }
// }

// close modal on click close sign
document.querySelector('.close').addEventListener("click", function() {
	document.querySelector('.modal').style.display = "none";
});

//get the modal
var modal2 = document.getElementById("mymodal2");
//get the button that opens the modal
var btn2 = document.getElementById("myBtn2");
//get the span element that closes the modal
var span = document.getElementsByClassName("close2")[1];
//when the user clicks on the button, open the modal
btn2.onclick = function(){
    modal2.style.display = "block";
}

// when the user clicks anywhere outside the modal close it
window.onclick = function(event){
    if(event.target == modal2){
        modal2.style.display ="none";
    }
}

// close modal on click close sign
document.querySelector('.close2').addEventListener("click", function() {
	document.querySelector('.modal2').style.display = "none";
});