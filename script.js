console.log("demarrage addon");
console.log(document.getElementsById("montrucspecial"));


function myFunction() {
	console.log(document.getElementsByTagName("input")[0].checked);
} 


document.addEventListener("click", myFunction);
