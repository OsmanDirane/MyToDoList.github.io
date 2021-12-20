let addButton = document.getElementById('addButton');
let delButton = document.getElementById('delButton');
let toDoContainer = document.getElementById('toDoContainer');
let myinput = document.getElementById('myInput');
let current = document.getElementById('current');
let time = document.getElementById('time');

let today = new Date();

    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    let date = today.getDate();
    let current_date = `${month}/${date}/${year}`;
    current.innerText = current_date;

    function seconds(){
        let now = new Date();
        let hrs = now.getHours();
        let mins = now.getMinutes();
        let sec = now.getSeconds();
       
        let current_time = `${hrs}:${mins}:${sec}`
    
        time.innerText = current_time;
    
    }
    seconds();
    setInterval(seconds,1000);
   

addButton.addEventListener('click', function(){
    if(myinput.value === "" ){
        alert("Invalid Entry")
        return false
    }

   

  
    var ul = document.getElementById('myUL')
    var li = document.createElement('li')
    var label = document.createElement('label')
    var input = document.createElement('input')
    var p = document.createElement('p')
    p.innerHTML = myinput.value
    var span = document.createElement('span')



    ul.appendChild(li);
    li.appendChild(label);
    label.appendChild(input);
    input.setAttribute("type", "checkbox");
    label.appendChild(p);

    label.appendChild(span)

    document.getElementById('myInput').value = "";

 
    
    li.addEventListener('dblclick', function(){
      this.remove();
       
    })
  

})

myinput.addEventListener('keyup', (e ) =>{
    if(e.which === 13){
        if(myinput.value === "" ){
            alert("Invalid Entry")
            return false
        }
    
       
    
      
        var ul = document.getElementById('myUL')
        var li = document.createElement('li')
        var label = document.createElement('label')
        var input = document.createElement('input')
        var p = document.createElement('p')
        p.innerHTML = myinput.value
        var span = document.createElement('span')
    
    
    
        ul.appendChild(li);
        li.appendChild(label);
        label.appendChild(input);
        input.setAttribute("type", "checkbox");
        label.appendChild(p);
    
        label.appendChild(span)
    
        document.getElementById('myInput').value = "";

        li.addEventListener('dblclick', function(){
            this.remove();
             
          })
        
    
    }
} )

