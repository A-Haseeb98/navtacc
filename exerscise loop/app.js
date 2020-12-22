//1
// var NumArray = [];
// var sum = 0;
// for(var i=0; i<=9; i++ ){

// NumArray[i] = +prompt('Enter' + 'number :'+ i);
// sum += NumArray[i];
// }
// var avg = sum/10 ;
// console.log ('sum is :' + sum);
// console.log('avg is :' + avg);

//2
// var num = +prompt('Enter Number to generate table');
// for (i=1; i<=10; i++){
//     console.log( num + 'x' + i + '=' + i*num ) 
// }

//3
// var NumArray = [];
// var oddArray = [];
// var evenArray = [];

// for(var i=0; i<=9; i++ ){
// NumArray[i] = +prompt('Enter' + 'number :'+ i);

// if (NumArray[i] % 2){
//     evenArray.push(NumArray[i])
// }
// else {
//     oddArray.push(NumArray[i])
//  }
// }
// console.log(oddArray);
// console.log(evenArray);
// console.log(NumArray);

//4
// for (var i = 1; i<5 ; i++ ){
// for( var j = 1 ; j<=i ; j++){
//     document.write('*');
// }
// document.write('</br>');
// }

//5
// for (var i = 1; i<5 ; i++ ){
//     for( var j = 1 ; j<=i ; j++){
//         document.write(j);
//     }
//     document.write('</br>');
//     }

//6
// for (var i = 1; i<5 ; i++ ){
//     for( var j = 1 ; j<=i ; j++){
//         document.write(i);
//     }
//     document.write('</br>');
//     }

//7
// var num = +prompt('Enter Number');
// for (var i = num-1 ; i>0; i-- ){

//     num = num * i;
//     console.log(num);
// }
// console.log(num);

//8
var fnum = +prompt('Enter Starting range');
var Enum = +prompt('Enter Ending range');

for( var i = fnum; i<=Enum; i = i+2){
console.log( i +', ')

}

