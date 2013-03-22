var commands = ["Joao","Griep","Nat","Dede","Tiago","Taisa","Paula","Eduardo"];

function for1 () {

	var items = document.getElementById('items');
	items.innerHTML = "";

	var ol = document.createElement("OL");
	items.appendChild(ol);

	for (var i = 0; i < commands.length; i++) {

		var item = document.createElement('LI');
		var txt = document.createTextNode(commands[i]);

		item.appendChild(txt);
		ol.appendChild(item);

		delete item;
		delete txt;

	};

}

function for2 () {

	var items = document.getElementById('items').firstChild;

	for (var i = 0; i < items.childNodes.length; i++) {

		var item = items.childNodes.item(i);

		item.style.color="blue";

	};
	
}

function for3 () {

	var items = document.getElementById('items').firstChild;

	for (var i = 0; i < items.childNodes.length; i++) {

		var item = items.childNodes.item(i);

		item.innerHTML = item.innerHTML + " S2 JS!";

	};
	
}