window.onload = function(){
	var canvas = document.getElementById('canvas'),
		ctx = canvas.getContext("2d"),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight ;

		var cx = width/2 ,
			cy = height/2 , 
			baseAlpha = 0.5 ,
			speed = 0.1 ,
			offset = 0.5,
			angle =0;

		render();

		function render() {
			var alpha = baseAlpha + Math.sin(angle)*offset ;

			ctx.fillStyle = "rgba(0,0,0,"+alpha+")";
			ctx.clearRect(0,0,width,height);
			ctx.beginPath();
			ctx.arc(cx,cy,50,0,2*Math.PI);
			ctx.fill();

			angle+=speed;

			window.requestAnimationFrame(render);
		}
};