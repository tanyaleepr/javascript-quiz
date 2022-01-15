//Assignment code here

//arrays for the quiz starts here
var quizStatus = true; // Know the status of the quiz
var questionNumber = 0; // Track the question answered in the quiz
var answerNumber = 0; // Track next answers to show during the quiz
var score = 0; 
var highScore = 50; 
var finalAnswerCheck = 0  
var checkTimes = 1 // Check timer in the quiz

var viewHighScoresBtnEl = document.getElementById('view-high-scores'); // View High Scores 
var startQuizBtnEl = document.getElementById('start-quiz'); // Start Quiz button 
var answer1BtnEl = document.getElementById('answer1'); 
var answer2BtnEl = document.getElementById('answer2'); 
var answer3BtnEl = document.getElementById('answer3'); 
var answer4BtnEl = document.getElementById('answer4'); 
var submitScoreEl = document.getElementById('submitScore'); // submittion button

var questionsEl = document.getElementById('questions'); // Questions for the main page
var pageEl = document.getElementById('page');
var htmlTimeLeft = document.getElementById('timeLeft'); // Display counter 
var answerCorrectWrong = document.getElementById('answerCorrectWrong'); 
var questionEl = document.createElement("question"); // Display Question
var finalScoreDisplayEl = document.createElement("finalScoreDisplay"); 
var enterInitialsEl = document.createElement("enterInitials"); // Enter initials
var enterInitialsTextAreaEl = document.createElement("enterInitialsTextArea"); // TextArea
var button1234 = document.createElement("button"); 
var timeLeft = 60; // countdown


// answers connected to the arrays for displaying the results of the questions
answer1BtnEl.style.display = 'none';
answer2BtnEl.style.display = 'none';
answer3BtnEl.style.display = 'none';
answer4BtnEl.style.display = 'none';
submitScoreEl.style.display = 'none';
answerCorrectWrong.style.display='none';
enterInitialsTextArea.style.display='none';

var questionsObject = { // Object that holds correct answers.
    correct: { 
        0 : "Commonly used datatypes DO NOT include?",
        1 : "The condition statement if/else is enclosed with the following:",
        2 : "Arrays can be used to store the following", // Button #4 for 
        3 : "A very useful tool to debug arrays is:", // Button #3
        4 : "Strings must be enclosed with:"
    }
};

var answersObject = { // Object that holds correct answers.
    answers: { 
        0 : {
            0: "Strings",
            1: "Boolean",
            2: "Alerts",
            3: "Numbers"},
        1 : {
            0: "Parentheses",
            1: "Curly Brackets",
            2: "Quotes",
            3: "Square Brackets"},
        2 : { // Button #3
            0: "Javascript",
            1: "Terminal/bash",
            2: "For loops", 
            3: "Console.log"},      
        3 : { // Answer to question 5 --> Button #2
            0: "Commas",
            1: "Curly brackets",
            2: "Quotes", 
            3: "Parentheses"},      
        4 : { // Button #4
            0: "Number of strings",
            1: "Other arrays",
            2: "Booleans",
            3: "All of the above"},  
    }
};

//section for the countdown with the function of viewing high scores
htmlTimeLeft.textContent = timeLeft;

viewHighScoresBtnEl.addEventListener("click", function() { // View the high scores

    var quizUsers = "";
    var substringTest ="";
    var highScores = "";

    for (var i=0; i < localStorage.length; i++) {
        var checkUserValue = [];
        
        quizUsers = localStorage.getItem(localStorage.key(i));
        substringTest = quizUsers.substring(0,4) 
        if (substringTest == "quiz") {
            checkUserValue = quizUsers.split(",");
            var userName = checkUserValue[0]
            highScores += "User " + userName.substring(4) + " high score is: " + checkUserValue[1] + "\n";
       }
    }
    window.alert(highScores);

});

