document.getElementById("GetIP").addEventListener("click", GetIP);

function GetIP() {
    fetch("https://api.ipify.org?format=json")
    .then(response => response.json())  
    .then(data => {
        const IP=data.ip;
        document.getElementById("GetIP").textContent=IP;
    })
    
}
