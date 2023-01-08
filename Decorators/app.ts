/**
 * @Decorator - It is all about classes.
 */

class Person {
	name = 'Ed';

	constructor() {
		console.log('Creating person object');
	}
}

const someone = new Person();

console.log(someone);
