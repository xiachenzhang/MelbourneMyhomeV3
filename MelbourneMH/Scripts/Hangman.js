$(document).ready(function () {
    var foodDatabase = [ "pizza", "sausage", "potato", "cheese", "chocolate"];
    var geoDatabase = ["japan", "spain", "germany",  "iceland", "china",  "canada", "india", "australia"];
    var animalDatabase = ["crocodile", "rabbit", "otter", "tiger", "lion", "peacock", "sheep", "cat", "dog"];
    
    var selectedDatabase = foodDatabase;

    var chosenWord;
    var userLetter = "";
    var checkWordSplit = [];
    var counter = 0;
    var underscores = [];
    var guesses = [];
    var gingerbreads = [$("#ging1"), $("#ging2"), $("#ging3"), $("#ging4")];

    //generate an array of underscores of the right length

    function generateUnderscores(chosenWord) {
        chosenWord.split('').forEach(function (letter) {
            underscores.push('_');
        })
        return underscores;
    }

    //split the word into an array and compare individual letters

    function isLetterPresent(userLetter) {
        userLetter = userLetter.toLowerCase();
        checkWordSplit = chosenWord.split('');
        var result = false;

        //reassign any correct letters into the array of underscores and update DOM

        for (var i = 0; i < checkWordSplit.length; i++) {
            if (checkWordSplit[i] === userLetter) {
                result = true;
                guesses[i] = userLetter;
                $("#wordSpace").html(guesses);
                if (guesses.join("") === chosenWord) {
                    $("#wordSpace").addClass("aWinnerIsYou");
                    $("#alphabetKeys").addClass("noClick");
                }
            }
        }

        //cycle through the gingerbreads until they vanish. Reinstate noClick when final one is gone.

        if (!result) {
            gingerbreads[counter].addClass("hidden");
            counter++;
            if (counter < gingerbreads.length) {
                gingerbreads[counter].removeClass("hidden");
            } else {
                $("#alphabetKeys").addClass("noClick");
                $("#wordSpace").hide().html(chosenWord).fadeIn(1600);
            }
        }
        return result;
    }

    //reset

    function reset() {
        $("#alphabetKeys").addClass("noClick");
        $("#wordSpace").addClass("hidden").removeClass("aWinnerIsYou");
        $("#startButton").removeClass("hidden");
        $("#alphabetKeys span").removeClass("selected");
        chosenWord = "";
        userLetter = "";
        checkWordSplit = [];
        counter = 0;
        underscores = [];
        guesses = [];
        gingerbreads[1].addClass("hidden");
        gingerbreads[2].addClass("hidden");
        gingerbreads[3].addClass("hidden");
        gingerbreads[0].removeClass("hidden");
    }

    //choosing a category

    $("#foodIcon").on("click", function () {
        reset();
        $("#foodIcon")
            .addClass("selectedIcon")
            .siblings()
            .removeClass("selectedIcon");
        selectedDatabase = foodDatabase;
    });
    $("#geoIcon").on("click", function () {
        reset();
        $("#geoIcon")
            .addClass("selectedIcon")
            .siblings()
            .removeClass("selectedIcon");
        selectedDatabase = geoDatabase;
    });
    $("#animalIcon").on("click", function () {
        reset();
        $("#animalIcon")
            .addClass("selectedIcon")
            .siblings()
            .removeClass("selectedIcon");
        selectedDatabase = animalDatabase;
    });
    $("#mythIcon").on("click", function () {
        reset();
        $("#mythIcon")
            .addClass("selectedIcon")
            .siblings()
            .removeClass("selectedIcon");
        selectedDatabase = mythDatabase;
    });
    $("#minecIcon").on("click", function () {
        reset();
        $("#minecIcon")
            .addClass("selectedIcon")
            .siblings()
            .removeClass("selectedIcon");
        selectedDatabase = minecraftDatabase;
    });

    //let's begin!
    //choose a word, generate an array of underscores

    $("#startButton").on("click", function (event) {
        $("#alphabetKeys").removeClass("noClick");
        chosenWord = selectedDatabase[Math.floor(Math.random() * selectedDatabase.length)];
        guesses = generateUnderscores(chosenWord);
        $(event.target).addClass("hidden");
        $("#wordSpace").removeClass("hidden").html(guesses);
    });

    //to avoid 26 click handlers, used child elements - spans - and therefore any click within alphabet keys includes children; target selects individual span. Had to ensure entire element couldn't be selected.
    //took text from the target span to use to compare.

    $("#alphabetKeys").on("click", function (event) {
        var target = $(event.target);
        if (event.target !== event.currentTarget) {
            target.addClass("selected");
            var wellIsIt = "";
            userLetter = target.text();
            wellIsIt = isLetterPresent(userLetter);
        }
    });

    $("#resetButton").on("click", function () {
        reset();
    });
});
