document.write(" hello world")
// console.log(" i am shubham")

// console.error("i am shubham")
// console.info("i am shubham")

// let name=prompt("Enter your name","shubham")
// console.log(name)

// function namea(){
// console.log("hellow");
// return 5
// }
// console.log(namea())

// const myFun2=()=>{
//     console.log("my fun 2")
//     return 4
// }


// let a = myFun2()
// console.log(a)


// var a= 10
// {
//     var a= 20
//     a=a+2
//     console.log(a)
// }
// console.log(a)

// setTimeout(()=>{
//     alert("abe apala kam ker")
// },2000)


// function love(a,b){
//     c=a+b
//     console.log(c)
// }

// love("shubham","  Nanne")

// printn number


//  function PrintN(n){
//  for(i=0; i<=n; i++) console.log(i)
//  }

//  PrintN(10)

// // print max number
// let value
// function max(mux,min){

//    value=(mux>min)?mux:min
   
//    value=`the max is between ${mux} and ${min} is :- ${value}`
//    return value
// }
// console.log(max(10,20))

// // factoral
// function factorial(number){
//     let fact=1
//     for(let i=1;i<=number;i++){
//         fact=fact*i
//     }

//     fact=`the factorial of ${number} is :- ${fact}`
//     return fact
// }

// console.log(factorial(5))

// let array=[1,2,"shubham",1.0,"jay"]
// console.log(array);
// let a=array.toString()
// console.log(a);
// let arr=[33,00]
// let j=array.join(arr)
// console.log(j);
// let pu=array.push(420)
// console.log(pu);
// let po = array.pop()
// console.log(po);

// let obj = {
//     0 : 1,
//     1 : 2,
//     2 : 3
// }
// console.table(obj)

// for(let i=0; i<3;i++){
//     let arr2=prompt("Enter the element of array")
//     console.log(arr2)
// }

// let arr3=[1,3,5,7,8,9,4,7,35,367,9]
// let sum =0
// for(let i=0;i<arr3.length;i++){
//     sum=sum+arr3[i]
//     console.log(sum)
// }
// console.log(sum)

// let arr4=[1,2,3,4,5,6,7,8,9,0]

// function linearsearch(target){
// for(let i=0;i<arr4.length;i++){
    
//     // console.log(arr4[i])
    
//     if(arr4[i]===target){
        
//        return target +" index in = z"+i
//     }
   
// }
// return -1
// }



// console.log(linearsearch(7))

let obj={
    "name":"shubham",
    "age":19,
    "DOB":"15-09-2003",
    "favourite movie":["your Name","i want to eat your pankiriyas"],
    "height":5.7,
    "color":"black-red",
    "my friend":["jay","srushti","vaishnavi","asmit"]
}
console.log(obj["favourite movie"][0]);
console.log(obj["my friend"])