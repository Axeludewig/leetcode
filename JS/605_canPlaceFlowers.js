// You have a long flowerbed in which some of the plots are planted,
//  and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0
// means empty and 1 means not empty, and an integer n, return true if n
//  new flowers can be planted in the flowerbed without violating the
//   no-adjacent-flowers rule and false otherwise.

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowersNaive = function (flowerbed, n) {
	if (flowerbed.length == 1 && flowerbed[0] == 0 && n == 1) {
		return true;
	}

	for (let i = 0; i <= flowerbed.length; i++) {
		if (i == 0) {
			if (flowerbed[i] == 0 && flowerbed[i + 1] == 0) {
				if (n == 0) {
					return true;
				}
				//console.log('here')
				flowerbed[i] = 1;
				//console.log('reducing n case 1')
				//continue;
				n--;
			}
		}

		if (i !== 0 && n !== 0) {
			if (flowerbed[i] == 0) {
				if (flowerbed[i - 1] == 0 && flowerbed[i + 1] == 0) {
					flowerbed[i] = 1;
					//console.log('reducing n case 2')
					n--;
					continue;
				}
			}
		}

		if (
			i == flowerbed.length - 1 &&
			flowerbed[flowerbed.length - 1] !== 1 &&
			n !== 0
		) {
			//console.log("index", i,  i == flowerbed[flowerbed.length-1])
			if (flowerbed[flowerbed.length - 2] == 0) {
				flowerbed[i] = 1;
				//console.log('reducing n case 3')
				n--;
			}
		}

		//console.log(flowerbed)
	}

	//console.log("n is", n)

	if (n == 0) {
		return true;
	} else {
		return false;
	}
};

var canPlaceFlowers = function (flowerbed, n) {
	let len = flowerbed.length;

	for (let i = 0; i < len; i++) {
		// Check if current plot is empty and both neighbors are 0 or out of bounds
		if (
			flowerbed[i] === 0 &&
			(i === 0 || flowerbed[i - 1] === 0) &&
			(i === len - 1 || flowerbed[i + 1] === 0)
		) {
			// Plant a flower
			flowerbed[i] = 1;
			n--;

			// Early return if we’re done
			if (n === 0) return true;
		}
	}

	return n <= 0;
};

module.exports = {
	canPlaceFlowers,
	canPlaceFlowersNaive,
};
