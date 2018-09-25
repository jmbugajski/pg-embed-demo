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

	// Change Overview Button URL when Test Store Group Selected
	$('[name="store-11"]').change(function() {
		if($(this).is(":checked")) {
			$("#product-and-store").html("<a target='iframe_a' href='https://35.227.249.152/embed/dashboards/24'><span>By Product & Store</span></a>");
		}
		if(!$(this).is(':checked')) {
			$("#product-and-store").html("<a target='iframe_a' href='https://35.227.249.152/embed/dashboards/25'><span>By Product & Store</span></a>");
		}
	});

	// Change Customer Logos when Customer Checkbox Selected
	$('[name="cust-walmart-us"]').change(function() {
		if($(this).is(":checked")) {
			$("#top-left").html("<img src='images/walmart-logo.png' width='160' />");
			$("#center-data-note").html("<p>Data current to: 2017-06-02</p>");
		}
		if(!$(this).is(':checked')) {
			$("#top-left").html("<a href='login.html' title='Logout'><img src='images/fastmart-f-only.gif' width='160' /></a>");
			$("#center-data-note").html("<p></p>");
		}
	});
	$('[name="cust-cvs-us"]').change(function() {
		if($(this).is(":checked")) {
			$("#top-left").html("<img src='images/cvs-logo.png' width='150' />");
			$("#center-data-note").html("<p>Data current to: 2017-05-26</p>");
		}
		if(!$(this).is(':checked')) {
			$("#top-left").html("<a href='login.html' title='Logout'><img src='images/fastmart-f-only.gif' width='160' /></a>");
			$("#center-data-note").html("<p></p>");
		}
	});
});


$(document).ready(function () {
	// Linked Selectors for Store Navigation
	$("#type").change(function () {
		var store_group = $(this).val();
		if (store_group == "type-store-group") {
			$("#level").html("<option value='level-uat'>SIT UAT Test</option>");
			$("#geo").html("<option value='geo-il'>Illinois</option><option value='geo-oh'>Ohio</option><option selected value='geo-tn'>Tennessee</option>");
			$("#store").html("<option value='11'>Control Store</option><option value='12'>Impact Store</option><option value='13'>Test Store</option>");
		} else if (store_group == "type-total-retailer") {
			$("#level").html("<option value='level-none'>N/A</option>");
			$("#geo").html("<option value='geo-none'>N/A</option>");
			$("#store").html("<option value='11'>N/A</option>");
		} else if (store_group == "type-none") {
			$("#level").html("<option value='level-none'>-- Select --</option>");
			$("#geo").html("<option value='geo-none'>-- Select --</option>");
			$("#store").html("<option value='11'>-- Select --</option>");
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
