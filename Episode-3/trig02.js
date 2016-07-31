window.onload = function(){
	var canvas = document.getElementById('canvas'),
		ctx = canvas.getContext("2d"),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight ;

		var cx = width/2 ,
			cy = height/2 , 
			speed = 0.1 ,
			offset = height*0.2,
			angle =0;

		render();

		function render() {
			var y = cy + Math.sin(angle)*offset ;

			ctx.clearRect(0,0,width,height);
			ctx.beginPath();
			ctx.arc(cx,y,20,0,2*Math.PI);
			ctx.fill();

			angle+=speed;

			window.requestAnimationFrame(render);
		}
};