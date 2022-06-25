export const getAbsoluteHeight = (el) => {
	const styles = window.getComputedStyle(el);
	const margins = parseFloat(styles['marginTop']) +
		parseFloat(styles['marginBottom']);

	return Math.ceil(el.offsetHeight + margins);
}
export const getScrollHeight = (container, scrollBoxClass) => {
	const containerHeight = container.offsetHeight
	let heightRemainingElements = 0

	container.childNodes.forEach(el => {
		if (el.className.indexOf(scrollBoxClass) === -1) {
			heightRemainingElements += getAbsoluteHeight(el)
		}
	});

	return (containerHeight - heightRemainingElements) + 'px'
}
