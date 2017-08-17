export default {
	bold: [
		/\*\*\s?([^*].+?)\s?\*\*/gim,
		/__\s?([^*].+?)\s?__/gim,
	],
	inclined: [
		/\*\s?([^*].+?)\s?\*/gim,
		/_\s?([^_].+?)\s?_/gim,
	],
	strike: /~~\s?(.+?)\s?~~/gim
}