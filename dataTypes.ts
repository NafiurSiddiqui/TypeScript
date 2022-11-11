//A scenario where we rely on inference
const person = {
	name: 'Ed',
	age: 31,
	hobbies: ['coding', 'music'], //array infered
};

console.log(person);

//A scenario we rely on strictness, e.g, a TUPLE type comes in

const person2: {
	name: string;
	age: number;
	hobbies: string[];
	role: [number, string];
} = {
	name: 'Dooby',
	age: 21,
	hobbies: ['coding', 'music', 'writing'],
	role: [2, 'author'],
	//This way we have strictly defined role with two values only
};

//----------------ENUM Type

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

//BEST TO WRITE ENUM HERE

enum Role {
	ADMIN,
	READ_ONLY,
	AUTHOR,
}

const person3 = {
	name: 'Shooby',
	age: 27,
	hobbies: ['coding', 'Sports', 'writing'],
	role: Role.ADMIN,
};

if (person3.role === Role.AUTHOR) {
	console.log('Hello Author!');
}
//----------------ARRAY

//if we have a mix array

let myHobbies: any[];

//if we have defined typed array

let myGears: string[];

//--------------- UNION

const combine = (input1: number | string, input2: number | string) => {
	let result;

	if (typeof input1 === 'number' && typeof input2 === 'number') {
		result = input1 + input2;
	} else {
		result = input1.toString() + input2.toString();
	}
	console.log(result);

	return result;
};

// combine('Ed', 'kate');
// combine(5, 5);

//------------------- Literal Type

function printText(inputTxt: string, alignment: 'left' | 'right' | 'center') {
	switch (inputTxt && alignment) {
		case 'left':
			console.log('aligning to the left ' + inputTxt);
			break;
		case 'center':
			console.log('Aligning in the center' + inputTxt);
			break;
		case 'right':
			console.log('Aligning to the right ' + inputTxt);
			break;
		default:
			console.log('Just default');
	}
}
// printText('Hello, world', 'right');
// printText("G'day, mate", 'centre');

//----------- Type Aliases

type Combine = number | string;

const combineAgain = (input1: Combine, input2: Combine) => {
	let result;

	if (typeof input1 === 'number' && typeof input2 === 'number') {
		result = input1 + input2;
	} else {
		result = input1.toString() + input2.toString();
	}
	console.log(result);

	return result;
};

// combine('Ed', 'kate');
// combineAgain(5, 5);

//------ Function type

// let newFunc;

// 👆 we can assign anything to this. not good!

// let newFunc: Function;

// 👆 not this, since this is still vague

let newFunc: (a: Combine, b: Combine) => Combine;

newFunc = combineAgain;
// newFunc = 4;
console.log(newFunc(26, 4));

// CALLBACK function type

const sumAndLog = (a: number, b: number, cb: (c: number) => void) => {
	const result = a + b;

	cb(result);
};

sumAndLog(30, 30, (result) => console.log(result));

//-------------- UNKNOWN

let input: unknown;

input = 5;
input = 'myName';

//👆 better to use than 'any' when we don't know what we will get as value

//----------- NEVER

//something that NEVER returns anything, not even 'undefined'.

function generateError(message: string, code: number): never {
	throw {
		message: message,
		error: code,
	};
}

generateError('Something went wrong!', 5500);
