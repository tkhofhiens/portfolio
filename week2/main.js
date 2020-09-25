// const message = 'Hello World!'
// alert(message)

const uniqueID = Symbol(`player's unidue ID is:`);
console.log(uniqueID,Math.random());
// const name = { value: 'Alexa' }; // an object
// name.value = 'Siri'; // change the value

const backcolor = document.getElementById('background');
const rainbow = ['red','orange','yellow','green','blue','rebeccapurple','violet'];
function change() {
    document.body.style.background = rainbow[Math.floor(7 * Math.random())];
}
backcolor.addEventListener('click', change);


const btn = document.getElementById('game');
    // Set the questions
function play() {
    const quiz = new Map([
        ["What is Superman's real name?", "Clark Kent"],
        ["What is Wonderwoman's real name?", "Dianna Prince"],
        ["What is Batman's real name?", "Bruce Wayne"]
    ]);

    // initialize score
    let score = 0;

    for (const [question, answer] of quiz.entries()) {

        // get answer from user
        const response = prompt(question);
        // check if answer is correct
        if (response === answer) {
            alert('Correct!');
            // increase score by 1
            score++;
        } else {
            alert(`Wrong! The correct answer was ${answer}`);
        }
    }

    // At the end of the game, report the player's score
    alert(`Game Over, you scored ${score} point${score > 1 ? 's' : ''}`);
}
btn.addEventListener('click', play);