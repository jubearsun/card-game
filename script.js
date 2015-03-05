$(document).ready(function () {
    var suits = [
    	"spades",
    	"hearts",
    	"diamonds",
    	"clubs"
    ]

    var values = [
    	"A",
    	"K",
    	"Q",
    	"J",
    	"2",
    	"3",
    	"4",
    	"5", 
    	"6", 
    	"7", 
    	"8", 
    	"9", 
    	"10",
    ]

    for (i = 1; i < 6; i += 1) {
    	var randomSuit = Math.floor((Math.random() * 4));
		var randomNumber = Math.floor((Math.random() * 13));

		var firstCat = "#c" + i + "-text"
		var secondCat = "#c" + i + "-suit"

		$(firstCat).html(values[randomNumber]);
		$(secondCat).html(suits[randomSuit]);

    }

    var curNum = 0;

    $("#button").click(function() {
    	curNum += 1;
    	if (curNum == 1) {
    		$("#card-1").css('visibility', 'visible');
    		$("#card-2").css('visibility', 'visible');
    		$("#card-3").css('visibility', 'visible');
    	} else if (curNum == 2) {
    		$("#card-4").css('visibility', 'visible');
    	} else {
    		$("#card-5").css('visibility', 'visible');
    	}
    });

});

