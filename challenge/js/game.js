import ls from './ls.js';

const quiz = ls.getScriptureList();
console.log(quiz);

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
    resetForm() {
        this.response.answer.value = '';
        this.response.answer.focus();
    },
    setup() {
        this.show(this.question);
        this.show(this.response);
        this.show(this.result);
        this.hide(this.start);
        this.render(this.score, game.score);
        this.render(this.result, '');
        this.render(this.info, '');
        this.resetForm();
    },
    teardown() {
        this.hide(this.question);
        this.hide(this.response);
        this.show(this.start);
    }
};

const game = {
    start(quiz) {
        this.score = 0;
        this.questions = [...quiz];
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
    ask(phrase) {
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
        const response = view.response.answer.value;
        const answer = this.question.Reference;
        if (response === answer) {
            view.render(view.result, 'Correct!', { 'class': 'correct' });
            this.score++;
            view.render(view.score, this.score);
        } else {
            view.render(view.result, `Wrong! The correct answer was ${answer}`, { 'class': 'wrong' });
        }
        view.resetForm();
        this.ask();
    },
    //----- multiple choice radio button example
    // var submitAnswer = function() {


    // submitAnswer(){
    //     var radios = document.getElementsByName('choice');
    //     var val= "";
    //     for (var i = 0, length = radios.length; i < length; i++) {
    //         if (radios[i].checked) {
    //             val = radios[i].value; 
    //             break;
    //             }
    //     }
        
    //     if (val == "" ) {
    //         alert('please select choice answer');
    //     } else if ( val == "Scripting" ) {
    //         alert('Answer is correct !');
    //     } else {
    //         alert('Answer is wrong');
    //     }
    // },

    //----- end of multiple choice section
    gameOver() {
        view.render(view.result, `Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`,{ 'class': 'correct' });
        view.teardown();
        clearInterval(this.timer);
    }
}
   
view.start.addEventListener('click', () => game.start(quiz), false);
view.response.addEventListener('submit', (event) => game.check(event), false);
view.hide(view.response);


function submitAnswer(){
    var radios = document.getElementsByName('choice');
    var val= "";
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            val = radios[i].value; 
            break;
            }
    }
    
    if (val == "" ) {
        alert('please select choice answer');
    } else if ( val == "Scripting" ) {
        alert('Answer is correct !');
    } else {
        alert('Answer is wrong');
    }
}

export default {
    submitAnswer
}
