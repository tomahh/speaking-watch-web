$(function() {
	console.log("coucou je suis le script");
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
	console.log("update !");
	console.log(speakedTime(new Date()));
    window.setTimeout(update, 1000);
}