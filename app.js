
Resources.load(["texture/guanyu.png","texture/zhaoyun.png","texture/terrain.png"]).done(start);

var players = [];

function start(){
	console.log("loaded ...");


	var player1 = new Player(new Sprite(guanyu),100,100);
	var player2 = new Player(new Sprite(zhaoyun),200,100);
	players = [player1,player2];

	CC.setup(document.getElementById("myCanvas"),function(ctx){

		
		for(var player of players)
			player.render(ctx);
	},25);

}


