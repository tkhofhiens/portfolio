import ls from './ls.js';
const scripture = ls.getScriptureList();

// console.log(scripture);

let numQuestions = 0;

// create an list of possible answers
function answerArray (question){
    var ans = [];
    // var id = choices;
    // console.log('ansarray '+scripture[choices].Reference);
    for (var count=0;count<4;count++){
        console.log(' answer id = '+ scripture[question].Id +'; ref = '+ scripture[question].Reference);
        ans.push(scripture[question].Reference);
        question++;
    }
    console.log("answer array "+ans.toString());
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
    domAnswers = Array.from(document.querySelectorAll('input[name=answer]'));
    // domAnswers = answers;
    //console.log("questionId"+ questionId);
    domAnswers.forEach(function (input, i){
        // Set checkbox value and unselect it
        input.value = scripture[questionId+i].Reference;
        console.log("value "+ input.value);
        console.log(input.checked);
        input.checked = false;
        // Display the answer text
        input.nextElementSibling.textContent = answers[i];
    });

}

// define variables for some of the HTML elements:
var domQuestion = document.querySelector('#question');
// var domQuestion = view.question;
var domAnswers = Array.from(document.querySelectorAll('input[name=answer]'));
var domNext = document.querySelector('#next');

// View Object
const view = {
    score: document.querySelector('#score strong'),
    // question: document.querySelector('#question'),
    question: domQuestion,
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


const game = {
    start(scripture) {
        displayQuestion();
        this.score = 0;
        this.questions = [...scripture];
        view.setup();
        this.secondsRemaining = 50;
        this.timer = setInterval(this.countdown, 1000);
        //this.ask();
    },
    
    countdown() {
        game.secondsRemaining--;
        view.render(view.timer, game.secondsRemaining);
        if (game.secondsRemaining < 0) {
            game.gameOver();
        }
    },

    check(event) {
        event.preventDefault();
        
      //  domNext.addEventListener('click', function () {
            // update correct answer counter:
            var domAnswer = domAnswers.find(input => input.checked);
            // console.log("DomAnswers Array? "+domAnswers.);
            // domAnswers.forEach(function (input, i){
            //     console.log(input.value);
            //     console.log(input.checked);
            // });
            // console.log("DomAnswer "+domAnswer.value);
            
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
                view.render(view.score, this.score);
            } else {
                view.render(view.result, `Wrong! The correct answer was ${answer}`, { 'class': 'wrong' });
            }
            // next question
            questionId++;
        displayQuestion();
    },

    gameOver() {
        view.render(view.result, `Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`,{ 'class': 'correct' });
        alert('You have answered ' + this.score + 
                  ' of ' + numQuestions + ' questions correctly.');
            // restart
            questionId = 0;
            numQuestions = 0;
        view.teardown();
        clearInterval(this.timer);
    }
}

// domNext
view.start.addEventListener('click', () => game.start(scripture), false);
view.response.addEventListener('submit', (event) => game.check(event), false);
view.hide(view.response);



  



