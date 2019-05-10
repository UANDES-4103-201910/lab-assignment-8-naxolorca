// Note: $(() => {}); is equivalent to $(document).ready(function(){})
$(() => {
	console.log('Document ready! [app/assets/javascripts/keyboard.js]');
	var id = 1
	$('.key').click(function(){
		var show = "";
		var key = $(this).text();
	if ($(this).text() == 'Enter'){
		id += 1
		key = ''
	}
	if ($(this).text() == 'Bksp'){
		if($('#id'+id).text() == ''){
			id-=1
		}

		show = $('#id'+id).text().slice(0,-1)
	}
	else{
		show = $('#id'+id).text() + key;
	}

	console.log($(this).text())

	$('#id'+id).text(show);

	});
});
