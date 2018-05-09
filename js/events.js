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
    $('#typing')on.('keydown',function(){
   if($'#typing:first').val() === 71){
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