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
let student1={age:20}



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

class student{

 static i=0;

 constructor(name,age,marks){

  this.name=name;

  this.age=age;

  // this.phone=phone;

  this.marks=marks;

  student.i+=1;
 }

  eligibleForPlacement(minAge){
      return (minMark) =>{
          if(this.marks>=minMark && this.age>=minAge){
            console.log(`${this.name} is  eligible for placement`)
          }
          else
            console.log(`${this.name} is not eligible for placement`)
    
      
     }
  
  
}   
  
 
}
let obj1=new student("akash",22,45)

let obj2=new student("abhinav",20,54)

let obj3=new student("aravind",24,45)

let obj4=new student("amal",23,32)

let obj5=new student("akshay",21,56)

obj1.eligibleForPlacement(21)(45)
obj2.eligibleForPlacement(21)(45)
obj3.eligibleForPlacement(21)(45)
obj4.eligibleForPlacement(21)(45)
obj5.eligibleForPlacement(21)(45)
  