//With StrictNullChecks, We will get error if there is no element(button in this case) exist on the DOM.
// To work around this, we either need to put a IF check or use ! at the end of the DOM selector. 👇

// const button = document.querySelector('button');
const button = document.querySelector('button')!;

button.addEventListener('click', () => {
	console.log('Clicked!');
});