submitScoreEl.addEventListener("click", function() { // Submit the high scores
    

    var quizLocalStorage = "quiz";
    var quizUserDetails = "";
    var value = [];
    
    
    quizUserDetails = quizLocalStorage + enterInitialsTextArea.value 
    value = [quizUserDetails,highScore] 


    // entry data in local storage will be available, even if the user clears the data at local storage the below code will not work unless there is at least on entry.
    if (!localStorage.length) {
        localStorage.setItem("test","test");
    }
       
        
    for (var i=0; i < localStorage.length; i++){
        
        var checkUser = "";
        var checkUserValue = [];

       
        quizUserDetails = quizLocalStorage + enterInitialsTextArea.value;

        
        checkUser = localStorage.getItem(quizUserDetails);
        
   
        if (checkUser == null) { 
            localStorage.setItem(quizUserDetails, value); 
            window.alert("Your score of " + highScore + " has been submitted!")
            break;
        } else if (checkUser != null){
            checkUserValue = checkUser.split(","); 
           
        
        }  

        if ( quizUserDetails == checkUserValue[0] && highScore == checkUserValue[1] ) {

       
        //local storage formula
        localStorage.setItem(quizUserDetails, value); 
        window.alert(highScore + " " + "is the latest entry for user initial " + enterInitialsTextArea.value + ". Entry will not be added.")
        break; 
        } else if (enterInitialsTextArea.value == "") {
            window.alert("Please enter an initial");
            break;
        } else if ( quizUserDetails == checkUserValue[0] && highScore > checkUserValue[1] ) { 
            
            localStorage.setItem(quizUserDetails, value);  
            window.alert("New high score of " + highScore + " has been submitted!.\nYour previous score was " + checkUserValue[1])
            break; 
        } else if ( quizUserDetails == checkUserValue[0] && highScore < checkUserValue[1] ) { 
            
            localStorage.setItem(quizUserDetails, value); 
            window.alert("Your previous code of " + checkUserValue[1] + " was higher. Entry will not be added.");
            break; 

        } else { 
            localStorage.setItem(quizUserDetails, value);  
            window.alert("Your score of " + highScore + " has been submitted!")
            break;
        }
                
    }
    
} );


answer1BtnEl.addEventListener("mouseover", function() {

    answerCorrectWrong.style.display='none';

});

answer2BtnEl.addEventListener("mouseover", function() {

    answerCorrectWrong.style.display='none';

});

answer3BtnEl.addEventListener("mouseover", function() {

    answerCorrectWrong.style.display='none';

});

answer4BtnEl.addEventListener("mouseover", function() {

    answerCorrectWrong.style.display='none';

});

submitScoreEl.addEventListener("mouseover", function() {

    answerCorrectWrong.style.display='none';

});

