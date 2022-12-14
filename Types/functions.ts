function add(n1: number, n2: number): number {
	console.log(n1 + n2);
	return n1 + n2;
}

add(2, 3);

//TYPCIALLY leave it upto type inference than explicitly declaring it.

type addFn = (a: number, b: number) => number;

let substract: addFn;
