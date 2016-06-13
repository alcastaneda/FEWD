var humanScore = 0;
var computerScore = 0;

$('#rock').on('click', function () {
  play('rock');
});

$('#paper').on('click', function () {
  play('paper');
});

$('#scissors').on('click', function () {
  play('scissors');
});

function play(humanPlay) {
  
  computerPlay = getComputerPlay();
  
  $('#status').html('<p>You played <strong>' + humanPlay + '</strong>. The bot played <strong>' + computerPlay + '</strong>.</p>');
  
  if(humanPlay === computerPlay) {

      $('#status').html('<p>You tied. :|</p>');

  } else if (humanPlay === 'paper' && computerPlay === 'rock' ||
             humanPlay === 'rock' && computerPlay === 'scissors' ||
             humanPlay === 'scissors' && computerPlay === 'paper') {

    $('#status').html("<p>You win! :)</p>");

    humanScore++; 

  } else if (humanPlay === 'scissors' && computerPlay === 'rock' ||
             humanPlay === 'rock' && computerPlay === 'paper' ||
             humanPlay === 'paper' && computerPlay === 'scissors') {

      $('#status').html('<p>You lose. :(</p>');

      computerScore++;
  }
  
  $('#humanScore').html(humanScore);

  $('#computerScore').html(computerScore);  
}

function getComputerPlay() {
  // Store an array of options in the plays variable (we'll chat about arrays today)
  var plays = ['rock', 'paper', 'scissors'];

  // Select a random option from the plays array (don't focus on this line too much) and store it in the play variable
  var play = plays[Math.floor(Math.random() * plays.length)];

  return play;
}
