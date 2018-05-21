# TriviaGame

## The Function of This Program
This "NBA Themed Trivia Game" is a click based trivia game that uses timed events. Once the user clicks the start button, the user has 24 seconds to answer each question. There are 10 questions in total, all within the subject of past and present NBA players. The game keeps track of correct, incorrect, and unanswered questions until the game is complete. Once the user selects an answer or fails to answer within 24 seconds, a message is displayed for 4 seconds explaining the outcome of the question and a GIF of the NBA player.

The script file mainly consists of **jQuery on click** functions that point to the 4 answers displayed on the page, as well as a timer that counts down. Whether its an on click or **timed event**, new HTML is generated onto the 3 divs. The desired questions, answers, and content are pulled from **Objects** set as variables. The variable that controls this selection is the "progress" variable that increments after every question. **Dot notation** is used to access the contents of the object.

As for the CSS and HTML, **bootstrap** as used to create the layout. The page consists of mainly 3 divs in which jQuery generates content inside them. Audio files are included to provide background music, and various sounds that indicate a correct answer or time running out. Fonts were pulled from [Goolgle Fonts](fonts.google.com). IDs and classes were added on top of the Bootstrap classes in order to include styling.


## The Usefulness
Using this website and analyzing this code can help give an understanding on how to use jQuery to perform dynamic websites and various functions. Functions utilizing the **$** selector enable the user to target specific page elements and either perform specific functions, change attributes, styling, and more. The jQuery in this website is mainly used to target the 3 ontent divs and generate the necessary content. This page also uses the functions setInterval, clearInterval, and setTimeout to establish timed events.


## Getting started
People can learn more about using jQuery by looking through websites such as [jQuery.com](https://www.jquery.com/) or [w3schools](https://www.w3schools.com/jquery/default.asp).