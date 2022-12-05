// 👇 watch out for this keyword

class Department {
	name: string;

	constructor(n: string) {
		this.name = n;
	}

	describe() {
		console.log(`This is ${this.name} Department`);
	}
	//---- 👆 Wihtout declaring 'this' type, a new variable crated out of literal object won't refer to this class.

	// describe(this:Department) {
	// 	console.log(`This is ${this.name} Department`);
	// }

	//--- 👆 declaring 'this' type, a new variable created out of literal object now refer to this class and will force you to put the name key:value inside literal object as well.
}

// const accounting = new Department('Accounting');
// console.log(accounting);

// const newAccounting1 = { describe: accounting.describe };

// const newAccountingWithName = { name: 'chi', describe: accounting.describe };
//newAccounting1.describe();

/**
*------👆 'this' refer to the variable. newAccounting has no name field, hence 'this' refers to undefined.
------👆 setting 'this' type on the class, will force this object to initialize a name key:value pair

newAccountingWithName.describe();
------👆 'this' refer to the variable.newAccountingWIthName, whic has name field, hence 'this' refers to this object.

*/

//------ Stage 3 PUBLIC and PRIVATE

// class Department2 {
// 	// name: string;
// 	public name: string;
// 	//--- BY default it is public
// 	//--- with public on, we can directly have access to this field and modify it from outside of the classa.

// 	private employees: string[] = [];
// 	//--- with private field, we cannot modify from outside

// 	constructor(n: string) {
// 		this.name = n;
// 	}

// 	describe(this: Department) {
// 		console.log(`This is ${this.name} Department`);
// 	}

// 	addEmployees(employee: string) {
// 		this.employees.push(employee);
// 	}

// 	printEmployeeInfo() {
// 		console.log(`Total: ${this.employees.length}. ${this.employees}`);
// 	}
// }

// const IT = new Department2('IT');

// IT.addEmployees('Johanna');
// IT.addEmployees('Sebastian');
// // IT.employees[2] = 'Shagor';
// // 👆 we do not have direct access to the property like this with private
// IT.describe();
// IT.printEmployeeInfo();

//--------- SHORTHAND initialization

// class Department3 {
// 	// name: string;
// 	// public name: string;
// 	// private employees: string[] = [];
// 	// private employeeID: string;

// 	//👇 IF we had multiple field, we could directly write it like this.

// 	constructor(
// 		public name: string,
// 		private employees: string[] = [],
// 		private empoyeeID: string
// 	) {
// 		// this.name = name;
// 		// this.employees = employees;
// 		// this.empoyeeID = empoyeeID;
// 	}

// 	describe(this: Department3) {
// 		console.log(`This is ${this.name} Department, we have ${this.employees}`);
// 	}

// 	addEmployees(employee: string) {
// 		this.employees.push(employee);
// 	}

// 	printEmployeeInfo() {
// 		console.log(`Total: ${this.employees.length}. ${this.employees}`);
// 	}
// }

// const management = new Department3('Management', [], 'fajfldjlFja');

// management.addEmployees('Roger');
// management.addEmployees('Steve');
// management.addEmployees('Isaac');
// management.describe();

//--------------- READONLY, PROTECTED

// class Department4 {
// 	constructor(
// 		public name: string,
// 		// private employees: string[] = [],
// 		//with private on, we can not modify this field from instantiated objects
// 		protected employees: string[] = [],
// 		// Now we can pass this field to other instances as well.

// 		private readonly departmentID: string
// 	) {
// 		// 👆 now this is readonly
// 	}

// 	describe(this: Department4) {
// 		console.log(
// 			`This is ${this.name} Department, we have ${this.employees}. My id is ${this.departmentID}`
// 		);
// 	}

// 	addEmployees(employee: string) {
// 		this.employees.push(employee);
// 	}

// 	printEmployeeInfo() {
// 		console.log(`Total: ${this.employees.length}. ${this.employees}`);
// 	}
// }

// const someDEPT = new Department4('Some Department', ['oggo'], 'IDs3049');

// someDEPT.describe();

//----------------- INHERITENCE

// class Admins extends Department4 {
// 	constructor(public name: string, id: string, public admins: string[]) {
// 		super(id, [], 'DEPARTMENT_ID');
// 	}

// 	greetings() {
// 		console.log(
// 			`Welocme to City flyers! This is department of ${this.name}. my name is ${this.admins}.There are no otehr admins in the house for the time being. :)`
// 		);
// 	}

// 	addEmployees(name: string) {
// 		if (name === 'oggo') {
// 			console.log('OGGOOOO!!');
// 		}

// 		this.employees.push(name);
// 	}
// }

// const admins = new Admins('ADMIN', 'ADMIN_ID', ['BABU']);

// admins.addEmployees('EDDIE');
// admins.describe();
// admins.greetings();

/**
 * there are alos -
 * @getter
 * @setter
 * @static - value and propery etc.
 */

//--------- ABSTRACT

/**
 * When you wanna set a method or properteis, which has no defined strucuter of how it should be implemented, rather leave it onto the classes that is instantiated from this class.
 * This gives you flexibility and enforce to define the structure of teh methods or properties, the instantiated class requires.
 *
 * @IMPORTANT = >
 * Abstract classes can not be instantiated with new keyword but be extended.
 * extended class must have the abstract methods/ properties implemented
 */

// abstract class Demons {
// 	constructor(public name: string, public power: string) {
// 		(this.name = name), (this.power = power);
// 	}

// 	printOut() {
// 		console.log(
// 			` This is known as ${this.name}. Has the power of ${this.power}`
// 		);
// 	}

// 	abstract superPower(this: Demons): void;
// 	//👆 This way, we can create our own superPower
// }

// class Azkiban extends Demons {
// 	constructor(name: string, power: string) {
// 		super(name, power);
// 	}

// 	superPower(this: Demons): void {
// 		console.log(
// 			`${this.name} can drag you into the pit of darkness where various shadow creature dwells. Not all of them are benevolent..if any.`
// 		);
// 	}
// }

// const Ratata = new Azkiban('Ratata', 'disguise');

// Ratata.printOut();
// Ratata.superPower();

//------- Singleton and Private constructor

/**
 * you wanna use this pattern, when you wanna create ONLY ONE instance out of a class.
 *
 */
