

var a=10
console.log(a)

// let have only block scope
{
    let n=20;
    console.log(n)
}
// console.log(n)  here we got referene error


// let varibale ko  we can not redclear and cost aslo we can not redclear
function test(){
     var a= "naseem"
     let b= "choudahry"
     if(true){
        let a ="raja"
        //var b=        here let varibale ko redeclear nhi kar sakte in the same scope
        console.log(a)

     }
     console.log(a)
}

test();




