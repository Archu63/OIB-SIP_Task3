function Convert()
{
var x=document.getElementById("temp").value;
x1=parseFloat(x);
selectElement=document.getElementById("unit");
a=selectElement.value;
if (a=="celsius")
{
out=(x1-32)*(5/9);
document.getElementById("display").textContent=out;
}
if (a=="fah")
{
out=x1*(9/5)+32;
document.getElementById("display").textContent=out;
}
if (a=="kelvin")
{
out=x1+273.15;
document.getElementById("display").textContent=out;
}
}
