import fontsChecking from './fonts/check-font'
import replaceString from './replace-string'
import regulars from './regulars'

export default (string, options) => {
	let newString = string
	options.forEach(option => {
		const {
			title,
			included,
		} = option

		// HEADERS

		if (title === 'headers' && included === true) {
			const {
				level,
				levels,
			} = option
			if (typeof level === 'object' && !Array.isArray(level)) {
				const {
					number,
					className,
				} = option.level
				const reg = new RegExp('^#{' + number + '}\\s(.+)', 'gim')
				newString = replaceString(newString, reg, className)
			}
			if (typeof levels === 'object' && Array.isArray(levels)) {
				levels.forEach(level => {
					const {
						number,
						className,
					} = level
					const reg = new RegExp('^#{' + number + '}\\s(.+)', 'gim')
					newString = replaceString(newString, reg, className)
				})
			}
			if (levels === 'all') {
				const {
					classNames,
				} = option
				if (typeof classNames === 'object' && !Array.isArray(classNames)) {
					Object
						.keys(classNames)
						.forEach((key, index) => {
							const newIndex = index + 1
							const reg = new RegExp('^#{' + newIndex + '}\\s(.+)', 'gim')
							newString = replaceString(newString, reg, classNames[key])
						})
				}
			}
		}

		// FONT CHECKING

		if (title === 'font' && included === true) {
			const {
				font,
				fonts,
			} = option
			if (typeof font === 'object' && !Array.isArray(font)) {
				newString = fontsChecking(font, newString)
			}
			if (typeof fonts === 'object' && Array.isArray(fonts)) {
				fonts.forEach(font => {
					newString = fontsChecking(font, newString)
				})
			}
			if (fonts === 'all') {
				const {
					classNames
				} = option
				Object
					.keys(classNames)
					.forEach((key, index) => {
						const newIndex = index + 1
						if (key === "bold") {
							regulars.bold.forEach(reg => {
								newString = replaceString(newString, reg, classNames[key])
							})
						}
						if (key === "inclined") {
							regulars.inclined.forEach(reg => {
								newString = replaceString(newString, reg, classNames[key])
							})
						}
						if (key === "strike") {
							newString = replaceString(newString, regulars.strike, classNames[key])
						}
					})
			}
		}
	})
	return newString
}

// const regs = [
// 	/\\*\\*\\s?([^*].+?)\\s?\\*\\*/gim,
// 	/__\\s?([^*].+?)\\s?__/gim,
// 	/\\*\\s?([^*].+?)\\s?\\*/gim,
// 	/_\\s?([^*].+?)\\s?_/gim,
// 	/~~\\s?(.+?)\\s?~~/gim,
// ]