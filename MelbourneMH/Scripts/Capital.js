/*  
the capitals quizz
Design and Code by Boudjema Abdennour
facebook.com/nouri.karita.dz
*/
// JavaScript Document
$(document).ready(function () {
    "use strict";
    $("#game").hide();
    $("#end").hide();
    $("#home").show();
    var countries = ["What kind of animal is shown in the picture?", "What kind of animal is shown in the picture?", "What kind of animal is shown in the picture?", "What kind of animal is shown in the picture?", "What kind of animal is shown in the picture?", "What kind of animal is shown in the picture?", "What kind of animal is shown in the picture?", "What kind of animal is shown in the picture?", "What kind of animal is shown in the picture?", "What kind of animal is shown in the picture?"
        , "What kind of fruit is shown in the picture ?", "What kind of fruit is shown in the picture ?", "What kind of fruit is shown in the picture?", "What kind of fruit is shown in the picture?", "What kind of snack is shown in the picture?"
        , "What kind of food is shown in the picture?", "What kind of snack is shown in the picture?", "What kind of food is shown in the picture?", "What kind of sport is shown in the picture?", "What kind of sport is shown in the picture?"
        , "What kind of sport is shown in the picture?", "What kind of sport is shown in the picture?", "What kind of sport is shown in the picture?", "Which country's map is shown in the picture?", "Which country's flag is shown in the picture?"
        , "What kind of animal is shown in the picture?", "What cartoon character is shown in the picture?", "What kind of food is shown in the picture?", "What kind of food is shown in the picture?", "What kind of animal is shown in the picture?"];
    var capitals = ["platypus", "horse", "sheep", "kookaburra", "emu", "alpaca", "turtle", "dolphin", "pelican", "kangaroo", "apple", "grape", "raspberry", "strawberry", "almond", "muffin", "pods", "vegemite", "baseball", "basketball"
        , "racing", "swimming", "tennis", "australia", "australia", "penguin", "superman", "yogurt", "milk", "rabbit"];
    var flags = ["../../Content/image_1.jpg", "../../Content/image_2.jpg", "../../Content/image_3.jpg", "../../Content/image_4.jpg", "../../Content/image_5.jpeg", "../../Content/image_6.jpg", "../../Content/image_7.jpg", "../../Content/image_8.jpg", "../../Content/image_9.jpg", "../../Content/image_10.jpg", "../../Content/image_17.jpg", "../../Content/image_18.jpg", "../../Content/image_19.jpg", "../../Content/image_20.jpg", "../../Content/image_21.jpg"
        , "../../Content/image_32.jpg", "../../Content/image_35.jpg", "../../Content/image_39.jpg", "../../Content/image_41.jpg", "../../Content/image_42.jpg"
        , "../../Content/image_44.jpg", "../../Content/image_46.jpg", "../../Content/image_47.jpg", "../../Content/image_49.jpg", "../../Content/image_50.jpg"
        , "../../Content/image_59.jpg", "../../Content/image_62.jpg", "../../Content/image_78.jpg", "../../Content/image_79.jpg", "../../Content/image_83.jpg"];
    var theLetterWanted = -1;
    var remainingButtons = 0;
    var alreadyPlayed = [];
    var theAnswerDivided = [];
    var randomNumberMainOption;
    var theAnswerLength;
    var theAnswer;
    var slicer;
    var splitersHolder = [];
    var nextAppend;
    var counter = 1;
    var howmanyButtons = 16;
    var playedAlreadies = 0;
    var rights = 0;
    var wrongs = 0;
    var passes = 0;
    var seconds = 0;
    var miliseconds = 0;
    var mistake = [];
    var correct = [];
    var interv = 1;
    var limit = 120;
    var accuracy = 0;
    function resetall() {
        theLetterWanted = -1;
        remainingButtons = 0;
        theAnswerDivided = [];
        splitersHolder = [];
        counter = 0;
    }
    function resetEverything() {
        $("#end").hide();
        $("#game").hide();
        $("#home").show();
        $("#fautes").empty();
        $("#justes").empty();
        resetall();
        playedAlreadies = 0;
        rights = 0;
        wrongs = 0;
        passes = 0;
        seconds = 0;
        miliseconds = 0;
        mistake = [];
        correct = [];
        accuracy = 0;
    }
    function generateNumber() {
        randomNumberMainOption = Math.floor(Math.random() * countries.length);
        var checkAvailability = alreadyPlayed.indexOf(randomNumberMainOption);
        if (checkAvailability === -1) {
            alreadyPlayed.push(randomNumberMainOption);
            //console.log(randomNumberMainOption);

        }
        else {
            randomNumberMainOption = Math.floor(Math.random() * countries.length);
            console.log(randomNumberMainOption);
        }

        //console.log("array : "+alreadyPlayed+" the number : "+randomNumberMainOption);
    }//generate random Number and check if not used already
    function getTheAnswerAndBreakIt() {
        //console.log(randomNumberMainOption);
        theAnswer = capitals[randomNumberMainOption];
        theAnswerLength = theAnswer.length;
        for (var i = 0; i < theAnswerLength; i++) {
            slicer = theAnswer.slice(i, i + 1);
            theAnswerDivided.push(slicer);
        }
        console.log("the Answer : " + theAnswer);
        $(".theCountry").text(countries[randomNumberMainOption]);
    }//get answer and break it;
    function changeImage() {
        $("img").attr("src", flags[randomNumberMainOption]);
    }
    function distributeLetters() {
        for (var k = 0; k < 1000; k++) {

            var randomNumberToSplitLetters = Math.floor(Math.random() * howmanyButtons);
            var splitersAvailabilityChecker = splitersHolder.indexOf(randomNumberToSplitLetters);
            if (splitersAvailabilityChecker === -1) {
                theLetterWanted++;
                splitersHolder.push(randomNumberToSplitLetters);
                //console.log("randoms : "+splitersHolder+" k : "+k+" the letter : "+theLetterWanted);
                $("." + randomNumberToSplitLetters + "").text(theAnswerDivided[theLetterWanted]);
                if (splitersHolder.length >= theAnswerDivided.length) { break; }
            }
            else {
                randomNumberToSplitLetters = Math.floor(Math.random() * theAnswerDivided.length);
            }
        }//for
    }//distribute letters on buttons , the right ones

    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    function fillTheRemainingButtons() {
        for (var x = 0; x < 1000; x++) {
            var randomLetterSelecter = Math.floor(Math.random() * letters.length);
            var randomOtherButtonsSelector = Math.floor(Math.random() * howmanyButtons);
            var indexOfOtherRandom = splitersHolder.indexOf(randomOtherButtonsSelector);
            if (indexOfOtherRandom === -1) {
                splitersHolder.push(randomOtherButtonsSelector);
                remainingButtons++;
                $("." + randomOtherButtonsSelector + "").text(letters[randomLetterSelecter]);
                /*console.log("buttons : "+howmanyButtons);
                console.log(" filled already : "+splitersHolder.length+"counter : "+remainingButtons);*/
                //console.log("the random : "+randomOtherButtonsSelector);
                if (remainingButtons > howmanyButtons - theLetterWanted) { break; }
            }
            else {
                randomOtherButtonsSelector = Math.floor(Math.random() * howmanyButtons);
            }
        }//for
    }//fill the remaining buttons
    function genButtons() {
        for (var k = 0; k < howmanyButtons; k++) {
            $("#butttholder").append("<div class='" + k + " button'></div>");
        }
    }//generate buttons
    function genPs() {
        for (var i = 0; i < theAnswerDivided.length; i++) {
            $("#ppholder").append("<div id='" + i + "' class='p'></div>");
        }
        //console.log(theAnswerDivided.length);
    }//generate paragraphs that'll hold the letters


    function checkNextAppend() {
        for (var j = 0; j < theAnswerDivided.length; j++) {
            var text = $("#" + j + "").text();
            if (!text) {
                nextAppend = j;
                //console.log("next append : "+nextAppend);
                break;
            }//if
            else {
                nextAppend = -1;
            }//else
        }//for
    }//check next append
    $("#butttholder").on("click", ".button", function () {
        checkNextAppend();
        if (nextAppend > -1) {
            var texts = $(this).text();
            $("#" + nextAppend + "").text(texts);
            $(this).remove();
            counter++;
            checkIfWin();
        }//if still places
        //console.log(counter);
    });//on cilick button
    function checkIfWin() {
        $("h6").text("");
        for (var d = 0; d < theAnswerDivided.length; d++) {
            $("h6").append($("#" + d + "").text());
        }//for
        if (counter >= theAnswerLength) {
            playedAlreadies++;
            if ($("h6").text() === theAnswer) {
                game();
                rights++;
                correct.push(randomNumberMainOption);
            }//if win
            else {
                game();
                wrongs++;
                mistake.push(randomNumberMainOption);
            }///else lose
        }//if all filed
        //console.log("counter : "+counter+" answer length : "+theAnswerLength);
    }//check if win
    $("#pass").click(function () {
        playedAlreadies++;
        passes++;
        mistake.push(randomNumberMainOption);
        game();
    });
    $("#ppholder").on("click", ".p", function () {
        var textOfP = $(this).text();
        if (textOfP) {
            counter += -1;
            $("#butttholder").append("<div class='button'>" + $(this).text() + "</div>");
        }
        //console.log(counter);
        $(this).text("");
    });//on click p
    $(".start").click(function () {
        $("#home").hide();
        $("#game").show();
        $("#end").hide();
        game();
        Timer();
    });//start the game
    function Timer() {
        var gameTime = setInterval(function () {
            miliseconds++;
            if (miliseconds >= 10) {
                miliseconds = 0;
                seconds++;
            }
            $("#time").text("time left : " + (120 - seconds));

            //console.log("seconds : "+seconds+" interv : "+interv);
            if (seconds >= limit) {
                clearInterval(gameTime);
                endGame();
            }
        }, 100 * interv);//set interval
    }//timer
    $("#startagain").click(function () {
        resetEverything();
    });
    function game() {
        $("#butttholder").empty();
        $("#ppholder").empty();
        resetall();
        genButtons();
        generateNumber();
        getTheAnswerAndBreakIt();
        distributeLetters();
        fillTheRemainingButtons();
        changeImage();
        genPs();
    }//function game
    function endGame() {
        $("#game").hide();
        $("#home").hide();
        $("#end").show();
        $("#wrong").text("Incorrect Answers" );
        //$("#correct").text("Correct Answers");

  
        $("#accuracy").text("Your Score : " + rights);
        for (var f = 0; f < mistake.length; f++) {
            var lesFautes = mistake[f];
            $("#fautes").append((f+1) + ":" + countries[lesFautes] + "<br>" + "The correct answer:" + "&nbsp" + capitals[lesFautes] + "<br>");
        }//write the mistakes


        //for(var r = 0; r < correct.length; r++){
        //    var lesJustes=correct[r];
        //    $("#justes").append(countries[lesJustes]+" : "+capitals[lesJustes]+"<br>");
        //}///write the rights
        //console.log(miliseconds);
    }//endgame funciotn

});