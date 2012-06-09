$(function() {
	console.log("coucou je suis le script");
	update();
});

var map = {
	"IT": "<span class='highlight'>IT</span>"
};

function update() {
	
	var node = "ITLISASTIME<br />ACQUARTERDC<br />TWERTYFIVEX<br />HALFBTENFTO<br />PASTERUNINE<br />ONESIXTHREE<br />FOURFIVETWO<br />EIGHTELEVEN<br />SEVENTWELVE<br />TENSEOCLOCK<br />";
	console.log("update !");

	console.log(node);
	node = highlightNode(node, "IT IS COUCOU");
	console.log(node);
	//node = highlightNodeAt(3, 2, node);
	$("#watch").html(node);
    window.setTimeout(update, 1000);
};

function highlightNode(node, text) {
	
	var splited = text.split(" ");
	var tmp = "";
	
	// for (var i = 0; i != splited.length; i++)
	// {
		//console.log("Eee");
		node = node.replace("IT", "<span class='highlight'>IT</span>");
		node = node.replace("IS", "<span class='highlight'>IS</span>");
		//console.log(node.indexOf(splited[i]));
		//node = node.slice(node.indexOf(splited[i]) + splited[i].length, -1);
	// }
	//tmp += node();
	return node;
};

// function insertAt(node, pos, str) {
	// var ret = node.slice(0, pos);
// 	
	// ret = ret.concat(str);
	// ret = ret.concat(node.slice(pos, -1));
	// return ret;
// }
