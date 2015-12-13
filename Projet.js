function Scroll(){
			var top = document.getElementById('image');
			var ypos = window.pageYOffset;
			if(ypos > 325) {
				top.style.opacity = "1"
			}
			else {
				top.style.opacity ="0"
			}
			
		} window.addEventListener("scroll", Scroll)

		function Scroll2(){
			var top2 = document.getElementById('image2');
			var ypos2 = window.pageYOffset;
			if(ypos2 > 600) {
				top2.style.opacity = "1"
			}
			else {
				top2.style.opacity ="0"
			}
			
		} window.addEventListener("scroll", Scroll2)

		function Scroll3(){
			var top3 = document.getElementById('image3');
			var ypos3 = window.pageYOffset;
			if(ypos3 > 1000) {
				top3.style.opacity = "1"
			}
			else {
				top3.style.opacity ="0"
			}
			
		} window.addEventListener("scroll", Scroll3)

		function Scroll4(){
			var top4 = document.getElementById('image4');
			var ypos4 = window.pageYOffset;
			if(ypos4 > 1370) {
				top4.style.opacity = "1"
			}
			else {
				top4.style.opacity ="0"
			}
			
		} window.addEventListener("scroll", Scroll4)
