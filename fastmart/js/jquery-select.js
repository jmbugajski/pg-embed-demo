/* Dynamic Controls Over Form Elements */
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
/*
						<label for="sel-sector"><input type="checkbox" name="sel-sector" value="1"/>Sector</label>

						<div id="checkboxes3">
							<label for="sec1-bc"><input type="checkbox" name="sec1-bc" value="1"/>BC</label>
							<label for="sec1-hhc"><input type="checkbox" name="sec1-hhc" value="1"/>HHC</label>
						</div>

						<div id="checkboxes4">
							<label for="hier1-bs"><input type="checkbox" name="hier1-bs" value="1"/>Bar Soap</label>
							<label for="hier1-bt"><input type="checkbox" name="hier1-bt" value="1"/>Bath Tissue</label>
							<label for="hier1-bw"><input type="checkbox" name="hier1-bw" value="1"/>Body Wash</label>
							<label for="hier1-ft"><input type="checkbox" name="hier1-ft" value="1"/>Facial Tissue</label>
							<label for="hier1-hl"><input type="checkbox" name="hier1-hl" value="1"/>Hand Liquids</label>
							<label for="hier1-np"><input type="checkbox" name="hier1-np" value="1"/>Napkins</label>
							<label for="hier1-pt"><input type="checkbox" name="hier1-pt" value="1"/>Paper Towels</label>
						</div>
*/

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
/*	
	$('[name="sec1-bc"]').change(function (e) {
		$('[name="hier1-bs"]').toggle(this.checked);
	});
*/
});

$(document).ready(function () {
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

/* Pull Out the Form Data to Use it for Something */
$(document).ready(function() { 
	$('#btn-ser1').click(function () { 
		 var encoded = $("form#form-products").serialize();
	$('div#form-output').text('Vals: '+ encoded); 
		return false; 
	});
});
