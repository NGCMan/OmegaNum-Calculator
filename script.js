// Set counter default to zero
var counter = OmegaNum(0)

// Display total
$("#counter").text(counter);

// When button is clicked
$("#add1").click(function(){
  //Counter
  counter = counter.add(1);
	// Display total
	$("#counter").text(counter);
});
$("#add2").click(function(){
  //Counter
  counter = counter.add(2);
	// Display total
	$("#counter").text(counter);
});
$("#add3").click(function(){
  //Counter
  counter = counter.add(3);
	// Display total
	$("#counter").text(counter);
});
$("#add4").click(function(){
  //Counter
  counter = counter.add(4);
	// Display total
	$("#counter").text(counter);
});
$("#add5").click(function(){
  //Counter
  counter = counter.add(5);
	// Display total
	$("#counter").text(counter);
});
$("#add6").click(function(){
  //Counter
  counter = counter.add(6);
	// Display total
	$("#counter").text(counter);
});
$("#add7").click(function(){
  //Counter
  counter = counter.add(7);
	// Display total
	$("#counter").text(counter);
});
$("#add8").click(function(){
  //Counter
  counter = counter.add(8);
	// Display total
	$("#counter").text(counter);
});
$("#add9").click(function(){
  //Counter
  counter = counter.add(9);
	// Display total
	$("#counter").text(counter);
});
$("#add10").click(function(){
  //Counter
  counter = counter.add(10);
	// Display total
	$("#counter").text(counter);
});
$("#mult2").click(function(){
  //Counter
  counter = counter.mul(2);
	// Display total
	$("#counter").text(counter);
});
$("#mult3").click(function(){
  //Counter
  counter = counter.mul(3);
	// Display total
	$("#counter").text(counter);
});
$("#mult4").click(function(){
  //Counter
  counter = counter.mul(4);
	// Display total
	$("#counter").text(counter);
});
$("#mult5").click(function(){
  //Counter
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
$("#sub1").click(function(){
  counter = counter.sub(1);
  $("#counter").text(counter);
});
$("#sub2").click(function(){
  counter = counter.sub(2);
  $("#counter").text(counter);
});
$("#sub3").click(function(){
  counter = counter.sub(3);
  $("#counter").text(counter);
});
$("#sub4").click(function(){
  counter = counter.sub(4);
  $("#counter").text(counter);
});
$("#sub5").click(function(){
  counter = counter.sub(5);
  $("#counter").text(counter);
});
$("#sub6").click(function(){
  counter = counter.sub(6);
  $("#counter").text(counter);
});
$("#sub7").click(function(){
  counter = counter.sub(7);
  $("#counter").text(counter);
});
$("#sub8").click(function(){
  counter = counter.sub(8);
  $("#counter").text(counter);
});
$("#sub9").click(function(){
  counter = counter.sub(9);
  $("#counter").text(counter);
});
$("#sub10").click(function(){
  counter = counter.sub(10);
  $("#counter").text(counter);
});

// Powers.
$("#power2").click(function(){
  counter = counter.pow(2);
  $("#counter").text(counter);
});
// Tetration.
$("#tetr2").click(function(){
  counter = counter.tetr(2);
  $("#counter").text(counter);
});
// Pentation.
$("#pent2").click(function(){
  counter = counter.pent(2);
  $("#counter").text(counter);
});
// Reset
$("#reset").click(function(){
  counter = OmegaNum(0);
  $("#counter").text(counter);
});
