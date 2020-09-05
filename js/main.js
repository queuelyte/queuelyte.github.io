
function  appLink(){
    window.location.href ="https://www.google.com";
    if(isOpen == true){
        list.style.bottom = "-110%";
        isOpen = !isOpen;
    }
}

window.addEventListener('scroll',function(){
  if(isOpen == true){
      list.style.bottom = "-110%";
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
        list.style.bottom = "-110%";
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
        list.style.bottom = 0;
        list.style.height = "85%";
    }else{
        list.style.bottom = "-110%";
    }
});
var home = document.getElementById("home");
home.addEventListener("click",function(){
    if(isOpen == true){
        list.style.bottom = "-110%";
        isOpen = !isOpen;
    }
});


var bottomTag = document.getElementById('bottom-tag');
bottomTag.addEventListener('click',()=>{
    window.scrollTo({top: 0, bottom: 0,behavior:"smooth"});
});