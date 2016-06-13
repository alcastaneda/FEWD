
// -------------------------------------------------------------------------------
// Part 1 - Declaring and calling functions
// -------------------------------------------------------------------------------

// 1. Declare a function. Give it the name "addSunshine".
  // a. Inside the function, add the sunny class to the body
function addSunshine(){
  $('body').addClass('sunny')
};
// 2. Call the function


addSunshine();

// -------------------------------------------------------------------------------
// Part 2 - Predicting outcomes
// -------------------------------------------------------------------------------

// ---- A ------

// Look at the below function. Predict what will happen when the function is called.

function sayHello (name) {
  var greeting = "Hello " + name;

  $('.greeting').html(greeting);
}

sayHello("Ashlei");


// ---- B ------

// Look at the below function. Predict what will happen when the function is called.

function hotOrNot (temp) {
  if (temp > 75) {
    $('.hot').fadeIn();
  } else {
    $('.not-hot').fadeIn();
  }
}

hotOrNot(76);



// ---- C ------

// Look at the below function. Predict what will happen when the function is called.
function compare (num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    $('.greatest').html(num1);
  } else if (num2 > num1 && num2 > num3) {
    $('.greatest').html(num2);
  } else {
    $('.greatest').html(num3)
  }
}

compare(4, 11, 15);



// -------------------------------------------------------------------------------
// Part 3 - Return values
// -------------------------------------------------------------------------------

// 1. Declare a function. Give it the name "square". It should take one parameter, number.
  // a. Inside the function, return square * square.

function square(number){
  return number * number;
};
// 2. Declare a variable mySquare.
      //Assign it the value returned by calling the
      //square function and passing in 5 as the parameter.
var mySquare = square(5);

// 3. Display the value of mySquare in the element with the class .my-square
$(".my-square").html(mySquare);
