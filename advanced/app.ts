//-------------- INTERSECTION

/**
 * //EXAMPLE: 1

type Admin = {
	name: string;
	privilges: string[];
};

type Employee = {
	name: string;
	startDate: Date;
};


type ElevatedEmployee = Admin & Employee;


const e1: ElevatedEmployee = {
    name: "Timmy",
    privilges: ['create-server'],
    startDate: new Date();
}

//EXAMPLE 2

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;
 * 
 */

//------------- Type Guards

/**
*type Admin = {
	name: string;
	privilges: string[];
};

type Employee = {
	name: string;
	startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

//SCENE 1
function add(a: Combinable, b: Combinable) {
	if (typeof a === 'string' || typeof b === 'string') {
		return a.toString() + b.toString();
	}

	return a + b;
}

//SCENE 2

//we may have a scene where we can't type guard with typeof, like in the scenario of an object check. We can not directly access the properties for check, nor we can do typeof === 'object'. in that case, the following hack will work

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
	console.log(`Name: ${emp.name}`);
	// console.log(`Privileges: ${emp.privileges}`);
	//👆 this will not work

	if ('privileges' in emp) {
		console.log(`Privileges: ${emp.privileges}`);
	}

	if ('startDate' in emp) {
		console.log(`Start Date: ${emp.startDate}`);
	}
}

*/

//------------- Discriminated Union

/**
*interface Bird {
	flyingSpeed: number;
	type: 'bird'; //name is upto you
}

interface Horse {
	runningSpeed: number;
	type: 'Horse';
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
	let speed;
	switch (animal.type) {
		case 'bird':
			speed = animal.flyingSpeed;
			break;
		case 'Horse':
			speed = animal.runningSpeed;
	}

	console.log(`Moving at the speed of : ${speed}`);

	// console.log(`Moving with speed: ${animal.runningSpeed}`);
}

moveAnimal({ type: 'bird', flyingSpeed: 1000 });

*/

//--------- Type Casting

//When TS can not detect a type that we know it exist.
//for instance, we have a DOM input of id 'user-input'

// const userInput = document.getElementById('user-input');

// userInput.value = 'Hi there!';

// 👆 Does not work

// const userInput = document.getElementById('user-input')!;

// userInput.value = 'Hi there!';

// 👆 Now only the HTML element is valid

//FIX - 1

// const userInput = <HTMLInputElement>document.getElementById('user-input')!;

//FIX - 2

// const userInput = document.getElementById('user-input')! as HTMLInputElement;

// 👆 UseFul for REACT

// userInput.value = 'Hi there!';

// IN case we do not know that the element will not return anything null, we can not put EXCLAMATION MARK here ! and put DOM type at the end. We need to IF-check

//FIX 3

// const userInputElement = document.getElementById(
// 	'user-input'
// )! as HTMLInputElement;

// if (userInputElement) {
// 	(userInputElement as HTMLInputElement).value = 'Hi there';
// }

//------------- Index properties

//more flexible in terms of OBJ

//Let's say we have a sceneario where we have multiple input fields, depending on the user input, field, we wanna show releavant Error message.

// interface ErrorContainer {
// 	//{email: 'Not a valid email', username: 'must..'}
// 	// 👇 either of any one type
// 	id: string;
// 	[prop: string]: string;
// 	// id:number
// 	// [prop:number]:number
// }

// const errorBag: ErrorContainer = {
// 	id: 'A3Eggaf',
// 	email: 'Not a vaild email',
// };

//----------- Function overloads

//a feature that gives us to define multiple functions

// type Combinable = string | number;
// type Numeric = number | boolean;

// type Universal = Combinable & Numeric;

// //righ above the function

// function add(a: string, b: string): string;
// function add(a: number, b: number): number;
// // 👆 commenting this out will return comibnable only types.
// //we can make more possible combination like this.

// function add(a: Combinable, b: Combinable) {
// 	if (typeof a === 'string' || typeof b === 'string') {
// 		return a.toString() + b.toString();
// 	}

// 	return a + b;
// }

//now in this case, whether the input is number or stirng, TS always return combinable here.

// const result2 = add(5, 2);
//👆 return same combinable

// const resultStirng = add('Jonny', 'Staley');
// result.split();

// 👆 we cannot call stirng method since return type is mixed

//*----------- OPTIONAL CHAINING

//let say we are got some data with TS

const fetchedUserData = {
	id: 'u1',
	name: 'Max',
	// job: {
	// 	title: 'CEO',
	// 	description: 'My own company',
	// },
};

console.log(fetchedUserData?.job?.title);

//In case we did not have the job field, we optional chain

//Dont worry about the error, since if the first one 'FethcedUserData' did not meet, it won't get to the job.
