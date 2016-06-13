// When the user clicks on #submit
$('#submit').on('click', function () {

  var num1 = $('#num1').val();
  num1 = parseFloat(num1);

  var num2 = $('#num2').val();
  num2 = parseFloat(num2);

  if (num1 === num2) {
    $('#comparison').html('=');
  } else if (num1 < num2) {
    $('#comparison').html('<');
  } else {
    $('#comparison').html('>');
  }

});
