//*-------INTERFACE
/**
*interface Person {
	name: string;
	age: number;
	greet(message: string): void;
}

let user1: Person;

user1 = {
	name: 'John',
	age: 30,
	greet(phrase: string) {
		console.log(`${phrase} ${this.name}`);
	},
};
*/

//*------ with class

/**
*interface Greetable {
	name: string;
	readonly affirmation: string;
	greet(message: string): void;
}

class Person implements Greetable {
	name: string;
	affirmation: string;
	age = 30;
	constructor(n: string, affirmation: string) {
		this.name = n;
		this.affirmation = affirmation;
	}
	greet(message: string): void {
		throw new Error('Method not implemented.');
	}
}

let user1: Greetable;

user1 = new Person(
	'Eddie',
	'I am getting better dealing with my stress everyday!'
);

*/

//*------EXTENDING interface

/**
*interface login {
	password: number;
}

interface Greetable extends login {
	name: string;
	readonly affirmation: string;
	greet(message: string): void;
}

class Person implements Greetable {
	name: string;
	affirmation: string;
	age = 30;
	password: number;
	constructor(n: string, affirmation: string, password: number) {
		this.name = n;
		this.affirmation = affirmation;
		this.password = password;
	}
	greet(message: string): void {
		throw new Error('Method not implemented.');
	}
}

let user1: Greetable;

user1 = new Person(
	'Eddie',
	'I am getting better dealing with my stress everyday!',
	1234
);

*/

//*----- Function

/**
*interface division {
	(a: number, b: number): number;
}

const divide: division = (a: number, b: number) => a / b;

*/

//*------ Optional parameters and properties

// 👇  notice the ? marks
interface login {
	password: number;
	changePassword?: () => void;
	isActive?: boolean;
}

interface Greetable extends login {
	name: string;
	readonly affirmation: string;
	greet(message: string): void;
}

// 👇 isLogin

class Person implements Greetable {
	name: string;
	affirmation: string;
	age = 30;
	password: number;
	isLogin?: boolean;
	constructor(
		n: string,
		affirmation: string,
		password: number,
		isLogin?: boolean
	) {
		this.name = n;
		this.affirmation = affirmation;
		this.password = password;
		if (isLogin) {
			this.isLogin = isLogin;
		}
	}
	greet(message: string): void {
		throw new Error('Method not implemented.');
	}
}

let user1: Greetable;

user1 = new Person(
	'Eddie',
	'I am getting better dealing with my stress everyday!',
	1234
);
