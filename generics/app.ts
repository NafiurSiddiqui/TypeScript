/**
 * //Type that is connected to other types
const names = ['Max', 'Manuel']; //an array is generic type

const name2 = []; //of anytype

let name3: string[];

const name4: Array<string> = []; //same as stirng[]

//👆 This could be any type, union type.

//*Another type: PROMISE
//you can use any type inside <>.

const promise: Promise<string> = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('This is done');
	}, 2000);
});

//one usecase woudl be, you would not have any TS support here if the type was Promise<any>

promise.then((data) => {
	data.split(' ');
	//at this point we never know what kind of data we get, hence the kind of method we could use is at risk here.
});



 * 
 */

//*Custom generics

//a function that merges two objects

// function merge(obj:object, objB:object){
// 	return Object.assign(obj, objB);

// }

//this work until we store it inside another var

// const mergeItems = merge({name: 'Toto'}, {year: 1982});

// mergeItems.name ; //!DO NOT WORK
// mergeItems.year; //!Do not work

// const merge2 = <T extends object, U extends object>(objA: T, objB: U) => {
// 	return Object.assign(objA, objB);
// };

// //should be one letter
// // T and U just a naming convention
// //best to put CONSTRAIN by extending of some type.

// const mergeItems2 = merge2(
// 	{ name: 'Attashi', game: 'Batashit' },
// 	{ year: 1982 }
// );

// mergeItems2.name;

// const addID = <T>(obj: T) => {
// 	let userID = Math.floor(Math.random() * 100);

// 	return { ...obj, userID };
// };

// const userA = addID({ name: 'SumTing', age: 40 });

// console.log(userA.name);

//*---------- working with contraints

//if we write a funciton like this, we won't have length available

// interface lengthy {
// 	length: number; // Without extending from here, will throw error
// }
// function countAndDescribe<T extends lengthy>(el: T): [T, string] {
// 	let descriptionText = 'Got no value';

// 	if (el.length === 1) {
// 		descriptionText = 'Got 1 elemnet';
// 	} else if (el.length > 1) {
// 		descriptionText = 'Got ' + el.length + ' elements';
// 	}

// 	return [el, descriptionText];
// }

// console.log(countAndDescribe('Hey there!'));

/**
 * @interfece - Wihtout extending from here won't have length
 * @truple - [T, stirng] : we specifically set the return type
 *
 */

//another example -

// function extractAndConver<T extends object, U extends keyof T>(obj: T, key: U) {
// 	return 'Value: ' + obj[key];
// }

// extractAndConver({ name: 'Max' }, 'name');

/**
 * HERE WE DONT GET THE KEY
 * @extends keyof - When we want to get the key, we need to specify where do we want to get the Key from
 */

//* CLASS

class DataStorage<T> {
	private data: T[] = [];

	addItem(item: T) {
		this.data.push(item);
	}

	removeItem(item: T) {
		this.data.splice(this.data.indexOf(item), 1);
	}

	getItems() {
		return [...this.data];
	}
}

const textStorage = new DataStorage<string>();

// textStorage.addItem(2); //can not put number here
textStorage.addItem('Helena');
textStorage.addItem('Rabivach');
// textStorage.removeItem('Rabivach');
textStorage.getItems();
console.log(textStorage.getItems());

//we Can ALso only add number or both

const numberStorage = new DataStorage<number>();

/**
 * @NOTE : Make sure you only work with primitive values like this. If you want to work with non-primitive values like object or arrays, create a seperate class and logic for them.
 *  You can also extends and use constraints
 */

//* Generic Utility - Partials, Readonly

// interface CourseGoal {
// 	title: string;
// 	description: string;
// 	completeUntil: Date;
// }

// function createCourseGoal(
// 	title: string,
// 	description: string,
// 	date: Date
// ): CourseGoal {
// 	// return { title: title, description: description, completeUntil: date };
// 	//bt if we wanted to do this ↙️, we needed a different approach

// 	let courseGoal: Partial<CourseGoal> = {};

// 	courseGoal.title = title;
// 	courseGoal.description = description;
// 	courseGoal.completeUntil = date;
// 	return courseGoal as CourseGoal;
// }

// If we wanted to lock something down

// const names: Readonly<string[]> = ['Name', 'Ratata'];

// names.push('Aha');
// names.pop('Aha')

/**
 *  Can't do 👆 this since we set it to readonly.
 *
 *
 */
