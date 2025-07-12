
// var add=(a,b)=>{
//     return a+b;
// } 

// var add=(a,b)=>{return(a+b)}

// var add=(a,b)=>a+b


// var result=add(2,3)
// console.log(result)
// ====================================

// (function(){
//     console.log('vishnu')
// })
// ();

// ============================================================

// function callback(){
//     console.log('my name ia vishnu')
// }
// const add=function(a,b,callback){
//     var result=a+b;
//     console.log("result :"+result)
//     callback();
// }
// var result=add(2,3 ,callback)




function callback(){
    console.log("this is callback fun")
}

const add=function(a,b,princ){
    var result=a+b;
    console.log(result)
    princ();
}
add(10,56,callback)