/* Dynamic Controls Over Form Elements */
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

$(document).ready(function () {
	$('[name="sel-sector"]').change(function (e) {
		$('#select-sec1').toggle(this.checked);
	});
	$('[name="sel-cat"]').change(function (e) {
		$('#select-hier1').toggle(this.checked);
	});
	$('[name="sel-brand"]').change(function (e) {
		$('#select-hier2').toggle(this.checked);
	});
});

$(document).ready(function () {
	$("#type").change(function () {
		var store_group = $(this).val();
		if (store_group == "type-store-group") {
			$("#store").html("<option value='8'>-- Segment --</option><option value='8'>Test Group A</option><option value='9'>Test Group B</option><option value='10'>Test Group C</option><option value='11'>Test Group D</option>");
			$("#level").html("<option value='level-uat'>SIT UAT Test</option>");
		} else if (store_group == "type-total-retailer") {
			$("#store").html("<option value='8'>N/A</option>");
			$("#level").html("<option value='level-none'>N/A</option>");
		} else if (store_group == "type-none") {
			$("#store").html("<option value='8'>-- Segment --</option>");
			$("#level").html("<option value='level-none'>-- Cluster --</option>");
		}
	});
});
