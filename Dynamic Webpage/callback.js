const posts=[
    {title:'Post 1',body:'this is post 1', createdAt:new Date().getTime()},
    {title:'Post 2',body:'this is post 2', createdAt:new Date().getTime()}
];


console.log(posts)
let intervalId;
getPost()
function getPost(){
    clearInterval(intervalId)
    intervalId=setInterval(() => {
        let output='';
        for(let i=0;i<posts.length;i++){
            output+=`<li>${posts[i].title} created  ${Math.floor((new Date().getTime()-posts[i].createdAt)/1000)} seconds ago</li>`
        }
        document.body.innerHTML=output;


    }, 1000);
    

}
// part1
let  createPost = async (post) => {
    try{
        let newPost= await new Promise((resolve, reject)=>{
            setTimeout(()=>{
                posts.push({...post,createdAt:new Date().getTime()})
                
                const error=false;

                if(!error){
                    resolve()
                }
                else{
                    reject("Error:something went wrong")
                }
            },1000)
        });
    }catch(e) {
            console.log(e)
        }

    
    
    
}

// createPost({title:'post 3',body:'this post 3'})
// .then((x)=>getPost())

// getPost()


async function deletePost(){
    try{
    let delPost = await new Promise((resolve,reject)=>{
        
        setTimeout(() => {
            
            if(posts.length){
                resolve(posts.pop())
            }
            else{
                reject("Error:Array empty")
            }
        }, 1000);
    })
    }catch(err){
        console.log(err)
    }
        
    
}

// deletePost().then(()=>{
//     getPost()
//     deletePost().then(()=>{
//         getPost();
//         deletePost().then(()=>{
//             getPost()
//             deletePost().then(()=>
//             getPost()).catch(err=>console.log(err))
//         }).catch(err=>console.log(err))
//     }).catch(err=>console.log(err))
// }).catch(err=>console.log(err))

async function delAfterCreate(){
    try{
        let cr1=createPost({title:'post 3',body:'this post 3'})
        await cr1;
        getPost()
        let cr2=createPost({title:'post 4',body:'this post 4'})
        await cr2;
        getPost();
        let del1=deletePost()
        await del1
        getPost()
        del1=deletePost()
        await del1
        getPost()
        del1=deletePost()
        await del1
        getPost()
        del1=deletePost()
        await del1
        getPost()
        
    }catch(err){
        console.log(err)
    }
}

delAfterCreate();

// createPost({title:'post 4',body:'this post 4'}).then((x)=>getPost())
// deletePost()

//     getPost()
//     setTimeout(() => {
//         // getPost()
//         deletePost().then(() => {
//             getPost() }).catch(err=>console.log(err))
       
//     }, 2000);
    
// }).catch(err=>console.log(err))


// part2
// promise.all

const user={
    name:"User",
    lastActivity:"monday 22"
}

function updateLastUserActivityTime(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            user.lastActivity = new Date().getTime()
            resolve(user.lastActivity=new Date())       
        }, 1000);
    })
}

function updatePost(){
    console.log(user.lastActivity)
    Promise.all([createPost,updateLastUserActivityTime])
    .then(()=>{
   // console.log(updateResolve)
        console.log(user.lastActivity)
        getPost()
        setTimeout(() => {
            deletePost().then(()=>{
                getPost()
                console.log(posts)
            })  
        }, 1000);
        
    }).catch(err=>console.log(err))
}
 
// updatePost();





