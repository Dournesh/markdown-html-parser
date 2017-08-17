import generateParsedString from './generate-parsed-string'

export default (string, reg, className, linebreak) => {
	console.log("* s".replace(/^[*+-]\s([^*].+)/gim,'kek'))
	return string
		.replace(
			reg,
			(...args) => {
				const value = args[1]
				return generateParsedString(className, value, linebreak)
			}
		)
}