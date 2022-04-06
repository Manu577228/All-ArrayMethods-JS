const items = [
    { name:'Bike', price:100 },
    { name:'Tv', price:200 },
    { name:'Album', price:10 },
    { name:'Book', price:5 },
    { name:'Phone', price:500 },
    { name:'Computer', price:1000 },
    { name:'Keyboard', price:25 },  
]

//  find() :- Find method returns the value of the first element in the array after it passes a test.

const findItems = items.find ((item) => {
return item.name === 'Book' 
});

console.log(findItems);

