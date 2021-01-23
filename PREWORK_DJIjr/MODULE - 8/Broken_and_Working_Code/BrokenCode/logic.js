$("#factButton").on("click", function() {

	var number = Math.floor((Math.random() * booFactArray.length));

		$("#factText").text(booFactArray[number])
})

var booFactArray = ["Boo is a pomeranian", "Boo's best friend is another pomeranian named Buddy", "Boo the Pomeranian was born on March 16, making him a Pisces", "Boo's favourite food is grass", "Boo has released two books" ]


//fun text
$("#textPink").on("click", function() {

	$("#funText").css("color", "pink")
})

$("#textOrange").on("click", function() {

	$("#funText").css("color", "orange")
})

$("#textGreen").on("click", function() {

	$("#funText").css("color", "green")
})


//shrink/grow
$("#boxGrow").on("click", function() {

	$("#box").animate({height:"+=35px",	width:"+=35px"}, "fast");
})

$("#boxShrink").on("click", function() {

	$("#box").animate({height:"-=35px", width:"-=35px"}, "fast");
})


//lines 1 - 40  adjusted all spacing and indentations for code neatness 
//Added the word array to boofact button varient for better identification
//line 8 correct "" placement needed in the varient for each fact in order to work properly
// line 14 added "" around the word pink so function would work 
