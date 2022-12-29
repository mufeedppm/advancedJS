var form=document.getElementById('addForm')
var itemList=document.getElementById('items')
var filter=document.getElementById('filter')

form.addEventListener('submit',addItem);
itemList.addEventListener('click',removeItem)
filter.addEventListener('keyup',filterItems)

function addItem(e){
    e.preventDefault();

    var newItem=document.getElementById('item').value;
    var newItem2=document.getElementById('item2').value;

    var li=document.createElement('li')

    li.className='list-group-item'

    li.appendChild(document.createTextNode(`${newItem}  ${newItem2}`))


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

function filterItems(e){
   

    var text=e.target.value.toLowerCase()

    var items=itemList.getElementsByTagName('li')

    Array.from(items).forEach(function(item){
        var itemName=item.firstChild.textContent;

        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display='block';
        }
        else{
            item.style.display='none'
        }
    });
}

