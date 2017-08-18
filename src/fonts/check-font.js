import replaceString from '../utils/replace-string'

export default (font, newString) => {
	const {
		title,
		included,
		allowed,
		className,
	} = font
	if (title === 'bold' && included === true) {
		if (typeof allowed === 'string' && allowed !== 'all') {
			const screen = '\\' + allowed + '\\' + allowed
			const reg = new RegExp(screen + '\\s?([^*].+?)\\s?' + screen, 'gim')
			newString = replaceString(newString, reg, className)
		}
		if (allowed === 'all') {
			const reg1 = new RegExp('\\*\\*\\s?([^*].+?)\\s?\\*\\*', 'gim')
			const reg2 = new RegExp('__\\s?([^*].+?)\\s?__', 'gim')
			newString = replaceString(newString, reg1, className)
			newString = replaceString(newString, reg2, className)
		}
	}
	if (title === 'inclined' && included === true) {
		if (typeof allowed === 'string' && allowed !== 'all') {
			const screen = '\\' + allowed
			const reg = new RegExp(screen + '\\s?([^*].+?)\\s?' + screen, 'gim')
			newString = replaceString(newString, reg, className)
		}
		if (allowed === 'all') {
			const reg1 = new RegExp('\\*\\s?([^*].+?)\\s?\\*', 'gim')
			const reg2 = new RegExp('_\\s?([^*].+?)\\s?_', 'gim')
			newString = replaceString(newString, reg1, className)
			newString = replaceString(newString, reg2, className)
		}
	}
	if (title === 'strike' && included === true) {
		const reg = new RegExp('~~\\s?(.+?)\\s?~~', 'gim')
		newString = replaceString(newString, reg, className)
	}
	return newString
}