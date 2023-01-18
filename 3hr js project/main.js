var form=document.getElementById('myForm')
var expenseList=document.getElementById('expense')
var amountInput=document.getElementById('amount')
var descriptionInput=document.getElementById('description')
var categoryInput=document.getElementById('category')


form.addEventListener('submit',addExpense)


function addExpense(e){
    e.preventDefault()
    var amount=e.target.amount.value;
    var description=e.target.description.value;
    var category=e.target.category.value;
    var obj={
        amount,
        description,
        category}


    if(amountInput.value=="" || descriptionInput.value=="" || categoryInput.value==""){
        alert("Please enter all fields")
    }
    else{
        localStorage.setItem(obj.description, JSON.stringify(obj))
        var li=document.createElement('li')
        li.appendChild(document.createTextNode(`${categoryInput.value} : ${descriptionInput.value} , Expense:${amountInput.value}`))
    
        var delBtn=document.createElement('button')

        delBtn.className='deleteBtn delete'

        delBtn.appendChild(document.createTextNode('Delete'))

        li.appendChild(delBtn);

        delBtn.onclick = () =>{
            if(confirm(`Press Ok to delete`)){
            localStorage.removeItem(obj.description)
            expenseList.removeChild(li)
            }
        }
        
        var EditBtn=document.createElement('button')

        EditBtn.className=' editBtn '

        EditBtn.appendChild(document.createTextNode('Edit'))

        li.appendChild(EditBtn);
        
        EditBtn.onclick = () =>{
            if(confirm(`Press OK to confirm edit`)){
                amountInput.value=obj.amount;
                descriptionInput.value=obj.description;
                categoryInput.value=obj.category;
                localStorage.removeItem(obj.description)
                expenseList.removeChild(li)
            }
        }

       

    


    expenseList.appendChild(li)

    
    
    
        

        amountInput.value='';
        descriptionInput.value='';
        categoryInput.value=''
    }
}
function removeUser(e){
    if(e.target.classList.contains('delete')){
        if(confirm(`Confirm to delete`)){
            var li=e.target.parentElement;
            
            
            expenseList.removeChild(li);

            
            
            

            
            
        }
    }
}

function saveToLocal(e){
    e.preventDefault();
    var amount=e.target.amount.value;
    var description=e.target.description.value;
    var category=e.target.category.value;
    var obj={
        amount,
        description,
        category}
    
        if(amountInput.value=="" || descriptionInput.value=="" || categoryInput.value==""){
           
        }
    
    else{   
            
            localStorage.setItem(obj.description, JSON.stringify(obj))
            
        }
    
}