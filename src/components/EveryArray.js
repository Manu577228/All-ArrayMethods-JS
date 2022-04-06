const items = [
    { name:'Bike', price:100 },
    { name:'Tv', price:200 },
    { name:'Album', price:10 },
    { name:'Book', price:5 },
    { name:'Phone', price:500 },
    { name:'Computer', price:1000 },
    { name:'Keyboard', price:25 },  
]

// every() :- It also returns value in either true or false pattern exept it checks for all the array elements at once.

const inexpensiveItems = items.every((item) => {
   return item.price <= 100
});

console.log(inexpensiveItems);