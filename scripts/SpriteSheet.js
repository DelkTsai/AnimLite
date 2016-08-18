
(function(){

	window.SpriteSheet = function(sheetJson,motionConfig){

		var frames = sheetJson.frames;
		var frameType = {};
		this.montions = {};
		this.url = sheetJson.meta.image;

		for(var i=0; i< frames.length; i++){
			var frame = frames[i];
			var name = frame.filename.replace(/_\d*\.png/,'');
			if(!frameType[name])
				frameType[name] = [frame];
			else
				frameType[name].push(frame);
		}
		console.log(frameType);

		for(var key in  motionConfig){
			var m = motionConfig[key];
			
			for(var t in frameType){

				if(m.prefix == t){
					var tArr = frameType[t];
					var sub = tArr.slice(m.range[0]-1,m.range[1]);
					this.montions[key] = sub; //console.log(sub); return;
				}
			}
		}
		console.log(this.motions)
	}
})();
