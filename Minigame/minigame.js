$(function () {
	$(document).keypress(function (event) {
		event.preventDefault();
		switch (event.keyCode) {
			case 49:
				$("div").removeClass().addClass( "botLeft")
				break;

			case 50:
				$("div").removeClass().addClass( "botMid");
				break;

			case 51:
				$("div").removeClass().addClass( "botRight");
				break;

			case 52:
				$("div").removeClass().addClass( "midLeft");
				break;

			case 53:
				$("div").removeClass().addClass( "midMid");
				break;

			case 54:
				$("div").removeClass().addClass( "midRight");
				break;

			case 55:
				$("div").removeClass().addClass( "topLeft");
				break;

			case 56:
				$("div").removeClass().addClass( "topMid");
				break;

			case 57:
				$("div").removeClass().addClass( "topRight");
				break;
		}

	});
});
