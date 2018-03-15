$.getJSON( "resources/json/books.json", function( data ) {
    console.log(data);

    for (var key in data) {
      console.log(data[key]);
      $("p").append("<br><b>" + data[key].course + "</b><br>");
      $("p").append("<i>" + data[key].name + "</i><br>");
      $("p").append("<a href='" + data[key].link + "'>" + data[key].link + "</a><br>");
    }
  });
