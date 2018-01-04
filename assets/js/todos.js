//Check off specific to do list by clicking

$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type = 'text']").keypress(function(){
	if (event.which == 13){
		// take input text
		var todotext = $(this).val();
		$(this).val("");
		// create new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todotext + "</li>")
	}
});

$(".fa-pencil").click(function(){
	$("input[type = 'text']").fadeToggle();
});



