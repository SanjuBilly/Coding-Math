window.onload = function(){
	var canvas = document.getElementById('canvas'),
		ctx = canvas.getContext("2d"),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight ;

		var cx = width/2 ,
			cy = height/2 , 
			xSpeed = 0.1 ,
			ySpeed = 0.131 ,
			xradius = 160 ,
			yradius = 320 ,
			offset = height*0.2,
			xAngle = 0 ,
			yAngle = 0 ,
			x , y;

		render();

		function render() {
			 x = cx + xradius*Math.cos(xAngle) ;
			 y = cy + Math.sin(yAngle)*xradius ;

			ctx.clearRect(0,0,width,height);
			ctx.beginPath();
			ctx.arc(x,y,10,0,2*Math.PI);
			ctx.fill();

			xAngle+=xSpeed;
			yAngle+=ySpeed;

			window.requestAnimationFrame(render);
		}
};