startQuizBtnEl.addEventListener("click", function() {

//debugger
    startQuizBtnEl.style.display = 'none';
    question.style.display='none';
    finalScoreDisplay.style.display = 'none';
    enterInitials.style.display='none';
    score = 0; 
    timeLeft=60;
    htmlTimeLeft.textContent = timeLeft; 
    finalAnswerCheck = 0; // Check if last question and wrong.
    checkTimes = 1; // Check timer 

   
    
    var timeInterval = setInterval(function() {

        if (score === 1){ // For any wrong answer, remove a point
            highScore -= 10;
        }

        score = 0; // move the score back to 0 to check for another wrong answer.

        
        if(timeLeft >= 1 && finalAnswerCheck !== 1) {
            //Assign text content to the question from our object
            question.textContent = questionsObject.correct[questionNumber];
            
            question.style.display= ""; // Allow the questions and buttons to be displayed
            answer1BtnEl.style.display = ""; 
            answer2BtnEl.style.display = "";
            answer3BtnEl.style.display = "";
            answer4BtnEl.style.display = "";

            //Display answers to the question
            answer1BtnEl.textContent = answersObject.answers[answerNumber][0];
            answer2BtnEl.textContent = answersObject.answers[answerNumber][1];
            answer3BtnEl.textContent = answersObject.answers[answerNumber][2];
            answer4BtnEl.textContent = answersObject.answers[answerNumber][3];
           
            container.appendChild(questionEl);
            container.appendChild(answer1BtnEl);
            container.appendChild(finalScoreDisplayEl);
            timeLeft -= 1;
            htmlTimeLeft.textContent = timeLeft;
            console.log("time left:" + timeLeft)
            

            answer1BtnEl.addEventListener("click", function() {

                if (question.textContent === "The condition statement if/else is enclosed with the following:" && answer1BtnEl.textContent === "Parentheses") {
                    console.log("Correct");
                    questionNumber = 2; 
                    answerNumber = 4;
                    answerCorrectWrong.style.display="";
                    answerCorrectWrong.textContent = "Correct!";
                    answerCorrectWrong.style.borderTop = "solid #800080";
                    answerCorrectWrong.appendChild(answerCorrectWrong);
                } else {

                    switch(answer1BtnEl.textContent) {
                        case "Strings":
                            console.log("Inside the case now");
                            answerCorrectWrong.style.display="";
                            answerCorrectWrong.textContent = "Wrong!";
                            answerCorrectWrong.style.borderTop = "solid #800080";
                            
                            score = 1; // Give user a 10+ score
                            questionNumber = 1; // Move to the next question 
                            answerNumber = 1;
                            break;
                        case "Number of strings":
                            console.log("Inside the case now");
                            answerCorrectWrong.style.display="";
                            answerCorrectWrong.textContent = "Wrong!";
                            answerCorrectWrong.style.borderTop = "solid #800080";
                            
                            score = 1; 
                            questionNumber = 3; // Move to the next question 
                            answerNumber = 2;
                            break;
                        case "Javascript":
                            console.log("Inside the case now");
                            answerCorrectWrong.style.display="";
                            answerCorrectWrong.textContent = "Wrong!";
                            answerCorrectWrong.style.borderTop = "solid #800080";
                            
                            score = 1; 
                            questionNumber = 4; // Move to the next question 
                            answerNumber = 3;
                        break;
                        case "Commas":
                            console.log("Correct");
                            //game over
                            answerCorrectWrong.style.display=""; 
                            answerCorrectWrong.textContent = "Correct!";
                            answerCorrectWrong.style.borderTop = "solid #800080";
                            answerCorrectWrong.appendChild(answerCorrectWrong);
                            //window.alert("Game Over")
                            questionNumber = 0; // Game is over, no more questions to show.
                            answerNumber = 0; 
                            console.log("I'm here" + timeInterval);
                            answer1BtnEl.style.display = 'none';
                            answer2BtnEl.style.display = 'none';
                            answer3BtnEl.style.display = 'none';
                            answer4BtnEl.style.display = 'none';
                            answerCorrectWrong.style.display='none'; 
                            startQuizBtnEl.style.display = 'none'; // Remove Start Quiz button
                            question.textContent = "You have finished the quiz!";
                            finalScoreDisplay.style.display = ""; // Allow display for final score
                            enterInitials.style.display = ""; // Display Message to Enter initials
                            enterInitialsTextArea.style.display="";  // Displays user's score once submitted is clicked.
                            finalAnswerCheck = 1; 
                            lastQuestionWrong();
                            finalScoreDisplay.textContent = "Your final score is: " + highScore; // Assign the latest high score.
                            enterInitials.textContent = "Enter initials: "
                            submitScoreEl.style.display = "";
                            submitScoreEl.textContent = "Submit";                   
                            //Exit the countdown.
                            clearInterval(timeInterval);
                            break;
                        
                    }
                }
      

            });

            answer2BtnEl.addEventListener("click", function() {

                if (question.textContent === "Strings must be enclosed with:" && answer2BtnEl.textContent === "Curly brackets") {
                    console.log("Correct");
                    answerCorrectWrong.style.display=""; // Enables text content 
                    answerCorrectWrong.textContent = "Correct!";
                    answerCorrectWrong.style.borderTop = "solid #800080";
                    answerCorrectWrong.appendChild(answerCorrectWrong);
                    questionNumber = 0; 
                    answerNumber = 0; 
                    console.log("I'm here" + timeInterval);
                    answer1BtnEl.style.display = 'none';
                    answer2BtnEl.style.display = 'none';
                    answer3BtnEl.style.display = 'none';
                    answer4BtnEl.style.display = 'none';
                    answerCorrectWrong.style.display='none'; 
                    startQuizBtnEl.style.display = 'none'; // Remove Start Quiz button.
                    question.textContent = "You have finished the quiz!";
                    finalScoreDisplay.style.display = ""; // Allow display for final score
                    enterInitials.style.display = ""; 
                    enterInitialsTextArea.style.display="";  
                    finalScoreDisplay.textContent = "Your final score is: " + highScore; 
                    enterInitials.textContent = "Enter initials: "
                    submitScoreEl.style.display = "";
                    submitScoreEl.textContent = "Submit";                   
                    //Exit the countdown
                    clearInterval(timeInterval);
                } else {

                    switch(answer2BtnEl.textContent) {
                        case "Boolean":
                            console.log("Inside the case now");
                            answerCorrectWrong.style.display="";
                            answerCorrectWrong.textContent = "Wrong!";
                            answerCorrectWrong.style.borderTop = "solid #800080";
                          
                            score = 1; 
                            questionNumber = 1; 
                            answerNumber = 1;
                            break;
                        case "Curly Brackets":
                            console.log("Inside the case now");
                            answerCorrectWrong.style.display="";
                            answerCorrectWrong.textContent = "Wrong!";
                            answerCorrectWrong.style.borderTop = "solid #800080";
                         
                            score = 1; 
                            questionNumber = 2; 
                            answerNumber = 4;
                            console.log(score);
                            break;
                        case "Other arrays":
                            console.log("Inside the case now");
                            answerCorrectWrong.style.display="";
                            answerCorrectWrong.textContent = "Wrong!";
                            answerCorrectWrong.style.borderTop = "solid #800080";
                            score = 1; 
                            questionNumber = 3; 
                            answerNumber = 2;
                            break;
                        case "Terminal/bash":
                            console.log("Inside the case now");
                            answerCorrectWrong.style.display="";
                            answerCorrectWrong.textContent = "Wrong!";
                            answerCorrectWrong.style.borderTop = "solid #800080";
                            score = 1; 
                            questionNumber = 4; 
                            answerNumber = 3;
                            break;

                            
                    }
                 }



                
            });

            answer3BtnEl.addEventListener("click", function() {

                if (question.textContent === "Commonly used datatypes DO NOT include?" && answer3BtnEl.textContent === "Alerts") {
                    console.log("Correct");
                    questionNumber = 1; 
                    answerNumber = 1;
                    answerCorrectWrong.style.display=""; 
                    answerCorrectWrong.textContent = "Correct!";
                    answerCorrectWrong.style.borderTop = "solid #800080";
                    answerCorrectWrong.appendChild(answerCorrectWrong);
                } else if (question.textContent === "A very useful tool to debug arrays is:" && answer3BtnEl.textContent === "For loops") {
                    console.log("Correct");
                    questionNumber = 4;
                    answerNumber =3;
                    answerCorrectWrong.style.display="";
                    answerCorrectWrong.style.borderTop = "solid #800080";
                    answerCorrectWrong.appendChild(answerCorrectWrong);
                } else if (question.textContent === "The condition statement if/else is enclosed with the following:" && answer3BtnEl.textContent === "Quotes") {
                            console.log("Inside the case now");
                            answerCorrectWrong.style.display="";
                            answerCorrectWrong.textContent = "Wrong!";
                            answerCorrectWrong.style.borderTop = "solid #800080";
                            score = 1; 
                            questionNumber = 2; 
                            answerNumber = 4;
                }
                
                else {

                    switch(answer3BtnEl.textContent) {
                        case "Booleans":
                            console.log("Inside the case now");
                            answerCorrectWrong.style.display="";
                            answerCorrectWrong.textContent = "Wrong!";
                            answerCorrectWrong.style.borderTop = "solid #800080";
                            score = 1; 
                            questionNumber = 3; 
                            answerNumber = 2;
                            break;
                        case "Quotes":
                            console.log("Inside the case now");
                            score = 1; 
                            questionNumber = 0; 
                            answerNumber = 0; 
                            console.log("I'm here" + timeInterval);
                            answer1BtnEl.style.display = 'none';
                            answer2BtnEl.style.display = 'none';
                            answer3BtnEl.style.display = 'none';
                            answer4BtnEl.style.display = 'none';
                            answerCorrectWrong.style.display='none';
                            startQuizBtnEl.style.display = 'none'; 
                            question.textContent = "You have finished the quiz!";
                            finalScoreDisplay.style.display = ""; 
                            enterInitials.style.display = "";
                            enterInitialsTextArea.style.display="";  
                            finalAnswerCheck = 1; 
                            lastQuestionWrong();
                            finalScoreDisplay.textContent = "Your final score is: " + highScore; 
                            enterInitials.textContent = "Enter initials: "
                            submitScoreEl.style.display = "";
                            submitScoreEl.textContent = "Submit";                   
                            //Exit the counter
                            clearInterval(timeInterval);
                            
                        break;
                    }

                }

            });

            answer4BtnEl.addEventListener("click", function() {

                if (question.textContent === "Arrays can be used to store the following" && answer4BtnEl.textContent === "All of the above") {
                    console.log("Correct");
                    questionNumber = 3; 
                    answerNumber = 2;
                    answerCorrectWrong.style.display=""; 
                    answerCorrectWrong.textContent = "Correct!"
                    answerCorrectWrong.style.borderTop = "solid #800080";
                    answerCorrectWrong.appendChild(answerCorrectWrong);

                } else {

                    switch(answer4BtnEl.textContent) {
                        case "Numbers":
                            console.log("Inside the case now");
                            answerCorrectWrong.style.display="";
                            answerCorrectWrong.textContent = "Wrong!";
                            answerCorrectWrong.style.borderTop = "solid #800080";
                            score = 1; 
                            questionNumber = 1; 
                            answerNumber = 1;
                            break;
                        case "Square Brackets":
                            console.log("Inside the case now");
                            answerCorrectWrong.style.display="";
                            answerCorrectWrong.textContent = "Wrong!";
                            answerCorrectWrong.style.borderTop = "solid #800080";
                            score = 1; 
                            questionNumber = 2; 
                            answerNumber = 4;
                            break;
                        case "Console.log":
                            console.log("Inside the case now");
                            answerCorrectWrong.style.display="";
                            answerCorrectWrong.textContent = "Wrong!";
                            answerCorrectWrong.style.borderTop = "solid #800080";
                            score = 1; 
                            questionNumber = 4; 
                            answerNumber = 3;
                        break;
                        case "Parentheses":
                            console.log("Inside the case now");
                            answerCorrectWrong.style.display="";
                            answerCorrectWrong.textContent = "Wrong!";
                            answerCorrectWrong.style.borderTop = "solid #800080";
                            score = 1; 
                            questionNumber = 0; 
                            answerNumber = 0; 
                            console.log("I'm here" + timeInterval);
                            answer1BtnEl.style.display = 'none';
                            answer2BtnEl.style.display = 'none';
                            answer3BtnEl.style.display = 'none';
                            answer4BtnEl.style.display = 'none';
                            answerCorrectWrong.style.display='none'; 
                            startQuizBtnEl.style.display = 'none'; 
                            question.textContent = "You have finished the quiz!";
                            finalScoreDisplay.style.display = ""; 
                            enterInitials.style.display = ""; 
                            enterInitialsTextArea.style.display="";  
                            finalAnswerCheck = 1; 
                            lastQuestionWrong();
                            finalScoreDisplay.textContent = "Your final score is: " + highScore; 
                            enterInitials.textContent = "Enter initials: "
                            submitScoreEl.style.display = "";
                            submitScoreEl.textContent = "Submit";                   
                            //Exit the countdown
                            clearInterval(timeInterval);
                        break;
                        
                    }
                 
                }
                
            });

        }
        else if(timeLeft === 0){

          console.log("I'm here" + timeInterval);
          questionNumber = 0; 
          answerNumber = 0; 
          answer1BtnEl.style.display = 'none';
          answer2BtnEl.style.display = 'none';
          answer3BtnEl.style.display = 'none';
          answer4BtnEl.style.display = 'none';
          answerCorrectWrong.style.display='none'; 
          question.textContent = "Game Over!. Try again by clicking on \"Click Start Quiz\"";
          startQuizBtnEl.style.display = "";
          clearInterval(timeInterval);
          
          //container.appendChild(questionEl);
    
          //displayMessage();
        }
      }, 1000)

});

function lastQuestionWrong () {
        if (finalAnswerCheck === 1 && checkTimes === 1) {
        highScore -= 10;
        checkTimes = 2;
        return highScore
    }

  }
