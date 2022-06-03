$(function () {

	function alteraPosicao(classe) {
		$("div").removeClass(function (index, className) {
			return (className.match(/(^|\s)(bot|mid|top)\S+/g) || []).join('');
		}).addClass(classe);
	}

	$(document).keypress(function (event) {
		event.preventDefault();

		switch (event.keyCode) {
			case 49:
				alteraPosicao("botLeft");
				break;

			case 50:
				alteraPosicao("botMid");
				break;

			case 51:
				alteraPosicao("botRight");
				break;

			case 52:
				alteraPosicao("midLeft");
				break;

			case 53:
				alteraPosicao("midMid");
				break;

			case 54:
				alteraPosicao("midRight");
				break;

			case 55:
				alteraPosicao("topLeft");
				break;

			case 56:
				alteraPosicao("topMid");
				break;

			case 57:
				alteraPosicao("topRight");
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
