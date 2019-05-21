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
$("#power3").click(function(){
  counter = counter.pow(3);
  $("#counter").text(counter);
});
$("#power4").click(function(){
  counter = counter.pow(4);
  $("#counter").text(counter);
});
$("#power5").click(function(){
  counter = counter.pow(5);
  $("#counter").text(counter);
});
$("#power6").click(function(){
  counter = counter.pow(6);
  $("#counter").text(counter);
});
$("#power7").click(function(){
  counter = counter.pow(7);
  $("#counter").text(counter);
});
$("#power8").click(function(){
  counter = counter.pow(8);
  $("#counter").text(counter);
});
$("#power9").click(function(){
  counter = counter.pow(9);
  $("#counter").text(counter);
});
$("#power10").click(function(){
  counter = counter.pow(10);
  $("#counter").text(counter);
});
// Tetration.
$("#tetr2").click(function(){
  counter = counter.tetr(2);
  $("#counter").text(counter);
});
$("#tetr3").click(function(){
  counter = counter.tetr(3);
  $("#counter").text(counter);
});
$("#tetr4").click(function(){
  counter = counter.tetr(4);
  $("#counter").text(counter);
});
$("#tetr5").click(function(){
  counter = counter.tetr(5);
  $("#counter").text(counter);
});
$("#tetr6").click(function(){
  counter = counter.tetr(6);
  $("#counter").text(counter);
});
$("#tetr7").click(function(){
  counter = counter.tetr(7);
  $("#counter").text(counter);
});
$("#tetr8").click(function(){
  counter = counter.tetr(8);
  $("#counter").text(counter);
});
$("#tetr9").click(function(){
  counter = counter.tetr(9);
  $("#counter").text(counter);
});
$("#tetr10").click(function(){
  counter = counter.tetr(10);
  $("#counter").text(counter);
});
// Pentation.
$("#pent2").click(function(){
  counter = counter.pent(2);
  $("#counter").text(counter);
});
$("#pent2").click(function(){
  counter = counter.pent(2);
  $("#counter").text(counter);
});
$("#pent3").click(function(){
  counter = counter.pent(3);
  $("#counter").text(counter);
});
$("#pent4").click(function(){
  counter = counter.pent(4);
  $("#counter").text(counter);
});
$("#pent5").click(function(){
  counter = counter.pent(5);
  $("#counter").text(counter);
});
$("#pent6").click(function(){
  counter = counter.pent(6);
  $("#counter").text(counter);
});
$("#pent7").click(function(){
  counter = counter.pent(7);
  $("#counter").text(counter);
});
$("#pent8").click(function(){
  counter = counter.pent(8);
  $("#counter").text(counter);
});
$("#pent9").click(function(){
  counter = counter.pent(9);
  $("#counter").text(counter);
});
$("#pent10").click(function(){
  counter = counter.pent(10);
  $("#counter").text(counter);
});
// Reset
$("#reset").click(function(){
  counter = OmegaNum(0);
  $("#counter").text(counter);
});
