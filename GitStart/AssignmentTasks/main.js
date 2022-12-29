var form=document.getElementById('addForm')
var itemList=document.getElementById('items')

form.addEventListener('submit',addItem);
itemList.addEventListener('click',removeItem)

function addItem(e){
    e.preventDefault();

    var newItem=document.getElementById('item').value;

    var li=document.createElement('li')

    li.className='list-group-item'

    li.appendChild(document.createTextNode(newItem))

    
    

    
    var delBtn=document.createElement('button')

    delBtn.className='btn btn-danger btn-sm float-right delete'

    delBtn.appendChild(document.createTextNode('X'))

    li.appendChild(delBtn);

    var EditBtn=document.createElement('button')

    EditBtn.className=' btn float-right btn-sm'

    EditBtn.appendChild(document.createTextNode('Edit'))

    li.appendChild(EditBtn);

    
    itemList.appendChild(li)

} 

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm(`Confirm to delete`)){
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }

}