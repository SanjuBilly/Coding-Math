window.onload = function(){
	var canvas = document.getElementById('canvas'),
		ctx = canvas.getContext("2d"),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight ;

		var cx = width/2 ,
			cy = height/2 , 
			baseRadius = 100 ,
			speed = 0.1 ,
			offset = 50,
			angle =0;

		render();

		function render() {
			var rad = baseRadius + Math.sin(angle)*offset ;

			ctx.clearRect(0,0,width,height);
			ctx.beginPath();
			ctx.arc(cx,cy,rad,0,2*Math.PI);
			ctx.fill();

			angle+=speed;

			window.requestAnimationFrame(render);
		}
};