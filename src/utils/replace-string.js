import generateParsedString from './generate-parsed-string'

export default (string, reg, className, meta) => {
	const {
		type
	} = meta
	if (type === 'link') {
		return string
			.replace(
				reg,
				(...args) => {
					const title = args[1]
					const url = args[2]
					const alt = args[3]
					return generateParsedString(className, title, {type, title, url, alt})
				}
			)
	} else if (type === 'image') {
		return string
			.replace(
				reg,
				(...args) => {
					const alt = args[1]
					const url = args[2]
					return generateParsedString(className, null, {type, url, alt})
				}
			)
	} else if (type === 'list') {
		return string
			.replace(
				reg,
				(...args) => {
					const val1 = args[1]
					const val2 = args[2]
					return generateParsedString(className, val1 + ' ' + val2, {type})
				}
			)
	} else {
		return string
			.replace(
				reg,
				(...args) => {
					const value = args[1]
					return generateParsedString(className, value, {type})
				}
			)
	}
}