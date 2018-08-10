$(document).ready(function() {
  $("form#suggestion").submit(function(event) {
    event.preventDefault();
    var design = $("input:radio[name=design]:checked").val();
    var orgsize = $("input:radio[name=orgsize]:checked").val();
    var googleorms = $("input:radio[name=googleorms]:checked").val();
    var career = $("input:radio[name=career]:checked").val();
    var attitude = $("input:radio[name=attitude]:checked").val();

    if (!design || !orgsize || !googleorms || !career || !attitude) {
      alert("Answer all the questions before you submit!")
      } else if (design === "yes" && orgsize === "big" && attitude === "showoff") {
        $("#result").text("React! You can build creative websites and show off to yours friends!");
        $("#resultform").show();
      } else if (googleorms === "ms" && orgsize === "big" && attitude === "humble") {
        $("#result").text("C#! Your works might not be the coolest but surely helps people in their daily lives!");
        $("#resultform").show();
      } else if (career === "change" && googleorms === "google" && design === "no") {
        $("#result").text("PHP! You will have options to work for different kinds of companies!");
        $("#resultform").show();
      } else if (career === "change" && googleorms === "google" && design === "no") {
        $("#result").text("JAVA! Android developpers are in short! They need your help!");
        $("#resultform").show();
      }
  });
});
