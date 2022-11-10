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

//ENUM Type

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
//ARRAY

//if we have a mix array

let myHobbies: any[];

//if we have defined typed array

let myGears: string[];
