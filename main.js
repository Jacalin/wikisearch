$(function() {
  $("#getSearch").click(function(e) {
    e.preventDefault();

    var search = document.getElementById("userInput").value;

    var url =
        "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=" +
        search +
        "";

    var $results = $("#results");

    $.ajax({
      url: url,
      dataType: "jsonp",
      success: function(data) {
        console.log(data);
        $.each(data.query.search, function(i, item) {

          var artStr = item.title;
          var url = 'http://en.wikipedia.org/wiki/' + artStr;
          console.log(artStr);
          $results.append(
            '<li><a href="' + url + '" target="_blank">'+artStr+'</a>: '+item.snippet+'</li>'
          );
        });
      }
    });

    $results.empty();
  });
});
