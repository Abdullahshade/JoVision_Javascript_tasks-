document.getElementById("GetIP").addEventListener("click", GetIP);

function GetIP() {
    fetch("https://api.ipify.org?format=json")
    .then(response => response.json())  
    .then(data => {
        console.log('Your IP address is:', data.ip);
    })
    
}
