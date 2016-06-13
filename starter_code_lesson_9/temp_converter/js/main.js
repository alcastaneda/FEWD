var fahrenheit;
var celsius;

function convertFahrenheitToCelsius(input){
  fahrenheit = parseFloat(input);

  celsius = (fahrenheit - 32) / 1.8;
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
  celsius = celsius.toFixed(2);
};

function convertCelsiusToFahrenheit(input){
  celsius = parseFloat(input);

  var fahrenheit = 1.8 * celsius + 32;
  fahrenheit = fahrenheit.toFixed(2);
};

function changeBackgroundColor(){
  if (fahrenheit>=70) {
    console.log("hot");
    $("body").css({
      "background-color": 'red'
    });
  } else{
        $("body").css({
      "background-color": 'blue'
    });
  }
};

$('#fahrenheit_to_celsius').on('click', function () {

  fahrenheit = $('#temperature').val();
  convertFahrenheitToCelsius(fahrenheit);

  // Hint: http://dev.w3.org/html5/html-author/charref
  $("#result").html(fahrenheit + "&deg;F = " + celsius + "&deg;C");
  changeBackgroundColor();
  $('#temperature').val('');
});

$('#celsius_to_fahrenheit').on('click', function () {
  celsius = $('#temperature').val();

  convertCelsiusToFahrenheit(celsius);

  $("#result").html(celsius + "&deg;C = " + fahrenheit + "&deg;F");
  changeBackgroundColor();
  $('#temperature').val('');
});


