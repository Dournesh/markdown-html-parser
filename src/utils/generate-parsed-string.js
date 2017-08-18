export default (className, value, meta) => {
	const {
		type
	} = meta
	if (type === 'line-break') {
		return '<div class="' + className + '"/>'
	} else if (type === 'link') {
		const {
			title,
			url,
			alt
		} = meta
		return '<a class="' + className + '" href="' + url + '" title="' + alt + '">' + title + '</a>'
	} else if (type === 'image') {
		const {
			url,
			alt
		} = meta
		return '<img class="' + className + '" src="' + url + '" title="' + alt + '" />'
	} else if (type === 'code') {
		return '<span class="' + className + '">&lt;' + value + '&gt;</span>'
	} else if (type === 'list') {
		return '<span class="' + className + '">' + value + '</span>'
	} else {
		return '<span class="' + className + '">' + value + '</span>'
	}
}