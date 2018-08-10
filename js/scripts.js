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
    }   else if (design === "male" && orgsize === "banana" && orgsize === "banana" && orgsize === "banana"  ) {
        $("#result").text("Rihanna");
        $("#resultform").show();
      } else if (gender === "male" && fruit === "apple") {
        $("#result").text("Ariana Grande");
        $("#resultform").show();
      } else if (gender === "male" && fruit === "orange") {
        $("#result").text("Constance Wu");
        $("#resultform").show();
      } else if (gender === "female" && fruit === "banana") {
        $("#result").text("Drake");
        $("#resultform").show();
      } else if (gender === "female" && fruit === "apple") {
        $("#result").text("BTS");
        $("#resultform").show();
      } else if (gender === "female" && fruit === "orange") {
        $("#result").text("Daddy Yanky");
        $("#resultform").show();
      }  else if (gender === "female" && fruit === "mango") {
        $("#result").text("Justin Timberlake");
        $("#resultform").show();
      }
  });
});
