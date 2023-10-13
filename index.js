// Mera Logic
// document.getElementById('plus').addEventListener('click',function(){
//    document.getElementById('content').innerHTML++;
// });
// document.getElementById('minus').addEventListener('click',function(){
//     document.getElementById('content').innerHTML--;
// })

const countValue=document.querySelector('#counter');
const increment = ()=>{
   let value=parseInt(countValue.innerText);
   value=value+1;
   countValue.innerText=value;
}
const decrement = ()=>{
    let value=parseInt(countValue.innerText);

    
    value=value-1;
    countValue.innerText=value;
}