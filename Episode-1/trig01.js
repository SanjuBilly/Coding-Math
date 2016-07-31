window.onload = function(){
	var canvas = document.getElementById('canvas'),
		ctx = canvas.getContext("2d"),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight ;

	for(i=0;i<100;i++){
		ctx.beginPath();
		ctx.moveTo(Math.random() * width,Math.random() * height);
		ctx.lineTo(Math.random() * width,Math.random() * height);
		ctx.stroke();
	}
};