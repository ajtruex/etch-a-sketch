var $container = $('<div class="container"></div>');
$container.insertAfter('header');

var $button = $('<button class="clear">Reset</button>').appendTo('header');


var color = function(){
$('.box').on('mouseover', function(){
	$(this).css('background', 'blue');
	})
};

var panes = 16;
var create_grid = function(panes){
var boxSize = Math.floor(960/panes);
for (var i = 0; i < (panes*panes); i++){
	var $div = $("<div class='box' style='width:" + boxSize + "px; height:" + boxSize + "px;'></div>").appendTo('.container');
	};
};



$('button').click(function() {
	$('.box').remove();
	panes = prompt('How many squares per side for new grid?');
	create_grid(panes);
	color();
});

create_grid(16);
color();