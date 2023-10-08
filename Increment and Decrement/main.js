let count=0;
  let incbtn = document.getElementById('inbtn');
  incbtn.addEventListener('click',()=>{
    count = count+1;
    valuebtn.innerHTML= count;
  })
 let decbtn = document.getElementById('decbtn');
 decbtn.addEventListener('click',()=>{
    count = count-1;
    valuebtn.innerHTML= count;
 });
let reset = document.getElementById('reset');
reset.addEventListener('click',()=>{
  count = 0;
  valuebtn.innerHTML = count;
})
 
 