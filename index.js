//Displayed Score Variables
let scoreHome = document.getElementById("score-home")
let scoreAway = document.getElementById("score-away")
scoreHome.textContent = 0
scoreAway.textContent = 0

// Actual Total Score Variables
let totalHome = 0
let totalAway = 0

//Home Score Buttons

function homeAdd1() {
    totalHome += 1
    scoreHome.textContent = totalHome
    // color check
    updateScoreColors();
}

function homeAdd2() {
    totalHome += 2
    scoreHome.textContent = totalHome
    // color check
    updateScoreColors();
}

function homeAdd3() {
    totalHome += 3
    scoreHome.textContent = totalHome
    // color check
    updateScoreColors();
}

//Away Score Buttons

function awayAdd1() {
    totalAway += 1
    scoreAway.textContent = totalAway
    // color check
    updateScoreColors();
}

function awayAdd2() {
    totalAway += 2
    scoreAway.textContent = totalAway
    // color check
    updateScoreColors();
}

function awayAdd3() {
    totalAway += 3
    scoreAway.textContent = totalAway
    // color check
    updateScoreColors();
}

// Conditional Score Colors

function updateScoreColors() {
    
    //Reset Styles
    scoreHome.className = '';
    scoreAway.className = '';

    if (totalHome === totalAway) {
    scoreHome.classList.add('yellow');
    scoreAway.classList.add('yellow');
    } else if (totalHome > totalAway) {
    scoreHome.classList.add('green');
    scoreAway.classList.add('red');
    } else {
    scoreHome.classList.add('red');
    scoreAway.classList.add('green');
    }
}

// Reset Button
function resetScore() {
  totalHome = 0;
  totalAway = 0;
  scoreHome.textContent = 0;
  scoreAway.textContent = 0;
  updateScoreColors();
}