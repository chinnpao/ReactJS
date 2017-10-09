var names = ['Andrew', 'Julie', 'Jen'];

// names.forEach(function (name) {
// 	console.log("forEach", name);
// });

// names.forEach((name) => {
// 	console.log("arrowFunc", name);
// });

// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe("Chinnpao"));

// var person = {
// 	name: "Chinnpao",
// 	greet: function () {
// 		names.forEach((name) => {
// 			console.log(this.name + " says hi to " + name);
// 		});
// 	}
// };
//
// person.greet();

// Challenge Area
// function add(a, b) {
// 	return (a + b);
// }

var addStatement = (a, b) => {
	return a + b;
};
console.log("Statement: " + addStatement(1, 3));
console.log("Statement: " + addStatement(4, 5));

var addExpression = (a, b) => a + b;
console.log("Expression: " + addExpression(2, 4));
console.log("Expression: " + addExpression(8, 8));
