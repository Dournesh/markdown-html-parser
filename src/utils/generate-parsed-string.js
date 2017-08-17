export default (className, value, meta) => {
	console.log(meta)
	const {
		type
	} = meta
	if (type === 'line-break') {
		return '<span class="' + className + '"></span>'
	} else if (type === 'link') {
		const {
			title,
			url,
			alt
		} = meta
		return '<a class="' + className + '" href="' + url + '" title="' + alt + '">' + title + '</a>'
	} else {
		return '<span class="' + className + '">' + value + '</span>'
	}
}