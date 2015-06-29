$(function(){

    // Just checking to see if we could track mouse coordinates
	$(".map-container").on( "mousemove", function(event){

		$("#log").text("pageX : " + event.pageX + ", pageY : " + event.pageY);
	});


//========================== Dynamic Markers ==============================//
        
	$(".map-container").on("click", function(event){
		
        // Store x/y coordinates 
        var x = event.pageX;
		var y = event.pageY;
		
        // Store marker elements as a jQuery object
        var markDot = $("<div class='marker-container clearfix'><div class='marker'></div><div class='input-container'><input class='input-field'></div></div>").css({

            top     : (y - 14) + "px",
            left    : (x - 13) + "px"
        });

        // Check if we are clicking on a previous marker and/or input container
        if ( !$(event.target).hasClass('marker') && !$(event.target).hasClass('input-field') &&  !$(event.target).hasClass('input-container'))

        // If we didn't click on a marker, add the new marker
        $(".map-container").append(markDot);
	});

//========================== Dynamic Modification ==========================//
        
    // Hide input container & Transfer text from input-field to input container
    $('.map-container').on('change', '.input-field', function(){

        var inputText = $(this).val();

        $(this).parent().hide();
        $(this).parent().addClass('dynamic-background');
        $(this).parent().addClass('padding');

        $(this).parent().text(inputText); //-> this smashes the input into nothingness we are adding and removing the input-fields each time

    });

    // Edit input area in place -- NOT USED FOR THE EXERCISE
    // $('.map-container').on('click', '.input-container', function(){

    //     // If we are NOT clicking on something with the class 'input-field', we will add the <input class='input-field'> -> initially hidden
    //     if( !$(event.target).hasClass('input-field') ){

    //         $(this).html("<input class='input-field'>");
    //     };
    // });

    // Hover to un-hide input-container div and text
    $('.map-container').on('mousemove', '.marker', function(){

        $(this).siblings('.input-container').show(700);
    });

    //Hide on mouseout if there is text in the input field
    $('.map-container').on('mouseout', '.marker', function(){

        if( $(this).siblings('.input-container').text().length !== 0){

            $(this).siblings('.input-container').hide(700);
        }
    });


    // Remove the whole marker
    $('.map-container').on('click', '.marker', function(){

        // If we click on existing marker -> delete the whole marker container
        $(this).parent().remove();
    });
});
