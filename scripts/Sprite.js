(function(){

	/**
	 * [Sprite]
	 * @param {[type]} sheetJson [json data of the textures]
	 */
	window.Sprite = function(sheetJson,dx,dy){

		this.frames = sheetJson.frames;
		this.actions = {};
		this.currentAction;
		this.currentActionName;
		this.url = sheetJson.meta.image;
		this.dx = dx || 0 ;
		this.dy = dy || 0;

		for(var i=0; i< this.frames.length; i++){
			var frame = this.frames[i];
			// matchs xxx_01.png or xxx01.png
			var name = frame.filename.replace(/_?\d*\.png/,'');
			if(!this.actions[name]){
				this.actions[name] = [frame];

				//the first action as currentAction.
				if(!this.currentAction) this.play(name)
					//this.currentAction = this.actions[name];
			}
			else
				this.actions[name].push(frame);
		}

		console.log(this.actions);


		

		//is loop the action playing.
		this.isloop = false;
		//stop anim
		this.isStop = true;
		//0 stop in the begain. 1,stop in the end,3 nothing constrain.
		this.stopMode = 1;
		//the current frame of Motion. 
		this.frameIndex = 0;
		// the total frames of  Motion.
		this.frameTotal = this.currentAction.length;
	}


	Sprite.prototype ={
		/**
		 * [render method]
		 * @param  {[type]} cxt 
		 */
		render:function(ctx){
			if(!this.currentAction) return;

			// reset the Index to zero when isStop was true.
			if(this.isStop) {
				switch(this.stopMode){
					case 0:
					this.frameIndex = 0;
					break;
					case 1:
					this.frameIndex = this.frameTotal-1;
					break;
					default:break;
				}
			}
			
			var frameInfo = this.currentAction[this.frameIndex];
			this._draw(ctx,frameInfo);	

			//not longer to increase the Index.
			if(this.isStop)return;


			this.frameIndex = (this.frameIndex + 1) % this.frameTotal;
			//next cycle will stop the Index.
			if(!this.isloop && this.frameIndex == 0){
				this.isStop = true;
			}
		},

		_draw: function(ctx,frameInfo){
			var tFrame = frameInfo.frame; //console.log(tFrame)
			ctx.drawImage(Resources.get(this.url),tFrame.x,tFrame.y,tFrame.w,tFrame.h,this.dx,this.dy,tFrame.w,tFrame.h);
		},

		/**
		 * [set method] switch current motion.
		 * @param  {[type]} motionName [description]
		 * @param  {[type]} isloop ,if it's false that just run one time.
		 */
		play:function(motionName,isloop){
			this.isloop = !!isloop;
			this.isStop = false;

			if(this.currentActionName == motionName) return;
			this.currentActionName = motionName;
			this.currentAction = this.actions[motionName];
			this.frameIndex = 0;
			this.frameTotal = this.currentAction.length;

			console.log("Animation:"+motionName,this.currentAction,"isloop:" + this.isloop);
		},

		stop:function(){
			this.isStop = true;
		},
	}

})();