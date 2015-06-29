$(function(){

	$(".map-container").on( "mousemove", function(event){


		$("#log").text("pageX : " + event.pageX + ", pageY : " + event.pageY);

	})

	$(".map-container").on("click", function(event){
		var x = event.pageX;
		var y = event.pageY;
		
        var markDot = $("<div class='marker></div>").css({

            top     : (y - 12) + "px",
            left    : (x - 12) + "px"
        })

        $(".map-container").append(markDot);



	})










});
