//-------------- INTERSECTION


//EXAMPLE: 1

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