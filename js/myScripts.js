$("#education, #work-experience, #skills, #references").hide();

$("h4:nth-of-type(1)").click(function(){
	$("#education").toggle();
});

$("h4:nth-of-type(2)").click(function(){
	$("#work-experience").toggle();
});

$("h4:nth-of-type(3)").click(function(){
	$("#skills").toggle();
});

$("h4:nth-of-type(4)").click(function(){
	$("#references").toggle();
});