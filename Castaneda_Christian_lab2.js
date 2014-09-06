alert("JavaScript works!");

// Variables
	var txtBook = "\"Beginning JavaScript\"";
	var internetProbs= "Tech Support";
	var bldg = 1;
	var help = false;

// Part1: Console Logs
	console.log("The other day after class I had to pick up my textbook called " + txtBook + " from the Distribution Center.");
	console.log("It turns out that I also had some internet problems and was told " + internetProbs + " could help me.");
	console.log("Incidently, Tech Support was located by Building " + bldg + ".");
	console.log("It is " + help + " that students can get help from the Tech Support building.");
	
// User inputs
	var internetProbs = prompt("What is the name of the place where people get help with computer issues?", "Tech Support");
	var help = confirm("Can students get help at the " + internetProbs + " located by building " + bldg + "?");
	
// Part2: Console Logs
	console.log("To recap, you thought it was " + help + " that students can help at " + internetProbs + ".");
	console.log("Long story short, I no longer have problems with my internet.\nFor now.");
	


	
	