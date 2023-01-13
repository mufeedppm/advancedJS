//1)
var obj={val:5};



function add(x,y,z){

  

 return this.val+x+y+z;

}

//ad

console.log(add.call(obj,5,3,1))



//2)
var obj={val:5};



function add(x,y,z){

  

 return this.val+x+y+z;

}



var arr=[3,4,5]



console.log(add.apply(obj,arr))


//3
var obj={val:5};



function add(x,y,z){

  

 return this.val+x+y+z;

}



let arr=[3,4,5]



let bound= add.bind(obj)



console.log(bound(1,1,1))




//4
let student={age:20}



function printAge(){

  return this.age;  



}



let ans=printAge.bind(student);



console.log(ans())

//-----------------------------------------------------------------------------

//1)

 let add=function(x){

  

 return function(y){

  console.log(x+y)

 }

}



let addTwo=add(2)



addTwo(3);