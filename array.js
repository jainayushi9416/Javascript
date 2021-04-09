// let a=[];
// a[0]=1;
// a[1]=9;
// console.log(a);


//let a=[1,2,7,4,8,9];
// console.log(a);



// let a=[1,2,7,4,8,9]; //Find smallest and largest number
// function las(arr) {
//     let largest=-19999;
//     let smallest=10000000;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>largest){
//             largest=arr[i];
//         }
//         if(arr[i]<smallest){
//             smallest=arr[i];
//         }
//     }
//     console.log(smallest +" "+largest);
//  }
// las(a);      //OUTPUT: 1 9


//Find the indexes at which 1 come
// let a=[5,1,8,9,1,18,1,1];  
// for(let i=0;i<a.length;i++){
//     if(a[i]==1 ){
//         console.log(i+1);
//     }
// }     // Output:1 4 6 7



//Find the index at which 1 came at first and last index  //Output: 2 7
let a=[5,1,8,9,1,18,1,1];
let first=-1,last=-1;
 for(let i=0;i<a.length;i++){
     if(a[i]==1 ){
        if(first==-1){
            first=i;
            last=i;
        }
        else{
            last=i;
        }
     }
 }
 console.log(first);
 console.log(last);