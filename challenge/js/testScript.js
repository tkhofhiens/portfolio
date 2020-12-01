
import ls from './ls.js';

const scripture = ls.getScriptureList();
console.log(scripture);

// code from https://stackoverflow.com/questions/40092905/randomly-populating-a-quiz-using-javascript-arrays
// List of questions. First mentioned answer is correct one.
var questions = [{
    question: "What color is the sky?",
    answers: ["Blue", "Red", "Pink", "Green"]
}, {
    question: "What color is grass?",
    answers: ["Green", "Yellow", "Purple", "Black"]
}, {
    question: "What color is dirt?",
    answers: ["Brown", "White", "Turqouise", "Gray"]
}];


// create an list of possible answers
function answerArray (questionId){
    var ans = [];
    var id = questionId;
    // console.log('ansarray '+scripture[questionId].Reference);
    for (var count=0;count<4;count++){
        console.log('inside for loop id = '+ id +'; ref = '+ scripture[questionId].Reference);
        ans.push(scripture[questionId].Reference);
    questionId++;
    }
    return ans;
}

// Generic function to return a shuffled array:
function shuffled(arr) {
    arr = arr.slice(); // shallow copy
    for (var i = 0; i < arr.length; i++) {
        var j = Math.floor(Math.random() * (arr.length - i)) + i;
        [arr[i], arr[j]] = [arr[j], arr[i]]; // swap
    }
    return arr;
}

// define variables for some of the HTML elements:
var domQuestion = document.querySelector('#question');
var domAnswers = Array.from(document.querySelectorAll('input[name=answer]'));
var domNext = document.querySelector('#next');

function displayQuestion() {
    console.log(scripture[questionId].Phrase);
    console.log(scripture[questionId].Reference);
    // make array of possible answers:
    // var choices = answerArray(questionId);
    var answers = answerArray(questionId);
    // get a random order for the answers:
    // var answers = shuffled(choices);

    // Display question
    domQuestion.textContent = (questionId+1) + '. ' + 
                              scripture[questionId].Phrase;
    domAnswers.forEach(function (input, i){
        // Set checkbox value and unselect it
        input.value = scripture[i].Reference;
        input.checked = false;
        // Display the answer text
        input.nextElementSibling.textContent = answers[i];
    });

}

// Initialise and display first question
var questionId = 0;
var correctAnswers = 0;
displayQuestion();

// Respond to a click on the Next button 
domNext.addEventListener('click', function () {
    // update correct answer counter:
    var domAnswer = domAnswers.find(input => input.checked);
    if (!domAnswer) return; // nothing was selected
    // update number of correctly answered questions:
    // -----  update -----------------------------------------------------------------
    // scripture.
    // if (domAnswer.value == questions[questionId].answers[0]) correctAnswers++;
    if (domAnswer.value == scripture[questionId].Reference)
    {
       correctAnswers++; 
       console.log("correctAnswers");
       
    } 
    console.log(correctAnswers);
    // next question
    questionId++;
    if (questionId >= questions.length) {
        alert('You have answered ' + correctAnswers + 
              ' of ' + questions.length + ' questions correctly.');
        // restart
        questionId = 0;
        correctAnswers = 0;
    }
    displayQuestion();
});