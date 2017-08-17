export default (className, value) => {
	console.log(className)
	return '<span class="' + className + '">' + value + '</span>'
}