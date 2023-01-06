var form=document.getElementById('my-form')
var userList=document.getElementById('users')
var nameInput=document.getElementById('name')
var emailInput=document.getElementById('email')
var phoneInput=document.getElementById('phone')


form.addEventListener('submit',addUser)
// userList.addEventListener('click',removeUser)

function addUser(e){
    e.preventDefault()
    var name=e.target.userName.value;
    var email=e.target.email.value;
    var phone=e.target.phone.value;
    var obj={
        name,
        email,
        phone}


    if(nameInput.value=="" || emailInput.value=="" || phoneInput.value==""){
        alert("Please enter all fields")
    }
    else{
        localStorage.setItem(obj.email, JSON.stringify(obj))
        var li=document.createElement('li')
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value},${phoneInput.value}`))
        var delBtn=document.createElement('button')

    delBtn.className='deleteBtn delete'

    delBtn.appendChild(document.createTextNode('X'))

    li.appendChild(delBtn);

    delBtn.onclick = () =>{
        if(confirm(`Press Ok to delete`)){
        localStorage.removeItem(obj.email)
        userList.removeChild(li)
        }
    }

    var EditBtn=document.createElement('button')

    EditBtn.className=' editBtn '

    EditBtn.appendChild(document.createTextNode('Edit'))

    li.appendChild(EditBtn);
    
    EditBtn.onclick = () =>{
        if(confirm(`Press OK to confirm edit`)){
            nameInput.value=obj.name;
            emailInput.value=obj.email;
            phoneInput.value=obj.phone;
            localStorage.removeItem(obj.email)
            userList.removeChild(li)
        }
    }


    userList.appendChild(li)

    
    
    
        

        nameInput.value='';
        emailInput.value='';
        phoneInput.value=''
    }
}
function removeUser(e){
    if(e.target.classList.contains('delete')){
        if(confirm(`Confirm to delete`)){
            var li=e.target.parentElement;
            
            
            userList.removeChild(li);

            
            
            

            
            
        }
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
            // var objDeserial=JSON.parse(localStorage.getItem(obj.email))
            // console.log(objDeserial)
        }
    
}

