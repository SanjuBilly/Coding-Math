window.onload = function(){
	var canvas = document.getElementById('canvas'),
		ctx = canvas.getContext("2d"),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight ;

		var cx = width/2 ,
			cy = height/2 , 
			speed = 0.1 ,
			xradius = 160 ,
			yradius = 320 ,
			offset = height*0.2,
			angle =0,
			x , y;

		render();

		function render() {
			 x = cx + xradius*Math.cos(angle) ;
			 y = cy + Math.sin(angle)*yradius ;

			ctx.clearRect(0,0,width,height);
			ctx.beginPath();
			ctx.arc(x,y,10,0,2*Math.PI);
			ctx.fill();

			angle+=speed;

			window.requestAnimationFrame(render);
		}
};