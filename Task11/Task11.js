document.getElementById("GetIP").addEventListener("click", GetIP);

async function GetIP() {
    try {

        const response= await fetch("https://api.ipify.org?format=json") 
        
        if(!response.ok){
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data=await response.json();
        if (!data.ip) {
            throw new Error('IP address not found in response');
        }
        const ipAddress =await data.ip;

        document.getElementById("GetIP").textContent = ipAddress;
    }

    catch(error){

        window.alert('Error fetching the IP address: ' + error.message);

    }
}
