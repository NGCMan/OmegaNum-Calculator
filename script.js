// Set counter default to zero
var counter = OmegaNum(2)

// Display total
$("#counter").text(counter);

// When button is clicked
$("#add2").click(function(){
  //Add 10 to counter
  counter = counter.mul(2);
	// Display total
	$("#counter").text(counter);
});
$("#add3").click(function(){
  //Add 10 to counter
  counter = counter.mul(3);
	// Display total
	$("#counter").text(counter);
});
$("#add4").click(function(){
  //Add 10 to counter
  counter = counter.mul(4);
	// Display total
	$("#counter").text(counter);
});
$("#add5").click(function(){
  //Add 10 to counter
  counter = counter.mul(5);
	// Display total
	$("#counter").text(counter);
});
$("#add6").click(function(){
  //Add 10 to counter
  counter = counter.mul(6);
	// Display total
	$("#counter").text(counter);
});

//Subtract
$("#subtract").click(function(){
  counter = counter - 10;
  $("#counter").text(counter);
});


// Reset
$("#reset").click(function(){
  counter = OmegaNum(2);
  $("#counter").text(counter);
});
