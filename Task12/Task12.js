document.getElementById("Submit").addEventListener('click',SetAndMsg);

function SetAndMsg(){
    const P1=new Person();
    const date=new Date();
    P1.name=document.getElementById("name").value;
    P1.age=document.getElementById("age").value;
    P1.timestamp=date.toLocaleString();
    const msg=`Your name is: ${P1.name}\nYour age is: ${P1.age}\nTimestamp: ${P1.timestamp}`;


    window.alert(msg);
    
}

function Person(name='',age=0,timestamp=0){
    this.name=name;
    this.age=age;
    this.timestamp=timestamp;
}




