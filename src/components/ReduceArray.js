const items = [
    { name:'Bike', price:100 },
    { name:'Tv', price:200 },
    { name:'Album', price:10 },
    { name:'Book', price:5 },
    { name:'Phone', price:500 },
    { name:'Computer', price:1000 },
    { name:'Keyboard', price:25 },  
]

// reduce() :- It reduces the array of values to single value . It has 2 parameters 1)Initial value & 2)Final value.

const totalPrice = items.reduce((total, item) => {
return item.price + total 
}, 0);

console.log(totalPrice);
