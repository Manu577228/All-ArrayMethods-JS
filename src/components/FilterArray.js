const items = [
    { name:'Bike', price:100 },
    { name:'Tv', price:200 },
    { name:'Album', price:10 },
    { name:'Book', price:5 },
    { name:'Phone', price:500 },
    { name:'Computer', price:1000 },
    { name:'Keyboard', price:25 },  
]

// filter() :- Filter method takes each element in the array and puts a conditional statement against it.//

const filteredItems = items.filter ((item) => {
    return item.price <= 100 
});

console.log(filteredItems);