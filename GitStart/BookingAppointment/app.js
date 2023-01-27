var form=document.getElementById('my-form')
var userList=document.getElementById('users')
var nameInput=document.getElementById('name')
var emailInput=document.getElementById('email')
var phoneInput=document.getElementById('phone')


form.addEventListener('submit',addUser)
// userList.addEventListener('click',removeUser)
window.addEventListener('DOMContentLoaded',()=>{
    axios.get("https://crudcrud.com/api/59e48e42a64c47308a641c154562f0b0/AppData")
    .then((res)=>{
        for(let i=0;i<res.data.length;i++){
            ShowDetails(res.data[i])
            console.log(res.data[i])
        }
    }).catch(err=>console.log(err))
})


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
        // localStorage.setItem(obj.email, JSON.stringify(obj))
        axios.post("https://crudcrud.com/api/59e48e42a64c47308a641c154562f0b0/AppData",obj)
        .then((res)=>{
            ShowDetails(res.data)
            console.log(res.data)
            
        }).catch(err=>{
            console.log(err)
            document.body.innerHTML=document.body.innerHTML+ "<h4> Something went wrong! </h4> "
        })
        
    }
    nameInput.value='';
    emailInput.value='';
    phoneInput.value=''
}

function ShowDetails(obj){
        var li=document.createElement('li')
        li.appendChild(document.createTextNode(`${obj.name} : ${obj.email},${obj.phone}`))
        
        var delBtn=document.createElement('button')

        delBtn.className='deleteBtn delete'

        delBtn.appendChild(document.createTextNode('X'))

        li.appendChild(delBtn);

        

        delBtn.onclick = () =>{
            if(confirm(`Press Ok to delete`)){
            // localStorage.removeItem(obj.email)
            axios.delete(`https://crudcrud.com/api/59e48e42a64c47308a641c154562f0b0/AppData/${obj._id}`)
            .then((res)=>{
                console.log(res.statusText)
                userList.removeChild(li)
            })
            .catch(err=>console.log(err))
            
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
                console.log(obj._id)
                new SubmitEvent((e)=>{
                    e.preventDefault()
                    axios.put(`https://crudcrud.com/api/59e48e42a64c47308a641c154562f0b0/AppData/${obj._id}`,{
                        name:e.target.userName.value,
                        email:e.target.email.value,
                        phone:e.target.phone.value
                    })
                })
                
                // localStorage.removeItem(obj.email)
                // userList.removeChild(li)
            }
        }

        userList.appendChild(li)
    
    }
// ------------------------------------------------------------------------------------------------------------------
    
// -------------------------------------------------------------------------------------------------------------------
   

    
    
    
        

  
// --------------------------------------------------------------------------------------------------------
function removeUser(e){
    if(e.target.classList.contains('delete')){
        if(confirm(`Confirm to delete`)){
            var li=e.target.parentElement;
            
            
            userList.removeChild(li);

            
            
            

            
            
        }
    }
}

// function saveToCrud(e){
//     e.preventDefault();
//     var name=e.target.userName.value;
//     var email=e.target.email.value;
//     var phone=e.target.phone.value;
//     var obj={
//         name,
//         email,
//         phone}
    
//     if(nameInput.value=="" || emailInput.value==""|| phoneInput.value=="" ){
        
//     }
    
//     else{   
            
//             axios.post("https://crudcrud.com/api/eb39397dcb774e03980c8074be88b756/AppData",obj)
//             .then((res)=>{
//                 console.log(res.data)
                
//             })
//             // localStorage.setItem(obj.email, JSON.stringify(obj))
//             // var objDeserial=JSON.parse(localStorage.getItem(obj.email))
//             // console.log(objDeserial)
//         }
    
// }

