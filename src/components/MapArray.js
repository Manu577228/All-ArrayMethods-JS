const items = [
    { name:'Bike', price:100 },
    { name:'Tv', price:200 },
    { name:'Album', price:10 },
    { name:'Book', price:5 },
    { name:'Phone', price:500 },
    { name:'Computer', price:1000 },
    { name:'Keyboard', price:25 },  
]

// map() :- Map method is used to create new array of output with the existing array. //

const mappedItems = items.map ((item) => {
  return item.name
});

console.log(mappedItems);