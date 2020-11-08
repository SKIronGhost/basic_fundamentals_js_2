// Escala el Array - Dado un array arr y un número num, multiplica todos los valores en el array arr por el número num, y devuelve el array arr modificado. Por ejemplo, escalaArray([1,2,3], 3] debería devolver [3,6,9]
var arr = [8,2,1,0,5]
var num = 3

function multiply(a,b){
  for(i=0;i<a.length;i++){
    a[i]=a[i]*b
  }
  console.log(a)
}

console.log(multiply(arr,num))