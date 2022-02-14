
const result = document.querySelector('#result');
const btn = document.querySelector('.btn');
const btn1 = document.querySelector('.btn1');

//       let i = 0;
//   document.getElementsByClassName(".btn1").value = ++i;
      
// result.addEventListener("click",function(){
//     btn1.value = parseInt(btn1.value)+1;
// })

let i=0; 
function increment() {           
    i++;       
    document.getElementsByClassName('btn1').innerHTML= i;
}