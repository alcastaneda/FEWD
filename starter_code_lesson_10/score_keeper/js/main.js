// Fix the score keeper so that the reset, +5, +10, -1 and -5 buttons work.
// We want to print out the total number of points when the user clicks one of the buttons
var result = 0; 

$('#reset').on('click', function () {
  result = 0;
  $('#currentTotal').html(result);
});

$('#add5').on('click', function () {
  result = result + 5;
  $('#currentTotal').html(result);
});

$('#add10').on('click', function () {
  result = result + 10;
  $('#currentTotal').html(result);
});

$('#sub1').on('click', function () {
  result = result - 1;
  $('#currentTotal').html(result);
});

$('#sub5').on('click', function () {
  result = result - 5;
  $('#currentTotal').html(result);
});
