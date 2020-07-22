console.log("demarrage addon");


function myFunction() {
	console.log(document.getElementsByTagName("input")[0].checked);
} 


document.addEventListener("click", myFunction);