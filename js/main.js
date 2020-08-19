
function  appLink(){
    window.location.href ="https://www.google.com";
}

var btn = document.getElementById("goToFooter");

btn.addEventListener("click",function(){
    window.scrollTo({
        top:document.body.scrollHeight,
        left: 0,
        behavior:"smooth"
    });
});
