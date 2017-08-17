import generateParsedString from './generate-parsed-string'

export default (string, reg, className, linebreak) => {
	return string
		.replace(
			reg,
			(...args) => {
				const value = args[1]
				return generateParsedString(className, value, linebreak)
			}
		)
}