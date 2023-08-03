function header(){
    $.ajax({
        url: "SCP-002.html",
        cache: false,
        success: function(html){
            document.write(html);
        }
    });
}