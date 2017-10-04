$(document).ready(function() {

	$("aside li:nth-child(2) a").mouseover(function(){
		$("aside ul").attr("class", "second");
	});
	$("aside li:nth-child(2) a").mouseout(function(){
		$("aside ul").attr("class", "first");
	});

	$("aside li:nth-child(3) a").mouseover(function(){
		$("aside ul").attr("class", "third");
	});
	$("aside li:nth-child(3) a").mouseout(function(){
		$("aside ul").attr("class", "first");
	});

	$("aside li:nth-child(4) a").mouseover(function(){
		$("aside ul").attr("class", "fourth");
	});
	$("aside li:nth-child(4) a").mouseout(function(){
		$("aside ul").attr("class", "first");
	});

	$("aside li:nth-child(5) a").mouseover(function(){
		$("aside ul").attr("class", "fifth");
	});
	$("aside li:nth-child(5) a").mouseout(function(){
		$("aside ul").attr("class", "first");
	});

	$("aside li:nth-child(6) a").mouseover(function(){
		$("aside ul").attr("class", "sixth");
	});
	$("aside li:nth-child(6) a").mouseout(function(){
		$("aside ul").attr("class", "first");
	});

	$("aside li:nth-child(7) a").mouseover(function(){
		$("aside ul").attr("class", "seventh");
	});
	$("aside li:nth-child(7) a").mouseout(function(){
		$("aside ul").attr("class", "first");
	});

	$("aside li:nth-child(8) a").mouseover(function(){
		$("aside ul").attr("class", "eighth");
	});
	$("aside li:nth-child(8) a").mouseout(function(){
		$("aside ul").attr("class", "first");
	});

	$("aside li:nth-child(9) a").mouseover(function(){
		$("aside ul").attr("class", "nineth");
	});
	$("aside li:nth-child(9) a").mouseout(function(){
		$("aside ul").attr("class", "first");
	});

	$("aside li:nth-child(10) a").mouseover(function(){
		$("aside ul").attr("class", "tenth");
	});
	$("aside li:nth-child(10) a").mouseout(function(){
		$("aside ul").attr("class", "first");
	});

});


$(document).ready(function(){
	var $container = $(".item-container");
		$container.imagesLoaded(function () {
			$container.masonry({
				columnWidth: ".item",
			itemSelector: ".item"
		});
	});
});











