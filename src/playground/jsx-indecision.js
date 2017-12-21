console.log('App.js is running!');

let app = {
	title: 'Indecision App',
	subtitle: 'Put your life in the hands of a computer',
	options: []
};

const onFormSubmit = e => {
	// Prevents page refresh
	e.preventDefault();

	// Option field, Adds option to list
	const option = e.target.elements.option.value;
	if (option) {
		app.options.push(option);
		e.target.elements.option.value = '';
	}
	renderListApp();
};
const removeAll = () => {
	app.options = [];
	renderListApp();
};

const onMakeDecision = () => {
	const randomNum = Math.floor(Math.random() * app.options.length);
	const option = app.options[randomNum];
	alert(option);
};
const renderListApp = () => {
	const template = (
		<div>
			<h1>{app.title}</h1>
			{app.subtitle && <p>{app.subtitle}</p>}
			<p>{app.options.length > 0 ? 'Here are your options: ' : 'No options.'}</p>
			<button disabled={app.options.length === 0} onClick={onMakeDecision}>
				What should I do?
			</button>
			<button onClick={removeAll}>Remove All</button>
			<ol>
				{app.options.map(option => {
					return <li key={option}>{option}</li>;
				})}
			</ol>
			<form autoComplete="off" onSubmit={onFormSubmit}>
				<input type="text" name="option" />
				<button>Add Option</button>
			</form>
		</div>
	);
	ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById('app');

renderListApp();
