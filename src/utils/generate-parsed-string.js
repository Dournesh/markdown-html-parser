export default (className, value, linebreak) => {
	if (linebreak) {
		return '<span class="' + className + '"></span>'
	} else {
		return '<span class="' + className + '">' + value + '</span>'
	}
}