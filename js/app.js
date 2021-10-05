//1
alert("Hola Mundo");

//2
document.write("Hola Mundo <br>");

//3
document.write(3 + 5 + "<br>");

/*
//4
var nombre = prompt("¿Cual es tu nombre?");
document.write("Hola "+ nombre);
*/

//5
var num1 = parseInt(prompt("Ingrese un primer numero"));
// var num2 = parseInt(prompt("Ingrese un segundo numero"));
// var num3 = parseInt(prompt("Ingrese un tercer numero"));
// document.write(num1+num2);

/*
//6
if (num1>num2) {
 alert("El numero mayor es: "+num1)   
} else {
alert("El numero mayor es: "+num2)
}
*/

/*
//7
if (num1>num2 && num1>num3) {
    alert("El numero mayor es: "+num1)   
} else if(num2>num1 && num2>num3){
    alert("El numero mayor es: "+num2) 
}  else {
  alert("El numero mayor es: "+num3) 
}
*/

//8 Numero divisible entre 2

/*
var
if (num1 % 2 == 0) {

} else {
  alert("El numero no divisible entre 2 o inpar")
}
*/

//13
var verificacion2357 = []
if (num1 % 2 == 0) {
  verificacion2357.push(1)
} else {
  verificacion2357.push(0)
} 
if (num1 % 3 == 0) {
  verificacion2357.push(1)
} else {
  verificacion2357.push(0)
}
 if (num1 % 5 == 0) {
  verificacion2357.push(1)
} else {
  verificacion2357.push(0)
} 
if(num1 % 7 == 0) {
  verificacion2357.push(1)
} else {
  verificacion2357.push(0)
}

alert("Numero verificado: " + verificacion2357);
document.write(verificacion2357);
if (condition) {
  
} else {
  
}