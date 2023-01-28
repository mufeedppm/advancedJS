var form=document.getElementById('myForm')
var electronicsList=document.getElementById('electronics')
var foodList=document.getElementById('food')
var cosmeticsList=document.getElementById('cosmetics')
var priceInput=document.getElementById('price')
var productInput=document.getElementById('product')
var categoryInput=document.getElementById('category')

window.addEventListener('DOMContentLoaded',()=>{
    axios.get("https://crudcrud.com/api/2c75fa0ad52d49ba95db0a10418b20a5/productDetails")
    .then((res)=>{
        for(let i=0;i<res.data.length;i++){
            showDetails(res.data[i])
            console.log(res.data[i])
        }
    }).catch(err=>console.log(err))
})

document.addEventListener('submit', addProduct)



function addProduct(e){
    e.preventDefault();
    var price=e.target.price.value
    var product=e.target.product.value
    var category=e.target.category.value
    var obj={
        price,
        product,
        category
    }
    if(priceInput.value=='' || productInput.value=='' || categoryInput.value==''){
        alert("Please enter all fields")
    }
    else{
        axios.post("https://crudcrud.com/api/2c75fa0ad52d49ba95db0a10418b20a5/productDetails",obj)
        .then((res)=>{
            console.log(res.data)
            showDetails(res.data)
            priceInput.value=''
            productInput.value=''
            categoryInput.value=''
        }).catch(err=>console.log(err))

    }
}

function showDetails(obj){
    var li=document.createElement('li')
    
    var textNode=document.createTextNode(`Price:${obj.price} Product Name: ${obj.product} Category:${obj.category}`)
    
    li.appendChild(textNode)
    
    var delBtn=document.createElement('button')

    delBtn.className='deleteBtn delete'

    delBtn.appendChild(document.createTextNode('Delete Product'))

    li.appendChild(delBtn);

    

    delBtn.onclick = () =>{
        if(confirm(`Press Ok to delete`)){
         var cat=obj.category;
        axios.delete(`https://crudcrud.com/api/2c75fa0ad52d49ba95db0a10418b20a5/productDetails/${obj._id}`)
        .then((res)=>{
            if(cat=="electronics"){
                electronicsList.removeChild(li)
            }
            else if(cat=="food"){
                foodList.removeChild(li)
            }
            else{
                cosmeticsList.removeChild(li)
            }
            // console.log(res.statusText)
            
        })
        .catch(err=>console.log(err))
        
        }
    }

    if(obj.category=='electronics'){
        electronicsList.appendChild(li)
    }
    else if(obj.category=='food'){
        foodList.appendChild(li)
    }
    else{
        cosmeticsList.appendChild(li)
    }

}