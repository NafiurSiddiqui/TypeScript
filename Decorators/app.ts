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

/**
 * 
 * //*---- Decorator factory

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

 * 
 */

//* Custom decorator

function WithTemplate(template: string, hookID: string, descriptionID: string) {
	return function (constructor: any) {
		const titleholder = document.getElementById(hookID);
		const descriptionholder = document.getElementById(descriptionID);
		const game = new constructor('Sonic Wings', 'Best dog fight game ever!');
		if (hookID && descriptionholder) {
			titleholder!.innerHTML = template;
			descriptionholder!.textContent = game.description;
		}
	};
}

@WithTemplate('<h1> BEST GAME </h2>', 'title', 'description')
class Game {
	title: string = '';
	description: string = '';

	constructor(title: string, description: string) {
		this.title = title;
		this.description = description;
	}
}
