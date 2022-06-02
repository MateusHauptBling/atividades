$(function () {
	$(document).keypress(function (event) {
		event.preventDefault();
		switch (event.keyCode) {
			case 49:
				$("div").removeClass().toggleClass( "botLeft")
				break;

			case 50:
				$("div").removeClass().toggleClass( "botMid");
				break;

			case 51:
				$("div").removeClass().toggleClass( "botRight");
				break;

			case 52:
				$("div").removeClass().toggleClass( "midLeft");
				break;

			case 53:
				$("div").removeClass().toggleClass( "midMid");
				break;

			case 54:
				$("div").removeClass().toggleClass( "midRight");
				break;

			case 55:
				$("div").removeClass().toggleClass( "topLeft");
				break;

			case 56:
				$("div").removeClass().toggleClass( "topMid");
				break;

			case 57:
				$("div").removeClass().toggleClass( "topRight");
				break;
		}

	});
});
