//codigo sincrono secuecncial

console.log(1);

console.log(2);

console.log(3);

//callback function asincronicidad

const firstFunction = () => {
    console.log("This is the first function");

}

const secondFunction = () => {
    firstFunction();
    console.log("This is the second function");
}

const thirdFunction = () => {
    secondFunction();
    console.log("This is the third function");
}

function one(){return 25};
function two(){return 20};

const functionSum=(oneFunction,twoFunction)=> {
    const suma = oneFunction()+ twoFunction();
    return suma
}

console.log(functionSum(one,two)); //cuando pasamos una función como parametro, no ponemos paréntesis
//thirdFunction();


//CALL BACK en métodos de arreglos (ForEach, map,filter)

var arreglo1 = ["Brenda", "Fer", "Carlos", "Agnes", "Rene"];

arreglo1.forEach((elemento,indici,arr)=> {
    console.log(elemento);
    console.log(indice);
    console.log(arr);
}); 

// SETTIMEOUT es para ejecutar una función después de cierto tiempo
console.log ("UNO");
setTimeout(function())