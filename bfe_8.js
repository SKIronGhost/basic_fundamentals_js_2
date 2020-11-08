// Longitudes previas - Pasado un array (similar a decir ‘tomado un array’ o ‘dado un array’) que contiene strings, reemplaza cada string con un número de acuerdo cantidad de letras (longitud) del string anterior. Por ejemplo, longitudesPrevias([“programar”,“dojo”, “genial”]) debería devolver [“programar”,9, 4]. Pista: ¿For loops solo puede ir hacia adelante?
var arr = ['programar','dojo', 'genial','hecho']

function longitudesPrevias(x){
  let a = 0
  let b = 0
  for(i=0;i<x.length;i++){
    a = b
    b = x[i].length
    if(i>0){
      x[i]=a
    }
  }
  return arr
}

console.log(longitudesPrevias(arr))