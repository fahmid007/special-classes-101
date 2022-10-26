// //For Loop Start
// function factorial(n){
//     var factorial = 1;
//     for(i=1;i<=n;i++){
//         factorial = factorial * i;
//         console.log(i,factorial);
//     }
//     return factorial;
// }
// var result = factorial(15);
// console.log('The final result is: ' + result);
// //For Loop End


// // //While Loop Start
// // var i = 1;
// // var factorial = 1;
// // while(i<=15){
// //       factorial = factorial*i;
// //     console.log(i,factorial);
// //     i++
// // }
// function factorial(n){
//     var i = 1;
//     var factorial = 1;
//     while(i<=n){
//         factorial = factorial*i;
//         console.log(i,factorial);
//         i++
//     }
//     return factorial;
// }
// var result = factorial(10);
// console.log('The final result is: ' + result);
// function factorial(n){
//     var i = 1;
//     var factorial = 1;
//     while(i>=n){
//         factorial = factorial*i;
//         console.log(i,factorial);
//         i--
//     }
//     return factorial;
// }
// var result = factorial(10);
// console.log('The final result is: ' + result);
// // //While Loop End



// Recursive Loop Start
function factorial(n){
    if(n == 0){
        return 1;
    }else{
        return n = n * factorial(n-1);
    }
}

var result = factorial(0);
console.log(result);
// Recursive Loop End