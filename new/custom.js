$(document).ready(function(){
	var autoCloseCall;

	function showWindow(){
		$('#main').show();
		$('html body').css('overflow','hidden');

		// window will close after 2s  
		autoCloseCall = setTimeout(hideWindow,5000);
	}

	//showWindow()


	function hideWindow(){
		$('#main').hide();
		$('html body').css('overflow','scroll');
	}
	//hideWindow()

	// after 2s window will show automatically
	setTimeout(showWindow,2000);



	// close after click

	$("#close-btn").click(function(){
		hideWindow();
		clearTimeout(autoCloseCall);
	})


})