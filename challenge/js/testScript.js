
import ls from './ls.js';

const scripture = ls.getScriptureList();
console.log(scripture);

// code from https://stackoverflow.com/questions/40092905/randomly-populating-a-quiz-using-javascript-arrays
let numQuestions = 3;


// create an list of possible answers
function answerArray (choices){
    var ans = [];
    var id = choices;
    // console.log('ansarray '+scripture[choices].Reference);
    for (var count=0;count<4;count++){
        console.log(' answer id = '+ scripture[choices].Id +'; ref = '+ scripture[choices].Reference);
        ans.push(scripture[choices].Reference);
        choices++;
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
    console.log("domAnswer.value "+domAnswer.value)
    if (domAnswer.value == scripture[questionId].Reference)
    {
       correctAnswers++; 
    //    console.log("domAnswer.value "+domAnswer.value)
       console.log("correctAnswer");
       
    } 
    console.log(correctAnswers);
    // next question
    questionId++;
    if (questionId >= numQuestions) {
        alert('You have answered ' + correctAnswers + 
              ' of ' + numQuestions + ' questions correctly.');
        // restart
        questionId = 0;
        correctAnswers = 0;
    }
    displayQuestion();
});