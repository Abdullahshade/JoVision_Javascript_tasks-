let time=document.getElementById("Time");

setInterval(()=>{
let date=new Date();
time.innerHTML=date.toLocaleTimeString();},1000)
