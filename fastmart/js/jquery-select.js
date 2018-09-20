/* Dynamic Controls Over Form Elements */
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

    $("#hier3").change(function () {
        var val = $(this).val();
        if (val == "hier3-bs") {
            $("#hier4").html("<option value='hier4-camay'>Camay</option><option value='hier4-ivory'>Ivory</option><option value='hier4-olay'>Olay</option><option value='hier4-oldspice'>Old Spice</option><option value='hier4-safeguard'>Safeguard</option>");
        } else if (val == "hier3-bt") {
            $("#hier4").html("<option value='hier4-charmin'>Charmin</option>");
        } else if (val == "hier3-bw") {
            $("#hier4").html("<option value='hier4-gilette'>Gilette</option><option value='hier4-herbalessences'>Herbal Essences</option><option value='hier4-ivory'>Ivory</option><option value='hier4-olay'>Olay</option><option value='hier4-oldspice'>Old Spice</option>");
        } else if (val == "hier3-ft") {
            $("#hier4").html("<option value='hier4-puffs'>Puffs</option>");
        } else if (val == "hier3-hl") {
            $("#hier4").html("<option value='hier4-ivory'>Ivory</option>");
        } else if (val == "hier3-np") {
            $("#hier4").html("<option value='hier4-bounty'>Bounty</option>");
        } else if (val == "hier3-pt") {
            $("#hier4").html("<option value='hier4-bounty'>Bounty</option>");
        } else if (val == "hier3-none") {
            $("#hier4").html("<option value='hier4-none'>-- Brand --</option>");
        }
    });
});
