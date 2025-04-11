/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
	let output = [];

	const word1Length = word1.length;
	const word2Length = word2.length;

	const maxLength = Math.max(word1Length, word2Length);

	for (let i = 0; i <= maxLength; i++) {
		if (word1[i] !== undefined) {
			output.push(word1[i]);
		}
		if (word2[i] !== undefined) {
			output.push(word2[i]);
		}
	}

	console.log(output);
	return output.join("");
};

module.exports = mergeAlternately;
