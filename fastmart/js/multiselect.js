var expanded = false;

function showCheckboxes() {
  var checkboxes = document.getElementById("checkboxes");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}

function showDiv() {
   document.getElementById('prodhier2').style.display = "block";
}

function hideDiv() {
   document.getElementById('prodhier2').style.display = "none";
}