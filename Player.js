(function(){

	function Player(sprite,x,y){
		this.sprite = sprite;
		this.speed = 2;
		this.x = x || 0;
		this.y = y || 0;

		this.actionLoop = false;
		this.dir = "DOWN";
	}

	Player.prototype ={

		render:function(ctx){
			this.sprite.dx = this.x;
			this.sprite.dy = this.y;
			this.sprite.render(ctx);

			if(Input.keyDown(KeyCode.W)){
				this.dir = "UP";
				this.y -= this.speed;
				this.sprite.play("moveUp",this.actionLoop);
			}else if(Input.keyDown(KeyCode.S)){
				this.dir = "DOWN";
				this.y += this.speed;
				this.sprite.play("moveDown",this.actionLoop);
			}else if(Input.keyDown(KeyCode.A)){
				this.dir = "LEFT";
				this.x -= this.speed;
				this.sprite.play("moveLeft",this.actionLoop);
			}else if(Input.keyDown(KeyCode.D)){
				this.dir = "RIGHT";
				this.x += this.speed;
				this.sprite.play("moveRight",this.actionLoop);
			}else if(Input.keyDown(KeyCode.J)){
				this.attack();
			}else if(Input.keyDown(KeyCode.k)){
				
			}
		},
		attack:function(){
			switch(this.dir){
				case "UP":
				this.sprite.play("attackUp",this.actionLoop);
				break;
				case "DOWN":
				this.sprite.play("attackDown",this.actionLoop);
				break;
				case "LEFT":
				this.sprite.play("attackLeft",this.actionLoop);
				break;
				case "RIGHT":
				this.sprite.play("attackRight",this.actionLoop);
				break;
			}
		}
	}
	window.Player = Player;
})();