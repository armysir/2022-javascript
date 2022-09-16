const clock = document.querySelector(".clock");




clock.innerText = "sdafaf"

function getClock (){
    const date = new Date();
    var hour = String(date.getHours()).padStart(2,"0");
    var minute = String(date.getMinutes()).padStart(2,"0");
    var seconds = String(date.getSeconds()).padStart(2,"0");
    
    
    clock.innerText = hour +":"+minute+":"+seconds;

}
getClock();
setInterval(getClock,1000);
