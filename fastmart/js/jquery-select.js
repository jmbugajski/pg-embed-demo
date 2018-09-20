/* Link Selects - Changing One Changes the Others */
$(document).ready(function () {
    $("#type").change(function () {
        var store_group = $(this).val();
        if (store_group == "type-store-group") {
            $("#store").html("<option value='test-group-A'>Test Group A</option><option value='test-group-B'>Test Group B</option><option value='test-group-C'>Test Group C</option><option value='test-group-D'>Test Group D</option>");
			$("#level").html("<option value='level-uat'>SIT UAT Test</option>");
        } else if (store_group == "type-total-retailer") {
            $("#store").html("<option value='store-none'>N/A</option>");
			$("#level").html("<option value='level-none'>N/A</option>");
        } else if (store_group == "type-none") {
            $("#store").html("<option value='store-none'>-- Segment --</option>");
			$("#level").html("<option value='level-none'>-- Cluster --</option>");
        }
    });
	
    $("#hier1").change(function () {
        var val = $(this).val();
        if (val == "hier1-bs") {
            $("#hier2").html("<option value='hier2-camay'>Camay</option><option value='hier2-ivory'>Ivory</option><option value='hier2-olay'>Olay</option><option value='hier2-oldspice'>Old Spice</option><option value='hier2-safeguard'>Safeguard</option>");
        } else if (val == "hier1-bt") {
            $("#hier2").html("<option value='hier2-charmin'>Charmin</option>");
        } else if (val == "hier1-bw") {
            $("#hier2").html("<option value='hier2-gilette'>Gilette</option><option value='hier2-herbalessences'>Herbal Essences</option><option value='hier2-ivory'>Ivory</option><option value='hier2-olay'>Olay</option><option value='hier2-oldspice'>Old Spice</option>");
        } else if (val == "hier1-ft") {
            $("#hier2").html("<option value='hier2-puffs'>Puffs</option>");
        } else if (val == "hier1-hl") {
            $("#hier2").html("<option value='hier2-ivory'>Ivory</option>");
        } else if (val == "hier1-np") {
            $("#hier2").html("<option value='hier2-bounty'>Bounty</option>");
        } else if (val == "hier1-pt") {
            $("#hier2").html("<option value='hier2-bounty'>Bounty</option>");
        } else if (val == "hier1-none") {
            $("#hier2").html("<option value='hier2-none'>-- Brand --</option>");
        }
    });
});
