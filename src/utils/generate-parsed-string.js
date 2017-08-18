export default (className, value, meta) => {
	const {
		type
	} = meta
	switch (type) {
		case 'line-break':
			return '<div class="' + className + '"/>'
		case 'link': {
			const {
				title,
				url,
				alt
			} = meta
			return '<a class="' + className + '" href="' + url + '" title="' + alt + '">' + title + '</a>'
		}
		case 'image': {
			const {
				url,
				alt
			} = meta
			return '<img class="' + className + '" src="' + url + '" title="' + alt + '" />'
		}
		case 'code':
			return '<span class="' + className + '">&lt;' + value + '&gt;</span>'
		case 'list':
			return '<span class="' + className + '">' + value + '</span>'
		default:
			return '<span class="' + className + '">' + value + '</span>'
	}
}