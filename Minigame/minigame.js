$(function () {
	$(document).keypress(function (event) {
		event.preventDefault();
		switch (event.keyCode) {
			case 49:
				$("div").removeClass(function (index, className) {
					return (className.match(/(^|\s)(bot|mid|top)\S+/g) || []).join('');
				}).addClass("botLeft");
				break;

			case 50:
				$("div").removeClass(function (index, className) {
					return (className.match(/(^|\s)(bot|mid|top)\S+/g) || []).join('');
				}).addClass("botMid");
				break;

			case 51:
				$("div").removeClass(function (index, className) {
					return (className.match(/(^|\s)(bot|mid|top)\S+/g) || []).join('');
				}).addClass("botRight");
				break;

			case 52:
				$("div").removeClass(function (index, className) {
					return (className.match(/(^|\s)(bot|mid|top)\S+/g) || []).join('');
				}).addClass("midLeft");
				break;

			case 53:
				$("div").removeClass(function (index, className) {
					return (className.match(/(^|\s)(bot|mid|top)\S+/g) || []).join('');
				}).addClass("midMid");
				break;

			case 54:
				$("div").removeClass(function (index, className) {
					return (className.match(/(^|\s)(bot|mid|top)\S+/g) || []).join('');
				}).addClass("midRight");
				break;

			case 55:
				$("div").removeClass(function (index, className) {
					return (className.match(/(^|\s)(bot|mid|top)\S+/g) || []).join('');
				}).addClass("topLeft");
				break;

			case 56:
				$("div").removeClass(function (index, className) {
					return (className.match(/(^|\s)(bot|mid|top)\S+/g) || []).join('');
				}).addClass("topMid");
				break;

			case 57:
				$("div").removeClass(function (index, className) {
					return (className.match(/(^|\s)(bot|mid|top)\S+/g) || []).join('');
				}).addClass("topRight");
				break;

			case 42:
				$("div").removeClass("giroEsq").addClass("giroDir");
				break;
			case 47:
				$("div").removeClass("giroDir").addClass("giroEsq");
				break;
			case 46:
				$("div").removeClass("giroDir giroEsq");
				break;
		}

	});
});
