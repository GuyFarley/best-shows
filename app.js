
function quiz() {
    let name = prompt("What is your name?");
    document.getElementById("userName").innerHTML = "Welcome to my page, " + name + "!";

    let show = prompt("What is your favorite show?");
    if (show === "Breaking Bad") {
        document.getElementById("favShow").innerHTML = "Great choice! Breaking Bad is the greatest show of all time.";
    } else if (show === "breaking bad") {
        document.getElementById("favShow").innerHTML = "Great choice! Breaking Bad is the greatest show of all time.";
    } else {
        document.getElementById("favShow").innerHTML = "WRONG! " + show + " is a great show but Breaking Bad is the greatest show of all time. Thanks for playing.";
    }

    let answer;
    let guesses = 0;
    do {
        guesses++;
        answer = prompt("On a scale of 1-10 (with 10 being the highest), what would you rate the show The Bachelor?");
    } while (parseInt(answer) !== 1)
    if (parseInt(answer) === 1) {
        document.getElementById("rate").innerHTML = "Regarding The Bachelor, " + answer + " out of 10 is correct. The Bachelor is a bad show. It took you " + guesses + " times to rate it correctly.";
    }

    let output = '';
    let tvHours = prompt("How many hours of TV do you watch per week?");
    for (let i = 0; i < tvHours; i++) {
        output += "<img src='images/TV.png' />";
    }
    document.getElementById("hours").innerHTML = output + "  Wow, that's a lot of TV! You should maybe crack a book sometime."
}
