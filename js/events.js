function getIt() {
$('p').on('click',function(){
alert("Hey!")
});
}

function frameIt() {
 $('img').on('load',function(){
 document.getElementById('img').classList.add('tasty');
 });
}

$(document).ready(function(){
getIt()
frameIt()
}
)
