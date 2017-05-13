/*
	variable "trivia" object (one for each question?)
	trivia object has "question" and "answer"
	start button that disappears on click and makes first Q appear
	answer choices highlighted on mouse hover
	timer linked to question, 30 sec to answer

	if A correct:
		"correct!"
		pause for 8 sec
		display new question

	if A wrong:
		"wrong!"
		highlight correct answer
		pause 8 sec
		display new question

	if timer reaches 0:
		"time up!"
		highlight correct answer
		pause 8 sec
		display new question

	when all trivia looped through:
		show number correct/incorrect answers
		restart button
*/

var trivia = [{
		question: "This 90s MTV show was hosted by two sock puppets:",
		choices: ["Beavis & Butthead", "Clone High", "Sifl & Olly", "The Brothers Grunt"],
		answer: 2
	},{
		question: "What Texas band had an unlikely Billboard Modern Rock #1 hit in 1996 with their song \"Pepper\"?",
		choices: ["Toadies", "Butthole Surfers", "Tripping Daisy", "Spoon"],
		answer: 1
	},{
		question: "Who didn't appear as themselves in an episode of The Simpsons?",
		choices: ["Ken Griffey, Jr.", "Buzz Aldrin", "Stephen Hawking", "Michael Jackson"],
		answer: 3
	},{
		question: "Question 4?",
		choices: ["m", "n", "o", "p"],
		answer: 0
	},{
		question: "Question 5?",
		choices: ["q", "r", "s", "t"],
		answer: 0
	},{
		question: "Question 6?",
		choices: ["u", "v", "w", "x"],
		answer: 0
}];

var rightAns = 0;
var wrongAns = 0;
var i = -1;
var questionCount = 0;

$("#answerA").attr("data-answer", 0);
$("#answerB").attr("data-answer", 1);
$("#answerC").attr("data-answer", 2);
$("#answerD").attr("data-answer", 3);

function startGame(){
	$("#button").empty();
	$("#correct").empty();
	$("#wrong").empty();



	function showQuestion(){
		var currentQuestion = trivia[i];
		i = (i+1) % trivia.length;
		$("#question").html("<h3>" + trivia[i].question + "</h3>");
		$("#answerA").html("<h3>" + trivia[i].choices[0] + "</h3>");
		$("#answerB").html("<h3>" + trivia[i].choices[1] + "</h3>");
		$("#answerC").html("<h3>" + trivia[i].choices[2] + "</h3>");
		$("#answerD").html("<h3>" + trivia[i].choices[3] + "</h3>");
		questionCount++;
		console.log(questionCount);

		if (questionCount > 6) {
			$("#timer").empty();
			$("#question").empty();
			$("#answerA").empty();
			$("#answerB").empty();
			$("#answerC").empty();
			$("#answerD").empty();
			$("#correct").append("Right Answers: " + rightAns);
			$("#wrong").append("Wrong Answers: " + wrongAns);
			$("#button").append("<button class=\"btn btn-danger\">Restart!</button>");
		}
		
		/*for (var i = 0; i < trivia.length; i++) {
			$("#question").html("<h3>" + trivia[i].question + "</h3>");
			$("#answerA").html("<h3>" + trivia[i].choices[0] + "</h3>");
			$("#answerB").html("<h3>" + trivia[i].choices[1] + "</h3>");
			$("#answerC").html("<h3>" + trivia[i].choices[2] + "</h3>");
			$("#answerD").html("<h3>" + trivia[i].choices[3] + "</h3>");
		};*/

	};

	showQuestion();

	var timeRemaining = 10;
	setTimeout(countDown,1000);

	function countDown(){
		timeRemaining--;
		if(timeRemaining > 0){
	    	setTimeout(countDown,1000);
		}
		
		$("#timer").html("<h2>You have " + timeRemaining + " seconds to answer the question!");

		if (timeRemaining === 0){
			$(trivia.answer).css("background-color", "red");
			$(trivia.answer).css("color", "white");
			showQuestion();
			timeRemaining = 10;
			countDown();
			$("#timer").html("<h2>You have " + timeRemaining + " seconds to answer the question!");
		};
	};

	function click(){
	    var playerClick = ($(this).attr("data-answer"));

		if (playerClick == trivia[i].answer) {
			rightAns++;
			console.log(rightAns);
			//showQuestion();
		}

		if (playerClick != trivia[i].answer) {
			wrongAns++;
			//$(trivia[i].answer).css("background-color", "red");
			//$(trivia[i].answer).css("color", "white");
			console.log(wrongAns);
			//showQuestion();
		}
	};

	$("#answerA").on("click", click);
	$("#answerB").on("click", click);
	$("#answerC").on("click", click);
	$("#answerD").on("click", click);

};


/*//Show the question after start button is clicked.
function createQuestions() {
    timerStart();
    //Get question
    var question = quesAsked[askCount]['question'];
    //assign div element to newDiv
    var newDiv = $('<div>');
    //Add a class to newDIv
    newDiv.addClass('question'); //<--so i can style it in my CSS
    //Add text to question
    newDiv.text(question);
    //Add question to DOM
    $('.trivSection').append(newDiv);
    createAnswers(); //<--your function that loops through your questions
*/
