let itCompanies = [
	'FaceBook',
	'Google',
	'Microsoft',
	'Apple',
	'IBM',
	'Oracle',
	'Amazon',
];

const findCompany = (arr) => {
	let counter = 0;
	let res = [];

	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
			if (arr[i][j] == 'o') {
				counter++;
			}
		}
		if (counter >= 2) {
			res.push(arr[i]);
		}
		counter = 0;
	}
	return res;
};

console.log(findCompany(itCompanies));

console.log(itCompanies.sort().reverse());
