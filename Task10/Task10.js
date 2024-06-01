document.getElementById("GetIP").addEventListener("click", GetIP);

function GetIP() {
    fetch("https://api.ipify.org?format=json")
    .then(response => response.json())  
    .then(data => {
        const ip=data.ip;
        
        document.getElementById("GetIP").textContent=data.ip;
    })
    .catch(error => {
        console.error('Error fetching the IP address:', error); 
    });
}
