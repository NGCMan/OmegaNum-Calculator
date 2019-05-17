// Set counter default to zero
var counter = OmegaNum(0)

// Display total
$("#counter").text(counter);

// When button is clicked
$("#add1").click(function(){
  //Add 1 to counter
  counter = counter.add(1);
	// Display total
	$("#counter").text(counter);
});
$("#mult2").click(function(){
  //Add 10 to counter
  counter = counter.mul(2);
	// Display total
	$("#counter").text(counter);
});
$("#mult3").click(function(){
  //Add 10 to counter
  counter = counter.mul(3);
	// Display total
	$("#counter").text(counter);
});
$("#mult4").click(function(){
  //Add 10 to counter
  counter = counter.mul(4);
	// Display total
	$("#counter").text(counter);
});
$("#mult5").click(function(){
  //Add 10 to counter
  counter = counter.mul(5);
	// Display total
	$("#counter").text(counter);
});
$("#mult6").click(function(){
  //Add 10 to counter
  counter = counter.mul(6);
	// Display total
	$("#counter").text(counter);
});
$("#mult7").click(function(){
  //Add 10 to counter
  counter = counter.mul(7);
	// Display total
	$("#counter").text(counter);
});
$("#mult8").click(function(){
  //Add 10 to counter
  counter = counter.mul(8);
	// Display total
	$("#counter").text(counter);
});
$("#mult9").click(function(){
  //Add 10 to counter
  counter = counter.mul(9);
	// Display total
	$("#counter").text(counter);
});
$("#mult10").click(function(){
  //Add 10 to counter
  counter = counter.mul(10);
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
