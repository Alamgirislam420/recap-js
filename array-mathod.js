const products = [
    {name: 'laptop', price: 300, brand: 'lenovo', color: 'yellow'},
    {name: 'phone', price: 9000, brand: 'iphone', color: 'blue'},
    {name: 'bike', price: 100000, brand: 'tvs', color: 'read'},
    {name: 'watch', price: 500, brand: 'casino', color: 'black'},
]

const brand = products.map(product => product.brand);
console.log(brand,);
const price = products.map(product => product.price);
console.log(price);
const name = products.map(product => product.name);
console.log(name);