// //vanilla javaScript
// var display = document.getElementById("input-message");

// display.addEventListener("input", function(event){
//     var word= display.value.trim().split(' ').length;
//     var character = display.value.length;
//     document.getElementsByTagName("p")[0].innerHTML  = word;
//     document.getElementsByTagName("p")[1].innerHTML  = character;
// });


//jQuery
var display = $("#input-message");
 
display.on("input",function(){
   var word= display.val().trim().split(' ').length;
   var character = display.val().length;
   $(".word p").text(word);
   $(".character p").text(character);
});

