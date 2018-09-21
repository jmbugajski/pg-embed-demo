$(document).ready(function() { 
	$('#btn-ser1').click(function () { 
		 var encoded = $("form#form-products").serialize();
	$('div#form-output').text('Vals: '+ encoded); 
		return false; 
	});
});

$(document).on('change', '#store', function(e) {
	var store_selected = this.options[e.target.selectedIndex].value;
	if (store_selected == "8") {
		$("#overview").html("<a target='iframe_a' href='https://35.227.249.152/embed/dashboards/8'>Overview</a>");
    } else if (store_selected == "9") {
		$("#overview").html("<a target='iframe_a' href='https://35.227.249.152/embed/dashboards/9'>Overview</a>");
    } else if (store_selected == "10") {
		$("#overview").html("<a target='iframe_a' href='https://35.227.249.152/embed/dashboards/10'>Overview</a>");
    } else if (store_selected == "11") {
		$("#overview").html("<a target='iframe_a' href='https://35.227.249.152/embed/dashboards/11'>Overview</a>");
	}
});
