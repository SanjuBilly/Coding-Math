window.onload = function(){
	var canvas = document.getElementById('canvas'),
		ctx = canvas.getContext("2d"),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight ;

		ctx.translate(0,height/2);
		ctx.scale(1,-1);

	for(var a = 0 ; a< Math.PI *2 ; a+=0.01){
		var x = a*200,
			y = Math.sin(a)*200;

		ctx.fillRect(x,y,6,6);
	}
};