const items = [
    { name:'Bike', price:100 },
    { name:'Tv', price:200 },
    { name:'Album', price:10 },
    { name:'Book', price:5 },
    { name:'Phone', price:500 },
    { name:'Computer', price:1000 },
    { name:'Keyboard', price:25 },  
]

// forEach() :- similar to map function but it doesnt create new array of output & its return value is always defined or it doesn't return anything.

const forEachItems = items.forEach((item) => {
    console.log(item.price)
});