// Change the Overview Button URL when Store Group Name Selected
$(document).on('change', '#store', function(e) {
	var store_selected = this.options[e.target.selectedIndex].value;
	if (store_selected == "21") {
		$("#overview").html("<a target='iframe_a' href='https://35.227.249.152/embed/dashboards/21'>Overview</a>");
    } else if (store_selected == "11") {
		$("#overview").html("<a target='iframe_a' href='https://35.227.249.152/embed/dashboards/11'>Overview</a>");
    } else if (store_selected == "12") {
		$("#overview").html("<a target='iframe_a' href='https://35.227.249.152/embed/dashboards/12'>Overview</a>");
    } else if (store_selected == "13") {
		$("#overview").html("<a target='iframe_a' href='https://35.227.249.152/embed/dashboards/13'>Overview</a>");
	}
});

$(document).ready(function () {
	// Watch for Products Context Selection
	$('[name="sel-sector"]').change(function (e) {
		$('#select-sec1').toggle(this.checked);
	});
	$('[name="sel-cat"]').change(function (e) {
		$('#select-hier1').toggle(this.checked);
	});
	$('[name="sel-brand"]').change(function (e) {
		$('#select-hier2').toggle(this.checked);
	});

	// Change Customer Logos when Customer Checkbox Selected
	$('[name="cust-walmart-us"]').change(function() {
		if($(this).is(":checked")) {
			$("#top-left").html("<img src='images/walmart-logo.png' width='160' />");
		}
		if(!$(this).is(':checked')) {
			$("#top-left").html("<a href='login.html' title='Logout'><img src='images/fastmart-f-only.gif' width='160' /></a>");
		}
	});
	$('[name="cust-cvs-us"]').change(function() {
		if($(this).is(":checked")) {
			$("#top-left").html("<img src='images/cvs-logo.png' width='150' />");
		}
		if(!$(this).is(':checked')) {
			$("#top-left").html("<a href='login.html' title='Logout'><img src='images/fastmart-f-only.gif' width='160' /></a>");
		}
	});

});

$(document).ready(function () {
	// Linked Selectors for Store Group Navigation
	$("#type").change(function () {
		var store_group = $(this).val();
		if (store_group == "type-store-group") {
			$("#store").html("<option value='21'>Test Group A</option><option value='11'>Test Group B</option><option value='12'>Test Group C</option><option value='13'>Test Group D</option>");
			$("#level").html("<option value='level-uat'>SIT UAT Test</option>");
		} else if (store_group == "type-total-retailer") {
			$("#store").html("<option value='21'>N/A</option>");
			$("#level").html("<option value='level-none'>N/A</option>");
		} else if (store_group == "type-none") {
			$("#store").html("<option value='21'>-- Segment --</option>");
			$("#level").html("<option value='level-none'>-- Cluster --</option>");
		}
	});
});

// Pull Out the Form Data to Use it for Something
$(document).ready(function() { 
	$('#btn-ser1').click(function () { 
		 var encoded = $("form#form-products").serialize();
	$('div#form-output').text('Vals: '+ encoded); 
		return false; 
	});
});
