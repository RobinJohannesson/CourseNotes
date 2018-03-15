$.getJSON( "resources/json/books.json", function( data ) {
    console.log(data);

    var coursebefore = "";
    for (var key in data) {
      // console.log(data[key]);

      if (data[key].course == coursebefore) {
        $("p").append("<i class='name'>" + data[key].name + "</i><br>");
        $("p").append("<a class='link' href='" + data[key].link + "'>" + data[key].link + "</a><br>");
      }
      else {
        $("p").append("<br><b class='course'>" + data[key].course + "</b><br>");
        $("p").append("<i class='name'>" + data[key].name + "</i><br>");
        $("p").append("<a class='link' href='" + data[key].link + "'>" + data[key].link + "</a><br>");
      }
      coursebefore = data[key].course;
    }
  });
