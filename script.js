
const result = document.getElementById('result');
const lower = document.getElementById('lower');// pakasacnelu btn
const add = document.getElementById('add'); // avelacnelu btn-a
const result1 = document.getElementById("result1");
const  item1 =document.getElementById("item1");
const  item2 =document.getElementById("item2");
const  submit =document.getElementById("submit");
  add.addEventListener("click",()=>{
        result.value++;
  });

  lower.addEventListener("click",()=>{
      result.value--;
});

function addd(a){
    return function (b){
    return a + b ;
 
    }
  
}

submit.addEventListener("click",()=>{
 result1.value = addd(+item1.value )(+item2.value);
})

