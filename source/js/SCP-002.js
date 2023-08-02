var dialog = document.querySelector('dialog');
var btn_show = document.getElementById('show');
btn_show.addEventListener('click', function() {
  dialog.show();
}, false);

var yes_button = document.getElementById('yes');
yes_button.addEventListener('click', function() {
  window.location.href = '../html/SCP-001.html';
}, false);

var no_button = document.getElementById('no');
no_button.addEventListener('click', function() {
  dialog.close();
}, false);
