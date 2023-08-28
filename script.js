
var cel = document.getElementById('cel');
var fah = document.getElementById('fah');
var kel = document.getElementById('kel');

cel.addEventListener('input',function(){
    console.log("Celsius value changed");
    let c=this.value;
   let f=((c*9/5)+32).toFixed(2);
   let k=((c-0)+273.15).toFixed(2);
   fah.value=f;
   kel.value=k;
});
fah.addEventListener('input', function(){
    console.log("Celsius value changed");
    let f=this.value;
   let c=((f - 32) * 5/9).toFixed(2);
  let k = ((f- 32) * 5/9 + 273.15).toFixed(2);
  cel.value=c;
   kel.value=k;

});
kel.addEventListener('input', function(){
   console.log("Celsius value changed");
    let k=this.value;
   let c=(k - 273.15).toFixed(2);
 let f= ((k - 273.15) * 9/5 + 32).toFixed(2);
  cel.value=c;
   fah.value=f;
});








