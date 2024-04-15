//Uso de callback
function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2);
}

console.log(calc(2, 2, sum));


//uso de setTimeout
setTimeout(function() {
    console.log("Hola mundo!");
}, 2000)

//Otra variante de setTimeout

function gretting(name) {
    console.log(`Hola ${name}`);
}

setTimeout(gretting, 2000, 'Julio');