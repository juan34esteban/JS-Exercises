const obtenerMenor = (numeros) =>{
    let menor = Infinity;
     for(let i = 0; i<numeros.length; i++){
         if(numeros[i]<= menor){
             menor=numeros[i];
       }
    }
    return (menor);
}
console.log(obtenerMenor([5,4,7,9,2,1]))

//Ejercicio 2

const sumaNumeros = (numero) =>{
    let final = "";
    for(let i = 0; i<numero.length; i++){
        final = parseInt(final + numero[i])
    }
    return (final)
}

console.log(sumaNumeros([2,2,2,2]));

//Ejercicio 3

const contieneIndice = (numero, numero2) =>{
    for(let i = 0; i<numero2.length; i++){
        if(numero2[i] === numero){
            return true
        } 
    }
    return false

}

console.log(contieneIndice(34,[4,5,6,7,34]))///true
console.log(contieneIndice(1,[4,5,6,7,34]))///false


//Ejercicio 4

const separar = (string) => {
    const arrayEmoji = string.sort().reverse();
    return arrayEmoji

}

console.log(separar(['🐩','🐈','🐩','🐈','🐩','🐈']));

//Ejercicio 5

const estarJuntos = (personajes) => {
    const frodo = personajes.indexOf('Frodo'); //buscar los nombres
    const sam = personajes.indexOf('Sam');
    return sam - frodo === 1 ||sam - frodo === -1
}

console.log(estarJuntos(['Sam', 'Frodo', 'Legolas']))//true
console.log(estarJuntos(['Aragorn', 'Frodo', 'Gandalf']))//false
console.log(estarJuntos(['Frodo', 'Sam', 'Smeagol']))//false

//Ejercicio 6

const obtenerIndice = (valor1, array) => {
    return array.indexOf(valor1);
   

}
console.log(obtenerIndice(5,[2,2,2,2,2,2,2]))///true
console.log(obtenerIndice(1,[4,5,6,7,34]))///false


//Ejercicio 7

const repetir = (valor, cantidad) =>{
    let print = []
    for(let i=0;i<cantidad;i++){
        print.push(valor);
    }
  return (print);
}

console.log(repetir('love',3))///true
console.log(repetir('a',5))///true
console.log(repetir('html',5))///true
