document.querySelector("#factform").fact1.addEventListener("click", factOne);

function factOne(){
	document.querySelector("#display").innerHTML = "<h1>Hot water will turn into ice faster than cold water. </h1><img src='https://images.pexels.com/photos/1916750/pexels-photo-1916750.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt=''>";
}

document.querySelector("#factform").fact2.addEventListener("click", factTwo);
function factTwo(){
	document.querySelector("#display").innerHTML = "<h1>'I Am' is the shortest complete sentence in the English language.</h1>";
}

document.querySelector("#factform").fact3.addEventListener("click", factThree);

function factThree(){
	document.querySelector("#display").innerHTML = "<h1>The strongest muscle in the body is the tongue.</h1>";
}

document.querySelector("#factform").fact4.addEventListener("click", factFour);

function factFour(){
	document.querySelector("#display").innerHTML = "<h1>TYPEWRITER is the longest word that can be made using the letters only on one row of the keyboard.</h1>";
}

document.querySelector("#factform").fact5.addEventListener("click", factFive);

function factFive(){
	document.querySelector("#display").innerHTML = "<h1>The Guinness Book of Records holds the record for being the book most often stolen from Public Libraries.</h1>";
}