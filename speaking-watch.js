$(function() {
	init();
	update();
});

function speakedTime(date) {
	function roundMinutes(minutes) {
		return ~~(minutes <= 30 ? (minutes % 30) / 5 : (30 - (minutes % 30)) / 5);
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
		if (minutes <= 30)
			text += " PAST ";
		else
			text += " TO ";
	}
	text += hoursText[(hours  + (minutes <= 30 ? 0 : 1)) % 12];
	if (roundMinutes(minutes) == 0)
		text += " OCLOCK";
	return text;
}

function init() {

}

function update() {	
	var node = "ITLISASTIME<br />ACQUARTERDC<br />TWERTYFIVEX<br />HALFBTENFTO<br />PASTERUNINE<br />ONESIXTHREE<br />FOURFIVETWO<br />EIGHTELEVEN<br />SEVENTWELVE<br />TENSEOCLOCK<br />";

	node = highlightNode(node, speakedTime(new Date()));
	$("#watch").html(node);
    window.setTimeout(update, 1000);
};

function highlightNode(node, text) {
	
	var splited = text.split(" ");
	var tmp = "";
	
	for (var i = 0; i != splited.length; i++)
	{
		node = node.replace(splited[i], "<span class='highlight'>" + splited[i] + "</span>");
		tmp += node.slice(0, node.indexOf(splited[i]) + splited[i].length + 7);
		node = node.slice(node.indexOf(splited[i]) + splited[i].length + 7, -1);
	}
	console.log("tmp = " + tmp);
	tmp += node.slice(0, -1);
	return tmp;
};
