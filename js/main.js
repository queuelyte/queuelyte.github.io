
function  appLink(){
    window.location.href ="https://www.google.com";
    if(isOpen == true){
        list.style.left = "-100%";
        isOpen = !isOpen;
    }
}

window.addEventListener('scroll',function(){
  if(isOpen == true){
      list.style.left = "-100%";
      isOpen = !isOpen;
  }
});

var btn = document.getElementById("goToFooter");

btn.addEventListener("click",function(){
    window.scrollTo({
        top:document.body.scrollHeight,
        left: 0,
        behavior:"smooth"
    });

    if(isOpen == true){
        list.style.left = "-100%";
        isOpen = !isOpen;
    }
});

var navBtn = document.getElementById("bars");
var isOpen = new Boolean(true);

navBtn.addEventListener("click",function(){
    isOpen = !isOpen;
    var list = document.getElementById("list")
    console.log(isOpen);
    if(isOpen){
        list.style.left = 0;
        list.style.width = "100%";
    }else{
        list.style.left = "-100%";
    }
});

var body = document.getElementById("mainbody");
body.addEventListener("click",function(){
    if(isOpen == true){
        list.style.left = "-100%";
        isOpen = !isOpen;
    }
});

var home = document.getElementById("home");
home.addEventListener("click",function(){
    if(isOpen == true){
        list.style.left = "-100%";
        isOpen = !isOpen;
    }
});
