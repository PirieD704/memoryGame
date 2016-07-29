
var cards = [
	'<img src="img/catViking.jpg">',
	'<img src="http://place-hoff.com/300/350">',
	'<img src="img/catViking.jpg">',
	'<img src="http://place-hoff.com/300/350">'
];

$(document).ready(function(){

	var gridSize = 16;



	var card = '<img src="img/catViking.jpg">';

	var mgHTML = '';
	for(var i = 0; i < gridSize; i++){
		if(i < 1){
			card = cards[0];
		}else{card = cards[i];
		}
		mgHTML += '<div class="mg-tile col-sm-3">';
			mgHTML += '<div class="mg-tile-inner">';
				mgHTML += '<div class="mg-front">' + card + '</div>';
				mgHTML += '<div class="mg-back"></div>';
			mgHTML += '</div>';
		mgHTML += '</div>';
	}

		$('.mg-contents').html(mgHTML);

		$(document).ready(function(){
		$('.mg-tile-inner').click(function(){
			$(this).toggleClass('flip');
			var cardsUp = $('.flip');
			if(cardsUp.length == 2){
				// check to see if they are the same
				if(cardsUp.find('img')[0].src == cardsUp.find('img')[1].src){
					// the pictures are the same. this is a match!
					console.log("two cards up!");
					carsUp.addClass('matched');
				}else{
					// the user has flipped two cards, and they don't match.
					setTimeout(function(){
						cardsUp.removeClass('flip');
					}, 1000)

				}
			}
		});
	});

});