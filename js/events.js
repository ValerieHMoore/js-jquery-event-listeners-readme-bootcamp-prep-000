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
   alert("You have pressed the G key");
 });
} $("input").keydown(function(event){ 
        $("div").html("Key: " + event.which);
    });
}

$(document).ready(function(){
getIt()
frameIt()
pressIt()
}
)