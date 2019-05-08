// Note: $(() => {}); is equivalent to $(document).ready(function(){})
$(() => {
	console.log('Document ready! [app/assets/javascripts/keyboard.js]');
	$('.key').click(function(){
	var show = "";
	show = $('#text').text() + $(this).text();

	console.log($(this).text())
	$('#text').text(show);
	});
});
