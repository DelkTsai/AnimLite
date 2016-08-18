window.noop = function(){};
window.offloadFn = function(fn){var _fn = fn||noop;setTimeout(_fn,0);};

;(function(){

	var caches = {};
	var count = 0;
	var loaded = 0;

	function load(imgsURL){
		var len = imgsURL.length;
		var wait = 0;
		var callback = noop;
		for(var i=0; i<len; i++){
			var url = imgsURL[i];
			if(!get(url)){
				wait++;
				var img = new Image();
				img.src = url;
				caches[url] = img;
				img.onload = function(){
					wait--;   
					if(wait == 0) callback();
				}
			}
		}

		return {
			done:function(cb){ callback = cb;}
		}
	}

	function get(imgURL){
		return caches[imgURL];
	}

	window.Resources ={
		load : load,
		get:get
	}

})();