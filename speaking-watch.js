$(function() {
	console.log("coucou je suis le script");
	init();
	update();
});

function speaked_time(date) {
	function round_minutes(minutes) {
		return ~~(minutes <= 30 ? (minutes % 30) / 5 : (30 - (minutes % 30)) / 5);
	}

	var minutesText = ["", "FIVE", "TEN", "QUARTER", "TWENTY", "TWENTY FIVE", "HALF"];
	var hoursText = ["TWELVE", "ONE", "TWO", "THREE", "FOUR", "FIVE",
					"SIX", "SEVEN", "EIGHT", "NINE", "TEN", "ELEVEN"];
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var text = "IT IS ";

	text += minutesText[~~(minutes <= 30 ? (minutes % 30) / 5 : (30 - (minutes % 30)) / 5)];
	if (round_minutes(minutes) != 0)
	{
		if (minutes <= 30)
			text += " PAST ";
		else
			text += " TO ";
	}
	text += hoursText[(hours  + (minutes <= 30 ? 0 : 1)) % 12];
	if (round_minutes(minutes) == 0)
		text += " OCLOCK";
	return text;
}

function init() {

}

function update() {
	console.log("update !");
	console.log(speaked_time(new Date()));
    window.setTimeout(update, 1000);
}