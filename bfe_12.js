// Siempre hambriento - Crea una función que acepte un array e imprima (print) “yummy” cada vez que alguno de los valores sea “comida”. Si ningún valor es “comida”, entonces imprime “tengo hambre” una vez. 

var arr1 = [1,3,"comida","hola","comida"]
var arr2 = [4,3,"hola","nada"]

function starving(x){
  let counter = 0
  for(i=0;i<x.length;i++){
    if(x[i]=="comida"){
      console.log("yummy")
    }
    else{
      counter++
      if(counter==x.length){
        return "tengo hambre"
      }
    }
  }
  
}

console.log(starving(arr1))
console.log(starving(arr2))