$(function() {
	init();
	update();
});

function speakedTime(date) {
	function roundMinutes(minutes) {
		var ret = ~~((minutes % 60) / 5);
		if (minutes > 30)
			ret = 12 - ret;
		return ret;
	}

	var minutesText = ["", "FIVE", "TEN", "QUARTER", "TWENTY", "TWENTY FIVE", "HALF"];
	var hoursText = ["TWELVE", "ONE", "TWO", "THREE", "FOUR", "FIVE",
					"SIX", "SEVEN", "EIGHT", "NINE", "TEN", "ELEVEN"];
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var text = "IT IS ";

	text += minutesText[roundMinutes(minutes)];
	if (roundMinutes(minutes) != 0)
	{
		if (minutes < 35)
			text += " PAST ";
		else
			text += " TO ";
	}
	text += hoursText[(hours  + (minutes < 35 ? 0 : 1)) % 12];
	if (roundMinutes(minutes) == 0)
		text += " OCLOCK ";
	for (var i = minutes; i >= 0; i--) {
		minutes[i]
	};
	for (var i = minutes % 5; i > 0; i--) {
		text += " . ";
	};
	return text;
}

function text_seconds(date) {
	var seconds = date.getSeconds();
	var text = "";

	for (; seconds > 0; seconds--) {
		text += "-";
	}
	return text;
}

function init() {

}

function update() {	
	var node = "ITLISASTIME<br />ACQUARTERDC<br />TWENTYFIVEX<br />HALFBTENFTO<br />PASTERUNINE<br />ONESIXTHREE<br />FOURFIVETWO<br />EIGHTELEVEN<br />SEVENTWELVE<br />TENSEOCLOCK<br />....<br />";
	var seconds = "-----------------------------------------------------------";
	var date = new Date();

	node = highlightNode(node, speakedTime(date));
	seconds = highlightNode(seconds, text_seconds(date));
	$("#watch").html(node);
	$("#seconds").html(seconds);
    window.setTimeout(update, 500);
};

function highlightNode(node, text) {
	
	var splited = text.split(" ");
	var tmp = "";
	
	for (var i = 0; i != splited.length; i++)
	{
		node = node.replace(splited[i], "<span class='highlight'>" + splited[i] + "</span>");
		tmp += node.slice(0, node.indexOf(splited[i]) + splited[i].length + 7);
		node = node.slice(node.indexOf(splited[i]) + splited[i].length + 7);
	}
	tmp += node.slice(0, -1);
	return tmp;
};
