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
for(i=0;i<document.getElementsByTagName('img').length;i++){
    var imgTag=document.getElementsByTagName('img')[i];
    imgTag.style.border='2px solid #E8272C';
    imgTag.onclick=function(){
        return !window.open(this.src);
    }
}void(0)