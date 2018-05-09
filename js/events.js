//define functions here

$(document).ready(function(){

function getIt() {
  $('p').on("click", function(){
  alert("Hey!");
});
}
}
$("p").click(function(){
    alert("The paragraph was clicked.");
});