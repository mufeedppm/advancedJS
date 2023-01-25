

// AXIOS GLOBAL
axios.defaults.headers.common['X-Auth-Token']='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'

// GET REQUEST
async function getTodos() {
    try{
    let getReq=axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5",{timeout:50})
    let resp=await getReq;
    showOutput(resp);
    }catch(err){console.log(err)}
  }
  
  // POST REQUEST
  // async function addTodo() {
  //   try{
  //     let postReq=axios({
  //       method :'post',
  //       url : "https://jsonplaceholder.typicode.com/todos",
  //       data:{
  //         title:"New Todo",
  //         completed: false

  //       }
  //     })
  //     let resp=await postReq;
  //     showOutput(resp);
  //     }catch(err){console.log(err)}
  // }
  async function addTodo() {
    try{
      let postReq=axios.post("https://jsonplaceholder.typicode.com/todos",{
        title:"New Todo",
        completed: false
      })
        
      let resp=await postReq;
      showOutput(resp);
      }catch(err){console.log(err)}
  }
  
  // PUT/PATCH REQUEST
  // async function updateTodo() {
  //   try{
  //     let putReq=axios.put("https://jsonplaceholder.typicode.com/todos/1",{
  //       title:"updated Todo",
  //       completed: true
  //     })
        
  //     let resp=await putReq;
  //     showOutput(resp);
  //     }catch(err){console.log(err)}
  // }
  async function updateTodo() {
    try{
      let putReq=axios.patch("https://jsonplaceholder.typicode.com/todos/1",{
        title:"updated Todo",
        completed: true
      })
        
      let resp=await putReq;
      showOutput(resp);
      }catch(err){console.log(err)}
  }
  //  function updateTodo() {
    
  //     axios.patch("https://jsonplaceholder.typicode.com/todos/1",{
  //       title:"updated Todo",
  //       completed: true
  //  })
       
  //     .then(resp =>showOutput(resp))
  //     .catch(err=>console.log(err))
  //  }
  
  // DELETE REQUEST
  async function removeTodo() {
      try{
        let putReq=axios.delete("https://jsonplaceholder.typicode.com/todos/1",{
          title:"updated Todo",
          completed: true
        })
          
        let resp=await putReq;
        showOutput(resp);
        }catch(err){console.log(err)}
  }
  
  // SIMULTANEOUS DATA
  async function getData() {
    try{
      let  simReq
        simReq =  await axios.all([
        axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5"),
        axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5")])
        
      // let resp=await simReq;
      .then(axios.spread((todos ,posts)=>showOutput(todos)))
      }catch(err){console.log(err)}
  }
  
  // CUSTOM HEADERS
  async function customHeaders() {
    try{
      let config={
        headers : {
          'Content-Type':'application/json',
          Authorization: 'token'
        }
      }
      let postReq=axios
      .post("https://jsonplaceholder.typicode.com/todos",
      {
        title:"New Todo",
        completed: false
      },
      config
      )
        
      let resp=await postReq;
      showOutput(resp);
      }catch(err){console.log(err)}
  }
  
  // TRANSFORMING REQUESTS & RESPONSES
  function transformResponse() {
    
      let options={
        method:'post',
        url:("https://jsonplaceholder.typicode.com/todos"),
        data:{
          title:"hello world"
        },
        transformResponse : axios.defaults.transformResponse.concat(data =>{
          data.title=data.title.toUpperCase();
          return data;
      })
    };
      
    axios(options).then(res => showOutput(res))  
        
      
  }
  
  // ERROR HANDLING
  async function errorHandling() {
    try{
      let getReq=axios.get("https://jsonplaceholder.typicode.com/todoss")
      let resp=await getReq;
      showOutput(resp);
      }catch(err){
        if(err.response){
        console.log(err.response.data)
        console.log(err.response.status)
        console.log(err.response.headers)
        }
        if(err.response.status === 404)
            alert("Error 404:Page not found!!")
      
      }

        
  }
  
  // CANCEL TOKEN
    function cancelToken() {
    // const source= axios.CancelToken.source()

    
      const source= axios.CancelToken.source()
      axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5",{
      cancelToken:source.token})
      .then((resp)=>{showOutput(resp)})
      
      .catch(thrown=>{
        if(axios.isCancel(thrown)){
          console.log('Request cancelled', thrown.message)
        }
      })
      if (true){
        source.cancel('request cancelled')
      }
  }
  
  // INTERCEPTING REQUESTS & RESPONSES
  axios.interceptors.request.use(
    config => {
      console.log(`${config.method.toUpperCase()} request sent to ${config.url} at ${new Date()}`)

      return config;
    },error =>{
      return Promise.reject(error)
    }
  )
  // AXIOS INSTANCES

  const axiosInstance= axios.create({
    baseURL:"https://jsonplaceholder.typicode.com"
  })

  // axiosInstance.get("/comments?_limit=5").then(resp=>showOutput(resp)).catch(err=>console.log(err))
  
  // Show output in browser
  function showOutput(res) {
    document.getElementById('res').innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${res.status}</h5>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Headers
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.headers, null, 2)}</pre>
      </div>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Config
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.config, null, 2)}</pre>
      </div>
    </div>
  `;
  }
  
  // Event listeners
  document.getElementById('get').addEventListener('click', getTodos);
  document.getElementById('post').addEventListener('click', addTodo);
  document.getElementById('update').addEventListener('click', updateTodo);
  document.getElementById('delete').addEventListener('click', removeTodo);
  document.getElementById('sim').addEventListener('click', getData);
  document.getElementById('headers').addEventListener('click', customHeaders);
  document
    .getElementById('transform')
    .addEventListener('click', transformResponse);
  document.getElementById('error').addEventListener('click', errorHandling);
  document.getElementById('cancel').addEventListener('click', cancelToken);