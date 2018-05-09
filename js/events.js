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
    $('#input')on.('keydown',function(){
   if('keydown' === 71){
     alert("You have pressed the G key");
  return;
  }
});

$(document).ready(function(){
getIt()
frameIt()
pressIt()
}
)