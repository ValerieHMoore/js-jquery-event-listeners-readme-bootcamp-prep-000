function getIt() {
$('p').on('click',function(){
alert("Hey!")
});
}

function frameIt() {
 $('.tasty').on('load',function(){
 img.style.border='2px solid #E8272C'
 });
}

$(document).ready(function(){
getIt()
frameIt()
}
)
