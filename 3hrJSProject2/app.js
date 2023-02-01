document.getElementById('myForm').addEventListener('submit',addProduct)
electronicsList=document.getElementById('electronics');
foodList=document.getElementById('food');
cosmeticsList=document.getElementById('cosmetics');

window.addEventListener('DOMContentLoaded',async ()=>{
    try{
        let getReq =await axios.get("https://crudcrud.com/api/3115ee4241574f95ad18f66c76c76485/productDetails")
        for(let i=0;i<getReq.data.length;i++){
            displayPoducts(getReq.data[i])
            console.log(getReq.data[i])
        }
    }catch{
        console.log("Something went wrong CODE:ERR DOM_CONT_LOADED")
    }
})
var product=document.getElementById('product')
var price=document.getElementById('price')
var category=document.getElementById('category')

async function addProduct(e){
    try{
        e.preventDefault();
        let obj={
            name:product.value,
            price:price.value,
            category:category.value
        }
        console.log(product.value)
        if(price.value=='' || product.value=='' || category.value==''){
            alert("Please enter all fields")
        }
        else{
            let postReq= await axios.post("https://crudcrud.com/api/3115ee4241574f95ad18f66c76c76485/productDetails",obj)

            displayPoducts(postReq.data)
            price.value=''
            product.value=''
            category.value=''
        }
    }catch{
        console.log("Something went wrong CODE:ERR ADD_PRODUCT")
    }
}



async function displayPoducts(obj){
    try{
        var li=document.createElement("li")
        
        var textNode=document.createTextNode(`Product Name: ${obj.name}  | Price: Rs ${obj.price} | Category: ${obj.category}`)
        
        li.appendChild(textNode)

        li.id=obj._id
        
        console.log(li)
  
        var delBtn=document.createElement('button')

        delBtn.className='btn btn-danger btn-sm '

        delBtn.appendChild(document.createTextNode('Delete Product'))

        li.appendChild(delBtn);
        
        li.appendChild(document.createElement("br"))
        li.appendChild(document.createElement("br"))


        if(obj.category=='Electronics'){
            electronicsList.appendChild(li)
        }
        else if(obj.category=='Food'){
            foodList.appendChild(li)
        }
        else {
            cosmeticsList.appendChild(li)
        }

        delBtn.onclick=()=>deleteProduct(obj._id)

    }catch{
        console.log("Something went wrong CODE:ERR DISP_PRODUCT")
    }
}

async function deleteProduct(key){
    try{
        if(confirm("Press OK to confirm delete")){
            
            let resource=await axios.delete(`https://crudcrud.com/api/3115ee4241574f95ad18f66c76c76485/productDetails/${key}`)
         
                child=document.getElementById(key)
                console.log(child)
                console.log(child.parentElement)
                if(child.parentElement===electronicsList){
                    electronicsList.removeChild(child)
                
                }
                else if(child.parentElement===foodList){
                    foodList.removeChild(child)
                }
                else if(child.parentElement===cosmeticsList){
                    cosmeticsList.removeChild(child)
            }
        
        }
    }catch{
      console.log("Something went wrong CODE:ERR DEL_PRODUCT")
    }
  }