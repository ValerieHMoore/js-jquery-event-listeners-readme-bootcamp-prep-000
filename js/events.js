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
    if(keydown === 71){
    $('#input')on.('keydown',function(){
   alert("You have pressed the G key");
 });
}
}

$(document).ready(function(){
getIt()
frameIt()
pressIt()
}
)