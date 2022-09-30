let cutPizzaSlices = (slices) => {
    return (x) => `Each Person gets ${slices / x} slices of pizza.`
};

var sharePizza = cutPizzaSlices(8);

console.log(sharePizza(2));
console.log(sharePizza(3));