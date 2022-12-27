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

function merge2<T, U>(objA: T, objB: U) {
	return Object.assign(objA, objB);
}

// T and U just a naming convention
//shoudl be one letter

// const mergeItems2 = merge2({ name: 'Toto' }, { year: 1982 });

// mergeItems.name;
