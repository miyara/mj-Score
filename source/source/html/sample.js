function header(){
    $.ajax({
        url: "SCP-003.html",
        cache: false,
        success: function(html){
            document.write(html);
        }
    });
  }
  