import generateParsedString from './generate-parsed-string'

export default (string, reg, className) => {
	console.log(className, reg, string)
	return string
		.replace(
			reg,
			(...args) => {
				const value = args[1]
				return generateParsedString(className, value)
			}
		)
}