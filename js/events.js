function getIt() {
$('p').on('click',function(){
alert("Hey!")
});
}

function frameIt() {
 $('img').on('load',function(){
 $('img').addClass('tasty')
 });
}

function pressIt() {
 $('input')on.('keydown',function(e){
   alert("You have pressed the G key")
   if(e.which==82){
   
 });
}

$(document).ready(function(){
getIt()
frameIt()
pressIt()
}
)
