$(document).ready(function() {
    $.ajax({
        url: "http://md5.jsontest.com/?text=example_text"
    }).then(function(data) {
       $('.md5').append(data.md5);
       $('.original').append(data.original);
    });
});