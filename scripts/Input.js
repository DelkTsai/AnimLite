(function(){
	var dictionary = {};

	 function setKey(keyCode,state){
	 	// var key;
	 	// switch(keyCode){
	 	// 	32:
	 	// 	key = "SPACE";
	 	// 	break;
	 	// 	87:
	 	// 	key = "W";
	 	// 	break;
	 	// 	83:
	 	// 	key = "S";
	 	// 	break;
	 	// 	65:
	 	// 	key = "A";
	 	// 	break;
	 	// 	68:
	 	// 	key = "D";
	 	// 	break;		
	 	// }
	 	
	 	dictionary[keyCode] = state;
	 }

	 function keyDown(key){return !!dictionary[key];}
	 function keyUp(key){return !!!dictionary[key];}

	 window.addEventListener("keydown",function(e){ console.log(e.keyCode)
	 	setKey(e.keyCode,true);
	 })

	 window.addEventListener("keyup",function(e){
	 	setKey(e.keyCode,false);
	 })

	 window.Input =	{
	 	keyDown:keyDown
	 }

})();

(function(){
	window.KeyCode = {
		SPACE:32,
		W:87,
		S:83,
		A:65,
		D:68,
		J:74,
		K:75,
	}
})();