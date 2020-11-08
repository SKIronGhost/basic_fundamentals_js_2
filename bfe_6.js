// Pares e Impares - Crea una función que acepte un array. Cada vez que ese array tenga 3 valores impares seguidos, imprime (print) “¡Qué imparcial!”, y cada vez que tenga 3 pares seguidos, imprime (print) “¡Es para bien!”.

var arr1 = [-2,3,3,-3,4,3]
var arr2 = [2,8,-8,8,3,4,2,6,3]
var arr3 = [7,7,7,4,4,4]
var arr4 = [1,2]

function pairsAndOdds(x){
  let odds = 0
  let pairs = 0
  if(x.length<3){
    return "not checkable"
  }
  else{
    for(i=0;i<x.length;i++){

      if(x[i]%2==1 || x[i]%2==-1){
        odds++
        pairs = 0
        if(odds==3){
          console.log("¡Qué imparcial!")
        }
      }

      if(x[i]%2==0 || -x[i]%2==0){
        pairs++
        odds = 0
        if (pairs==3){
        console.log("¡Es para bien!")
        }
      }
    }
  }
}

console.log(pairsAndOdds(arr1))
console.log(pairsAndOdds(arr2))
console.log(pairsAndOdds(arr3))
console.log(pairsAndOdds(arr4))