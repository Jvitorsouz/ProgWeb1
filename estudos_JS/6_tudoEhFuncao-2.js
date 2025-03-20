console.log(typeof Object) // Expected; function

class Produto{}
console.log(typeof Produto) // Expected: function
console.log(typeof Number) // Expected: function


const Cliente = function (){}
console.log(typeof Cliente) //Expected: function

console.log(typeof new Cliente()) //Expected: Object -> criação de um objeto
