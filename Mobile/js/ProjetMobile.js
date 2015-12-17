/*$(document).ready(function(){
	$('.bouton').click(function(){
		$('.menu').animate({
			left: "0px"
		}, 200);
		$('.bouton').animate({
			left:"285px"
		});

		$(".rotate").toggleClass("down")  ;
	});
 


})*/

$(document).ready(function(){
	$(".bouton").click(function(){
		var $btn = $(this);
		var count = ($btn.data("click_count") || 0) + 1;
		$btn.data("click_count", count);
		if ( count % 2 == 0 ){
			$('.menu').animate({
				left: "-285px"
			}, 200);
			$('.bouton').animate({
				left:"20px"
			});
			/*$(".rotate").toggleClass("down");*/
		}
		else{
			$('.menu').animate({
				left: "0px"
			}, 200);
			$('.bouton').animate({
				left:"250px"
			});
			/*$(".rotate").toggleClass("down");*/
		}

	$(".croix").click(function(){
					$('.menu').animate({
				left: "-285px"
			}, 200);
			$('.bouton').animate({
				left:"20px"
			});
	})

});


})
