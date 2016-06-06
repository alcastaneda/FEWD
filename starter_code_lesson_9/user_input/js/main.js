
// When the user clicks on the #submit button
$("#submit").on('click', function(){
    var userNumber = $("#numberToAdd").val();

   userNumber = parseFloat(userNumber);

   userNumber += 5;

   $("#result").html(userNumber);
});
	// Get the value from #numberToAdd and store it in a variable called userNumber

	// Convert userNumber to a float. Store the result back in the userNumber variable. hint: use parseFloat(userNumber)

	// Add 5 to userNumber. Store the result in the userNumber variable.

	// Print the result in the #result element. (hint: you can use the html() method)
