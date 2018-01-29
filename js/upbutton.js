$(document).ready(function(){

    $('.button-collapse').sideNav();

 //    var $buttonFooter = $("#up_button_footer");
    var $htmlBody = $("html, body");

  	$("#up_button_footer").click(function() {
  		if($(window).scrollTop() !== 0) {	  		
			$htmlBody.animate({ scrollTop: 0 }, "slow", function() {
				// $buttonFooter.children().html("info_outline")				
			});		
		}
	});

	// $buttonFooter.mouseenter(function() {
	// 	if($(window).scrollTop() !== 0) {
 //  			$buttonFooter.children().html("keyboard_arrow_up")
 //  		}
	// });

	// $buttonFooter.mouseout(function() {
 //  		$buttonFooter.children().html("info_outline")
	// });

}); // end of document ready