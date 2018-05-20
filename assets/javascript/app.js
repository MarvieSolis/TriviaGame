// Variables

var timer = 24;
var correctScore = 0;
var incorrectScore = 0;
var timeoutScore = 0;
var progress = 0;

var obj = document.createElement("audio");
obj.src = "./assets/audio/pageaudio.mp3";
obj.volume = 0.1;
obj.autoPlay = true;
obj.preLoad = true;
obj.controls = true;

var buzzer = document.createElement("audio");
buzzer.src = "./assets/audio/buzzer.mp3";
buzzer.volume = 0.2;
buzzer.autoPlay = false;
buzzer.preLoad = true;
buzzer.controls =false;

var swish = document.createElement("audio");
swish.src = "./assets/audio/swish.mp3";
swish.volume = 0.2;
swish.autoPlay = false;
swish.preLoad = true;
swish.controls =false;

var questions = [{

    // Question 1
    question: "Which NBA player won 6 championships with the Chicago Bulls?",
    answers: {
        1: "Kobe Bryant",
        2: "Shaquille ONeal",
        3: "Michael Jordan",
        4: "Larry Bird"
    },
    correctAnswer: 3,
    correctName: "Michael Jordan",
    gif: "<img src='./assets/images/jordan.gif'>"
    },
    // Question 2
    {
    question: "Who's nickname is 'The Beard'?",
    answers: {
        1: "Kevin Durant",
        2: "LeBron James",
        3: "Russell Westbrook",
        4: "James Harden"
        },
    correctAnswer: 4,
    correctName: "James Harden",
    gif: "<img src='./assets/images/harden.gif'>"
    },
    // Question 3
    {
    question: "Which player was a major contributor to the 'Malice in the Palace'?",
    answers: {
        1: "Ron Artest",
        2: "Kwame Brown",
        3: "DeMarcus Cousins",
        4: "Lance Stephenson"
        },
    correctAnswer: 1,
    correctName: "Ron Artest",
    gif: "<img src='./assets/images/artest.gif'>"
    },
    // Question 4
    {
    question: "Which player scored 81 points in a single game?",
    answers: {
        1: "Shaquille ONeal",
        2: "Kobe Bryant",
        3: "Tracy McGrady",
        4: "Devin Booker"
    },
    correctAnswer: 2,
    correctName: "Kobe Bryant",
    gif: "<img src='./assets/images/bryant.gif'>"
    },
    // Question 5
    {
    question: "Other than Shaq, who else had the nickname 'Superman'?",
    answers: {
        1: "Dwight Howard",
        2: "Vince Carter",
        3: "Nate Robinson",
        4: "Victor Oladipo"
    },
    correctAnswer: 1,
    correctName: "Dwight Howard",
    gif: "<img src='./assets/images/howard.gif'>"
    },
    // Question 6
    {
    question: "Which NBA player's sillhouette is the NBA Logo?",
    answers: {
        1: "Larry Bird",
        2: "Michael Jordan",
        3: "Jerry West",
        4: "Kareem Abdul-Jabbar"
    },
    correctAnswer: 3,
    correctName: "Jerry West",
    gif: "<img src='./assets/images/west.gif'>"
    },
    // Question 7
    {
    question: "Who is Tracy McGrady's cousin?",
    answers: {
        1: "Derek Fisher",
        2: "DeMar DeRozan",
        3: "Delonte West",
        4: "Vince Carter"
    },
    correctAnswer: 4,
    correctName: "Vince Carter",
    gif: "<img src='./assets/images/carter.gif'>"
    },
    // Question 8
    {
    question: "Who's nickname is the 'Mailman'?",
    answers: {
        1: "Karl Malone",
        2: "Charles Barkley",
        3: "Kenny Smith",
        4: "John Stockton"
    },
    correctAnswer: 1,
    correctName: "Karl Malone",
    gif: "<img src='./assets/images/malone.gif'>"
    },
    // Question 9
    {
    question: "Who is the oldest rookie to play in the NBA?",
    answers: {
        1: "Lonzo Ball",
        2: "Kyle Korver",
        3: "Andre Ingram",
        4: "Vlade Divac"
    },
    correctAnswer: 3,
    correctName: "Andre Ingram",
    gif: "<img src='./assets/images/ingram.gif'>"
    },
    // Question 10
    {
    question: "Who played has played on the Suns, Cavs, Lakers, and Celtics?",
    answers: {
        1: "Shaquille ONeal",
        2: "Paul Pierce",
        3: "Steve Nash",
        4: "Shannon Brown"
    },
    correctAnswer: 1,
    correctName: "Shaquille ONeal",
    gif: "<img src='./assets/images/oneal.gif'>"
    }
];



// functions

