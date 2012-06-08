$(function() {
	console.log("coucou je suis le script");
	update();
});

function update() {
	console.log("update !");
    window.setTimeout(update, 1000);
}