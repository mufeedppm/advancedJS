const posts=[
    {title:'Post 1',body:'this is post 1', createdAt:new Date().getTime()},
    {title:'Post 2',body:'this is post 2', createdAt:new Date().getTime()}
]
let intervalId;
 
function getPosts(){
    clearInterval(intervalId)
    intervalId= setInterval(() => {
        output=''
        posts.forEach((post) => {
            output+=`<li>${post.title} created  ${Math.floor((new Date().getTime()- post.createdAt)/1000)} seconds ago</li>`
        });
        document.body.innerHTML=output;  
    }, 1000);
    
}

function createPost(post,callback){
    setTimeout(() => {
        posts.push({...post,createdAt:new Date().getTime()})
        callback()
    },2000)
}



createPost({title:'Post 3',body:'this is post 3'},getPosts)


function create4thPost(post,callback){
    setTimeout(() => {
        posts.push({...post,createdAt:new Date().getTime()})
        callback()
    },2000)
}

create4thPost({title:'Post 4',body:'this is post 4'},getPosts)