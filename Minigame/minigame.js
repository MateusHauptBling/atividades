$(function () {

	function changeObject(classe) {
		$('div').removeClass(function (index, className) {
			return (className.match(/circle|cirquare/g) || []).join('');
		}).addClass(classe);
	}
	function changePosition(classe) {
		$('div').removeClass(function (index, className) {
			return (className.match(/(^|\s)(bot|mid|top)\S+/g) || []).join('');
		}).addClass(classe);
	}


	$(document).keypress(function (event) {
		event.preventDefault();

		switch (event.keyCode) {
			case 49:
				changePosition('botLeft');
				changeObject('');
				break;

			case 50:
				changePosition('botMid');
				changeObject('circle');
				break;

			case 51:
				changePosition('botRight');
				changeObject('cirquare');
				break;

			case 52:
				changePosition('midLeft');
				changeObject('cirquare');
				break;

			case 53:
				changePosition('midMid');
				changeObject('');
				break;

			case 54:
				changePosition('midRight');
				changeObject('circle')
				break;

			case 55:
				changePosition('topLeft');
				changeObject('circle');
				break;

			case 56:
				changePosition('topMid');
				changeObject('cirquare');
				break;

			case 57:
				changePosition('topRight');
				changeObject('');
				break;

			case 42:
				$('div').removeClass('giroEsq').addClass('giroDir');
				break;
			case 47:
				$('div').removeClass('giroDir').addClass('giroEsq');
				break;
			case 46:
				$('div').removeClass('giroDir giroEsq');
				break;
		}

	});
});
