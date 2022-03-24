
function getName() {

    let name = prompt("What is your name?");
    document.write("Welcome to my page, " + name + "!");

}

function getStream() {

    let streaming = prompt("Which streaming service do you typically use to watch TV shows?");
    document.write("Ok, " + streaming + " is a very reputable streaming service. Nice work.");

}

function getShow() {

    let show = prompt("What is your favorite show?");
    if (show === "Breaking Bad") {
        document.write("Great choice! Breaking Bad is the greatest show of all time.");
    } else if (show === "breaking bad") {
        document.write("Great choice! Breaking Bad is the greatest show of all time.");
    } else {
        document.write("WRONG! " + show + " is a great show but Breaking Bad is the greatest show of all time. Thanks for playing.");
    }
}