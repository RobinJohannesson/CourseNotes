$.getJSON("resources/json/books.json", function(data) {
  console.log(data);

  var coursebefore = "";
  for (var course in data) {
    // console.log(data[key]);
    console.log(data[course]);
    $("p").append("<b class='course'>" + data[course].course + "</b><br>");
    for (var book in data[course].coursebook) {
      $("p").append("<i class='name'>" + data[course].coursebook[book].name + "</i><br>");
    }
  }
  $(".course").click(function() {
    $(".link").toggle();
    console.log("click");
  });
});
