$(function () {
	$(document).keypress(function (event) {
		event.preventDefault();
		switch (event.keyCode) {
			case 49:
				$("div").toggleClass( "botLeft", [1000] );
				break;

			case 50:
				$("div").toggleClass( "botMid", [1000] );
				break;

			case 51:
				$("div").toggleClass( "botRight", [1000] );
				break;

			case 52:
				$("div").toggleClass( "midLeft", [1000] );
				break;

			case 53:
				$("div").toggleClass( "midMid", [1000] );
				break;

			case 54:
				$("div").toggleClass( "midRight", [1000] );
				break;

			case 55:
				$("div").toggleClass( "topLeft", [1000] );
				break;

			case 56:
				$("div").toggleClass( "topMid", [1000] );
				break;

			case 57:
				$("div").toggleClass( "topRight", [1000] );
				break;
		}

	});
});
