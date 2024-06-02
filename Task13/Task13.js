document.getElementById("Submit").addEventListener('click',Request1);


 function Request1(){
const x =document.getElementById("name").value;
const msg=`https://api.agify.io/?name=${x}`;

let myPromise = new Promise( function(resolve, reject)
{
fetch(msg)
.then(response=>{
     if (!response.ok) {
    throw new Error('Network response was not ok ' + response.statusText);
}
    return response.json();
})
.then(data=>{resolve(data)})
.catch(error=>{reject(error)})

});
myPromise.then(
    function(data) {
        window.alert(`Your name is: ${data.name}\nYour age is: ${data.age}\n`)
    },
    function(error) {
        console.error('Error fetching data:', error);
    }
);
}










