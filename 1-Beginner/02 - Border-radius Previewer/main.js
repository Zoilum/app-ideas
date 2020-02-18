const square = document.querySelector('.square');
const squareStyle = square && square.style;
const cssText = document.querySelector('code');
const borderStyles = [
	'solid',
	'dashed',
	'dotted',
	'double',
	'groove',
	'hidden'
];

window.onload = () => {
	renderOptions();
};

const displayCssText = () => {
	cssText.textContent = '';
	const styles = square.getAttribute('style').split(';');
	styles.forEach(style => appendParagraph(cssText, style));
};

const appendParagraph = (el, text) => {
	const paragraph = document.createElement('p');
	paragraph.textContent = text;
	el.appendChild(paragraph)
};

const renderOptions = () => {
	const selects = document.querySelectorAll('select') || [];
	selects.forEach(select => {
		borderStyles.forEach(style => {
			const option = createOptionElement(style, style);
			appendOption(select, option)
		})
	})
};

const createOptionElement = (label, value) => {
	const option = document.createElement('option');
	option.label = label;
	option.value = value;
	return option;
};

const appendOption = (select, optionEl) => {
	select.appendChild(optionEl)
};

window.setBorderRadius = (border, value) => {
	squareStyle[`border${border}Radius`] = `${+value}px`;
	displayCssText(border, value);
};

window.setBorderStyle = (border, value) => {
	squareStyle[`border${border}Style`] = value;
	displayCssText(border, value);
};