// Start Screen
function gameStart() {
    var startScreen = "<button type='button' class='btn btn-danger' id='startButton' href='#'>Click Here to Start</button>";
    $("#main1").html("<div class='container'><div class='row'><div class='col-md-12 offset-md-5'>" + startScreen + "</div></div></div>");
  
}

// Create question on screen
function generateQuestion() {
    var qTimer = "<div class='row'><div class='mx-auto'><div id='time'>24</div></div></div>";
    var qQuestion = "<div class='row'><div class='mx-auto'><p id='question'></p></div></div>";
    var qAnswers = "<div class='row'><div class='mx-auto'><a class='choice' id='answer1' href='#'></a></div></div> <div class='row'><div class='mx-auto'><a class='choice' id='answer2' href='#'></a></div></div> <div class='row'><div class='mx-auto'><a class='choice' id='answer3' href='#'></a></div></div> <div class='row'><div class='mx-auto'><a class='choice' id='answer4' href='#'></a></div></div>";

    $("#main1").html(qTimer);
    $("#main2").html(qQuestion);
    $("#main3").html(qAnswers);

    $("#question").text(questions[progress].question);
    $("#answer1").text(questions[progress].answers[1]);
    $("#answer2").text(questions[progress].answers[2]);
    $("#answer3").text(questions[progress].answers[3]);
    $("#answer4").text(questions[progress].answers[4]);
}

// Timer function
function countdown() {
    clock = setInterval(shotClock, 1000);
        function shotClock() {
            if (timer === 0) {
                buzzer.play();
                clearInterval(clock);
                timeoutLoss();
            }
            if (timer > 0) {
                timer--;
                $("#time").html(timer); 
            }
        }
          
}


// TIMEOUT loss
function timeoutLoss() {
    timeoutScore++;
    var message1 = "<div class='row'><div class='mx-auto'><p id=message></p></div></div>"
    var message2 = "<div class='row'><div class='mx-auto'><p id=player></p></div></div>"
    var message3 = "<div class='row'><div class='mx-auto'><p id=gif></p></div></div>"

    
    $("#main1").html(message1);
    $("#main2").html(message2);
    $("#main3").html(message3);

    $("#message").html("Times Up! The correct answer is...");
    $("#player").html(questions[progress].correctName);
    $("#gif").html(questions[progress].gif);
    setTimeout(standby, 4000);
}


// CORRECT Win
function correctChoice() {
    correctScore++;
    var message1 = "<div class='row'><div class='mx-auto'><p id=message></p></div></div>"
    var message2 = "<div class='row'><div class='mx-auto'><p id=player></p></div></div>"
    var message3 = "<div class='row'><div class='mx-auto'><p id=gif></p></div></div>"

    $("#main1").html(message1);
    $("#main2").html(message2);
    $("#main3").html(message3);

    $("#message").html("CORRECT!");
    $("#player").html(questions[progress].correctName);
    $("#gif").html(questions[progress].gif);
    setTimeout(standby, 4000);
}


// INCORRECT Loss
function incorrectChoice() {
    incorrectScore++;
    var message1 = "<div class='row'><div class='mx-auto'><p id=message></p></div></div>"
    var message2 = "<div class='row'><div class='mx-auto'><p id=player></p></div></div>"
    var message3 = "<div class='row'><div class='mx-auto'><p id=gif></p></div></div>"

    $("#main1").html(message1);
    $("#main2").html(message2);
    $("#main3").html(message3);

    $("#message").html("INCORRECT! The correct answer was...");
    $("#player").html(questions[progress].correctName);
    $("#gif").html(questions[progress].gif);
    setTimeout(standby, 4000);
}


// Waiting
function standby() {
    if (progress < questions.length-1) {
        progress++;
        generateQuestion();
        timer = 24;
        countdown();
    }
    else {
        gameOver();
    }
}


// Gameover screen
function gameOver() {
    var UpperEnd = "<div class='row'><div class='mx-auto'><p id='correct'></p></div></div>";
    var MiddleEnd = "<div class='row'><div class='mx-auto'><p id='incorrect'></p></div></div>";
    var LowerEnd = "<div class='row'><div class='mx-auto'><p id='unanswered'></p></div></div>";

    $("#main1").html(UpperEnd);
    $("#main2").html(MiddleEnd);
    $("#main3").html(LowerEnd);

    $("#correct").html("Correct: " + correctScore);
    $("#incorrect").html("incorrect: " + incorrectScore);
    $("#unanswered").html("Unanswered: " + timeoutScore);

}


// Game Start

gameStart();

$("#startButton").on("click", function() {
    generateQuestion();
    countdown();
    obj.play();
});


$("body").on("click", ".choice", function() {
    selected = $(this).text();
    if (selected === questions[progress].correctName) {
        swish.play();
        correctChoice();
        clearInterval(clock);
    }
    else {
        incorrectChoice();
        clearInterval(clock);
    }
})






