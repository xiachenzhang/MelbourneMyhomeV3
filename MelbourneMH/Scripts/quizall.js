// Creates sound functions for each possibility //
let rightSound = new Audio('http://abbeytipton.com/projects/right_sound.mp3');
let wrongSound = new Audio('http://abbeytipton.com/projects/wrong_sound.mp3');
let passedSound = new Audio('http://abbeytipton.com/projects/passed_sound.mp3');

let input = ['2 x 4', '5 x 10', '9 x 1', '5 x 5', '10 x 4', '1 x 3', '3 x 7', '2 x 9', '5 x 2', '9 x 8', '5 x 9', '10 x 8', '1 x 1', '3 x 9', '2 x 7', '5 x 3', '9 x 9', '5 x 7', '10 x 2', '1 x 6', '3 x 4', '2 x 1', '5 x 6', '9 x 3', '10 x 6', '5 x 8', '1 x 10', '3 x 6', '2 x 5', '10 x 3', '5 x 4', '9 x 7', '1 x 8', '5 x 4', '1 x 7', '10 x 5', '2 x 8', '1 x 4', '3 x 2', ' 2 x 6', '10 x 1', '3 x 3', '5 x 1', '9 x 10', '1 x 9', '2 x 2', '3 x 10', '9 x 4', '1 x 2', '10 x 7', '2 x 3', '9 x 6', '10 x 9', '1 x 5', '10 x 1', '9 x 2', '2 x 5', '10 x 10', '9 x 5', '2 x 10', 'All Questions Asked!'];
let inputAns = [8, 50, 9, 25, 40, 3, 21, 18, 10, 72, 45, 80, 1, 27, 14, 15, 81, 35, 20, 6, 12, 2, 30, 27, 60, 40, 10, 18, 10, 30, 20, 63, 8, 20, 7, 50, 16, 4, 6, 12, 10, 9, 5, 90, 9, 4, 30, 36, 2, 70, 6, 54, 90, 5, 10, 18, 10, 100, 45, 20];

let currentIndex = 0;
let totalRight = 0;
let totalWrong = 0;
let i = 0;
let j = 0;

$('#zero').click(function (e) {
    let name = document.getElementById('name').value;
    if (name === '') {
        $('.error').fadeIn(1000);
        $('.error').fadeOut(1000);
    } else {
        startCycle();
        $('#questions').text(input[currentIndex]);
        $('#nextBtn').show();
        $('#questions').show();
        $('#qdiv').show();
        $('.toDisappear').hide();
        $('#correctAnswers').show();
        $('#incorrectAnswers').show();
    }
});

// Creates 3 second timer and ability to stop timer //
var cycleTimer;

function startCycle() {
    cycleTimer = setInterval(function () {
        $('#answers').val('');
        $('#nextBtn').click();
    }, 4000);
}

function stopCycle() {
    clearInterval(cycleTimer);
}

// Creates click function to check for right answers and add green check if correct, red x if not, update the next question and answer, and play sounds depending on input //
$('#nextBtn').click(function () {
    // Creates variable for user input of name //
    let name = document.getElementById('name').value;

    if (parseInt($('#answers').val()) == inputAns[currentIndex]) {
        if (i == 9 || i == 19 || i == 29 || i == 39 || i == 49 || i == 59) {
            document.getElementById('correctAnswers').innerHTML += '&#9989;' + '<br>';
            totalRight++;
            i++;
            rightSound.play();
        } else {
            document.getElementById('correctAnswers').innerHTML += '&#9989;';
            totalRight++;
            i++;
            rightSound.play();
        }
    }
    if (parseInt($('#answers').val()) != inputAns[currentIndex]) {
        if (j == 9 || j == 19 | j == 29 | j == 39 | j == 49 | j == 59) {
            document.getElementById('incorrectAnswers').innerHTML += '&#10060;' + '<br>';
            totalWrong++;
            document.getElementById('missed').innerHTML += input[currentIndex] + '<br>';
            j++;
            wrongSound.play();
        } else {
            document.getElementById('incorrectAnswers').innerHTML += '&#10060;';
            totalWrong++;
            document.getElementById('missed').innerHTML += input[currentIndex] + '<br>';
            j++;
            wrongSound.play();
        }
    }

    currentIndex++;
    stopCycle();
    startCycle();

    // Makes end of quiz work - shows total correct or if user has passed //
    $('#answers').val('');
    $('#questions').text(input[currentIndex]);
    if (currentIndex >= inputAns.length) {
        stopCycle();
        $('#nextBtn').remove();
        $('#answers').hide();
        $('#questions').hide();
        $('#correctAnswers').hide();
        $('#incorrectAnswers').hide();
        $('#restart').show();
        $('#missed').show();
        if (totalRight === 60) {
            document.getElementById('end').innerHTML = 'Congratulations, ' + name + ', you passed!';
            passedSound.play();
            $('#missed').remove();
        } else {
            document.getElementById('end').innerHTML = name + ', you got ' + totalRight + ' right and ' + totalWrong + ' wrong!';
        }
    }

});

// Makes enter button work //
document.getElementById('answers').addEventListener('keyup', function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        $('#nextBtn').click();
    }
});


// Makes restart button reload the page //
$('#tryAgain').click(function () {
    window.location.reload(true);
});