var objects = Array();
var canvas;
var context;
var timeout;

window.onload = function() {

	canvas = document.getElementById('myCanvas');

	canvas.addEventListener('click', onTap, false);
	canvas.width = document.width;
	canvas.height = document.height;

	context = canvas.getContext("2d");

	timeout = setInterval(render, 100);

}

function onTap(event) {

	var object = new Object();
	object.x = event.x;
	object.y = event.y;

	objects.push(object);

}

function render() {

	canvas.width = canvas.width;

	for (var i = 0; i < objects.length; i++) {
		
		context.beginPath();
		context.arc(objects[i].x, objects[i].y, 10, 0, 2*Math.PI);
		context.stroke();

		for (var j = i; j < objects.length; j++) {

			if(Math.abs(objects[j].x - objects[i].x) < 200 && Math.abs(objects[j].y - objects[i].y) < 200) {
				context.moveTo(objects[i].x,objects[i].y);
				context.lineTo(objects[j].x,objects[j].y);
				context.stroke();
			}

		};
		
	};

}