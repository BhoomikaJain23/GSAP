function breakTheText(){
var h1=document.querySelector("h1")

var h1Text =h1.textContent;
//or
//var h1Text =document.querySelector("h1").textContent;

var splittedText = h1Text.split("")
var halfValue =Math.floor(splittedText.length/2);

var clutter=""




splittedText.forEach(function(elem,idx){
    //iske andr jo element log ke andr daalenge vo utni baar chalega jitne letters hai uss word me jispr forEach lgaya hai
   if(idx<halfValue){
      clutter+=`<span class="a">${elem}</span>`  
   }else{
      clutter+=`<span class="b">${elem}</span>`  
 }
    
})


  h1.innerHTML=clutter;
}
breakTheText();

gsap.from("h1 .a",{
    y:80,
    duration:0.6,
    delay:0.5,
    opacity:0,
    stagger:0.15//agr value minus me denge or ulta chalega 
})
gsap.from("h1 .b",{
    y:80,
    duration:0.6,
    delay:0.5,
    opacity:0,
    stagger:-0.15//agr value minus me denge or ulta chalega 
})