//create an array of questions
//create answers
//Each question has to have an answer
//Type in images
//Type in Timer and Interval
//
  // 2 minutes
//Start Timer
//Stop Timer
//Create If for Stop Timer
function startTimer() {
var seconds = "00"; 
var minutes = 2;

var reset;

var timer =setInterval(function() {
    document.getElementById('count').innerHTML =(minutes + ":" + seconds);
 
    if (parseInt(seconds)===0) {
        seconds = 59;
        minutes = minutes - 1;
        
        

        if (minutes < 0) {
            clearInterval(timer);
            alert("Time's Up, Click Finish To See Your Results")
        }
        
    }
    else {
        seconds = parseInt(seconds)-1;
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
    }
},1000);

}
$("#count").click(function(){
    startTimer();
});

function check() {

var question1 = document.quiz.question1.value;
var question2 = document.quiz.question2.value;
var question3 = document.quiz.question3.value;
var question4 = document.quiz.question4.value;
var question5 = document.quiz.question5.value;
var question6 = document.quiz.question6.value;
var correct = 0;

    if (question1 == "Vibranium") {
        correct++;
    }
    if (question2 == "Upper East Side") {
        correct++;
    }
    if (question3 == "James 'Rhodey' Rhodes") {
        correct++;
    }
    if (question4 == "Peter Richard Parker") {
        correct++;
    }
    if (question5 == "Dr.Octopus") {
        correct++;
    }
    if (question6 == "12") {
        correct++;
    }

var messages = ["Amazing, You know your Marvel", "Good Work", "Pretty Good", "Not bad", "You should know more", "You don't know Marvel"];
var range;
var images = ["Img/Forever.gif", "Img/Power.gif", "Img/Good.gif", "Img/Cool.gif", "Img/Agreed.gif", "Img/Failure.gif"];

    if (correct < 1) {
        range = 5;
    }

    if (correct > 0 && correct < 6) {
        range = 4;
    }

    if (correct > 1 && correct < 6) {
        range = 3;
    }

    if (correct > 2 && correct < 6) {
        range = 2;
    }
    
    if (correct > 4 && correct < 6) {
        range = 1;
    }
    if (correct > 5) {
        range = 0;
    }

document.getElementById("after_submit").style.visibility = "visible";
document.getElementById("message").innerHTML = messages[range];
document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
document.getElementById("image").src = images[range];
}