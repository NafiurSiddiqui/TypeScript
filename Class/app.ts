// 👇 watch out for this keyword

// class Department {
// 	name: string;

// 	constructor(n: string) {
// 		this.name = n;
// 	}

// 	describe(this:Department **) {
// 		console.log(`This is ${this.name} Department`);
// 	}
// }

// const accounting = new Department('Accounting');
// console.log(accounting);

// const newAccounting = { describe: accounting.describe };

// newAccounting.describe();**

//------ Stage 2 THIS keyword fix

// class Department {
// 	name: string;

// 	constructor(n: string) {
// 		this.name = n;
// 	}

// 	describe(this: Department) {
// 		console.log(`This is ${this.name} Department`);
// 	}
// }

// const accounting = new Department('Accounting');
// console.log(accounting);

// const newAccounting = { name: 'Acc dept.2', describe: accounting.describe };

// newAccounting.describe();

//------ Stage 3 PUBLIC and PRIVATE

class Department {
	name: string;
	private employees: string[] = [];

	constructor(n: string) {
		this.name = n;
	}

	describe(this: Department) {
		console.log(`This is ${this.name} Department`);
	}

	addEmployees(employee: string) {
		this.employees.push(employee);
	}

	printEmployeeInfo() {
		console.log(`Total: ${this.employees.length}. ${this.employees}`);
	}
}

const accounting = new Department('Accounting');

accounting.addEmployees('Johanna');
accounting.addEmployees('Sebastian');
// accounting.employees[2] = 'Shagor';
//👆 we do not have direct access to the property like this with private
accounting.printEmployeeInfo();
