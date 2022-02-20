
const result = document.getElementById('result');
const lower = document.getElementById('lower');// pakasacnelu btn
const add = document.getElementById('add'); // avelacnelu btn-a
const result1 = document.getElementById("result1");
const  item1 =document.getElementById("item1");
const  item2 =document.getElementById("item2");
const  submit =document.getElementById("submit");

let i = 0;

add.addEventListener("click",()=>{
    
    result.value= counter.up();
})
 

  lower.addEventListener("click",()=>{
      result.value=counter.down();
  
});

let counter = new Calc();

function Calc(){
     let count = 0;
    this.up = function(){
        console.log("====",Calc.count);
        return ++count;
    }
    this.down = function(){
        return --count
    }
}

function addd(a){
    return function(b){
       return a+b;
    }
}

submit.addEventListener("click",()=>{
 result1.value = addd(+item1.value )(+item2.value);
});

//fibonacci

 function fibonacci(num){ //num fibonacci = 0  , fib 8 = 21  
     if(num <= 1){
         return num;
     }
     return fibonacci(num-1) + fibonacci(num-2) 
 }

document.getElementById("addNum").addEventListener("click",() =>{
document.getElementById("fibonacci-res").value += 
  fibonacci(i);
      i++;
       
      })
      document.getElementById("clear").addEventListener("click", ()=>{// clear fibonacci function
        document.getElementById("fibonacci-res").value = "";
        i=0;
      })

      let int ;
        function on(){
        int = setInterval(() => {
        document.getElementById("interval").value++;
       }, 1000)};
           
       function off(){
           clearInterval(int);
        document.getElementById("interval").value = "";
    }

       document.getElementById("start").addEventListener("click",on)

        document.getElementById("stop").addEventListener("click",off)
      
 

