import ls from './ls.js';

// const quiz = ls.getScriptureList();
const scripture = ls.getScriptureList();

// console.log(quiz);
// console.log(scripture);

let numQuestions = 15;

// create an list of possible answers
function answerArray (choices){
    var ans = [];
    // var id = choices;
    // console.log('ansarray '+scripture[choices].Reference);
    for (var count=0;count<4;count++){
        console.log(' answer id = '+ scripture[choices].Id +'; ref = '+ scripture[choices].Reference);
        ans.push(scripture[choices].Reference);
        choices++;
    }
    return ans;
}

function displayQuestion() {
    // console.log(scripture[questionId].Phrase);
    // console.log(scripture[questionId].Reference);
    // make array of possible answers:
    var answers = answerArray(questionId);
    // get a random order for the answers:
    // var choices = answerArray(questionId);
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

// define variables for some of the HTML elements:
var domQuestion = document.querySelector('#question');
var domAnswers = Array.from(document.querySelectorAll('input[name=answer]'));
var domNext = document.querySelector('#next');

// View Object
const view = {
    score: document.querySelector('#score strong'),
    question: document.querySelector('#question'),
    result: document.querySelector('#result'),
    info: document.querySelector('#info'),
    start: document.querySelector('#start'),
    response: document.querySelector('#response'),
    timer: document.querySelector('#timer strong'),
    render(target, content, attributes) {
        for (const key in attributes) {
            target.setAttribute(key, attributes[key]);
        }
        target.innerHTML = content;
    },
 
    show(element) {
        element.style.display = 'block';
    },
    hide(element) {
        element.style.display = 'none';
    },

    setup() {
        this.show(this.question);
        this.show(this.response);
        this.show(this.result);
        this.hide(this.start);
        this.render(this.score, game.score);
        this.render(this.result, '');
        this.render(this.info, '');
    },
    teardown() {
        this.hide(this.question);
        this.hide(this.response);
        this.show(this.start);
    }
};


// Initialise and display first question
var questionId = 0;
var correctAnswers = 0;

// Respond to a click on the Next button 
domNext.addEventListener('click', function () {
    // update correct answer counter:
    var domAnswer = domAnswers.find(input => input.checked);
    if (!domAnswer) return; // nothing was selected
    // update number of correctly answered questions:
    // -----  update -----------------------------------------------------------------
    var response = domAnswer.value;
    console.log("response "+response);
    const answer = scripture[questionId].Reference;
    console.log("answer "+answer);
    if (response === answer) {
        view.render(view.result, 'Correct!', { 'class': 'correct' });
        this.score++;
        numQuestions++;
        console.log("correctAnswer"); 
        view.render(view.score, this.score);
    } else {
        view.render(view.result, `Wrong! The correct answer was ${answer}`, { 'class': 'wrong' });
    }
    console.log(correctAnswers);
    
    // next question
    questionId++;
    displayQuestion();
});



const game = {
    start(scripture) {
        displayQuestion();
        this.score = 0;
        this.questions = [...scripture];
        view.setup();
        this.secondsRemaining = 30;
        this.timer = setInterval(this.countdown, 1000);
        this.ask();
    },
    
    countdown() {
        game.secondsRemaining--;
        view.render(view.timer, game.secondsRemaining);
        if (game.secondsRemaining < 0) {
            game.gameOver();
        }
    },
    ask(Phrase) {
        if (this.questions.length > 0) {
            this.question = this.questions.pop();
            const question = `${this.question.Phrase}`;
            view.render(view.question, question);
        }
        else {
            this.gameOver();
        }
    },

    check(event) {
        event.preventDefault();

        this.ask();
    },

    gameOver() {
        view.render(view.result, `Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`,{ 'class': 'correct' });
        alert('You have answered ' + correctAnswers + 
                  ' of ' + numQuestions + ' questions correctly.');
            // restart
            questionId = 0;
            numQuestions = 0;
        view.teardown();
        clearInterval(this.timer);
    }
}
   
view.start.addEventListener('click', () => game.start(scripture), false);
view.response.addEventListener('submit', (event) => game.check(event), false);
view.hide(view.response);



  



