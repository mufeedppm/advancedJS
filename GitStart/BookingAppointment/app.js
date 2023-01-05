var form=document.getElementById('my-form')
var userList=document.getElementById('users')
var nameInput=document.getElementById('name')
var emailInput=document.getElementById('email')
var phoneInput=document.getElementById('phone')

form.addEventListener('submit',saveToLocal)
form.addEventListener('submit',addUser)

function addUser(e){
    e.preventDefault()
    if(nameInput.value=="" || emailInput.value=="" || phoneInput.value==""){
        alert("Please enter all fields")
    }
    else{
        var li=document.createElement('li')
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value},${phoneInput.value}`))
        userList.appendChild(li)

        nameInput.value='';
        emailInput.value='';
        phoneInput.value=''
    }
}

function saveToLocal(e){
    e.preventDefault();
    var name=e.target.userName.value;
    var email=e.target.email.value;
    var phone=e.target.phone.value;
    var obj={
        name,
        email,
        phone}
    
    if(nameInput.value=="" || emailInput.value==""|| phoneInput.value=="" ){
        
    }
    
    else{   
            
            localStorage.setItem(obj.email, JSON.stringify(obj))
            var objDeserial=JSON.parse(localStorage.getItem(obj.email))
            console.log(objDeserial)
        }
    
}