/**
 * @Decorator - It is all about classes.
 * -- This is just a function that you apply to classes in certain way
 *
 */

//*---Decorator function

// function Logger(constructor: Function) {
// 	console.log('Logging..');
// 	console.log(constructor);
// }
//*---- Decorator factory

function Logger(loginMsg: string) {
	return function (constructor: Function) {
		console.log(loginMsg);
		console.log(constructor);
	};
}

@Logger('Logging in')
class Person {
	name = 'Ed';

	constructor() {
		console.log('Creating person object');
	}
}

const someone = new Person();

console.log(someone);

//* Custom decorator

// function WithTemplate(template: string, hookID: string) {
// 	return function (_: Function) {
// 		const hookEL = document.getElementById(hookID)!;
// 		console.log(hookEL);
// 		// const game = new constructor('Sonic Wings');
// 		if (hookEL) {
// 			hookEL.innerHTML = template;
// 		}
// 	};
// }

// @WithTemplate('<h1> BEST GAME </h1>', 'app')
// class Game {
// 	title = '';

// 	constructor(title: string) {
// 		this.title = title;
// 	}
// }
