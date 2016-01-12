$(document).ready(function() {

  $("#stop").hide(); 
  $("#start").show(); 

   });

 $("#start").on("click", function () {
    $("#stop").show(); 
    $("#start").hide();

  });

 $("#stop").on("click", function () {
    $("#stop").hide(); 
    $("#start").show();

 });

