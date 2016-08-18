//CC gameEniger.
(function(){

	window.requestAnimFrame = (function(){
	return  window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimtionFrame ||
			window.oRequestAnimationFrame ||
			window.msRequestAnimationFrame || 
			function(callback){
				setTimeout(callback,1000/60);
			}
	})();

	var lastTime = Date.now();
	var delta = 0,cvs,ctx,renderFn,frameRate = 20,frameRateDt;

	/**
	 * [setup CC setup]
	 * @param  {[type]} canvas     
	 * @param  {[type]} _renderFn  
	 * @param  {[type]} _frameRate default 20
	 * @return {[type]}           
	 */
	function setup(canvas,_renderFn,_frameRate){
		
		cvs = canvas;
		ctx = cvs.getContext('2d');
		frameRate = _frameRate || frameRate;
		frameRateDt = 1000/frameRate;

		renderFn = _renderFn || function(ctx){};
		_render();
	}


	 function _render(){
		var now = Date.now();
		delta = (now - lastTime);
		
		if(delta > frameRateDt) {

			ctx.clearRect(0,0,cvs.width,cvs.height);
			renderFn(ctx);

			lastTime = now;  
		}
		
	    requestAnimFrame(_render);
	}
	
	window.CC = {
		setup:setup,
		renderFn:renderFn,
		frameRate:frameRate,
		delta:delta,
	}
})();