// Escribe una función llamada `adultos` que
//reciba un arreglo de números (que representan edades)
//y retorne `true` si todos son adultos, o `false` de lo
//contrario. Un adulto tiene 18 o más pero menos de 70.

// adultos([28, 45, 19, 21, 18, 69]) -> true
// adultos([28, 45, 17, 21, 17, 70]) -> false
// adultos([28, 45, 71, 21]) -> false

const adultos = (arr) => {
	const mayores = [];
	arr.forEach((edad) => {
		if (edad >= 18 && edad < 70) {
			mayores.push(true);
		} else {
			mayores.push(false);
		}
	});
	if (mayores.includes(false)) return false;
	return true;
};

// console.log(adultos([28, 45, 19, 21, 18, 69]));
// console.log(adultos([28, 45, 17, 21, 17, 70]));
// console.log(adultos([28, 45, 71, 21]));

//Escribe una función llamada numDuplicados que reciba un string y retorne
//el número de caracteres que aparecen más de una vez.

const numDuplicados = (string) => {
	const obj = string.split('').reduce((acc, value) => {
		return { ...acc, [value]: (acc[value] || 0) + 1 };
	}, {});
	let counter = 0;
	Object.values(obj).forEach((val) => {
		if (val > 1) counter++;
	});
	return counter;
};

// console.log(numDuplicados('abcaa'));
// console.log(numDuplicados('abab'));
// console.log(numDuplicados('abc'));

//Escribe una función llamada frecuencias que reciba una cadena de texto y retorne un objeto
//con el número de veces que aparece cada caracter (exceptuando el espacio en blanco)

const frecuencias = (string) => {
	const newString = string.replace(/\s/g, '');
	const result = newString.split('').reduce((acc, value) => {
		return { ...acc, [value]: (acc[value] || 0) + 1 };
	}, {});
	return result;
};

// console.log(frecuencias('hola mundo'));
// console.log(frecuencias('anita lava la tina'));

// Crea una función llamada caracteresEnComun que recibe dos argumentos: str1 y str2. La función debe
// retornar un arreglo con todos los caracteres que las dos cadenas tienen en común.

const caracteresEnComun = (string1, string2) => {
	let valueArray1 = null;
	let valueArray2 = null;
	const repeteated = [];

	string1.split('').forEach((letter) => {
		valueArray1 = letter;

		string2.split('').forEach((letter2) => {
			valueArray2 = letter2;
			if (valueArray1 === valueArray2 && !repeteated.includes(valueArray1)) {
				repeteated.push(valueArray1);
			}
		});
	});

	return repeteated;
};

// console.log(caracteresEnComun('Hola', 'Mundo'));
// console.log(caracteresEnComun('German', 'Gabriela'));
// console.log(caracteresEnComun('Hola', 'Bye'));

// Escribir una función llamada ajustarTexto que reciba dos argumentos:  un string y un número
// (que representa una longitud).  La función debe retornar la cadena ajustada a la longitud recibida.
// Si la longitud de la cadena es mayor al número, debes recortar la cadena. De lo contrario agrega
// espacios en blanco hasta completar la longitud.

const ajustarTexto = (string, length) => {
	if (!string.length) {
		return string.padEnd(length);
	}
	if (string.length < length) {
		return string.padEnd(length);
	}
	const newString = string.slice(0, -Math.abs(length));
	return newString;
};

// console.log(ajustarTexto('', 3));
// console.log(ajustarTexto('hola', 2));
// console.log(ajustarTexto('Hola', 0));
// console.log(ajustarTexto('Hola', 5));

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or
// phrase, typically using all the original letters exactly once.

const anagram = (string1, string2) => {
	const stringSorted1 = string1.split('').sort().join('');
	const stringSorted2 = string2.split('').sort().join('');
	if (stringSorted1 === stringSorted2) return true;
	return false;
};

// console.log(anagram('anagram', 'nagaram'));
// console.log(anagram('rat', 'car'));

// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.

const sortNonZeroElements = (arr) => {
	arr.sort((a, b) => {
		if (b === 0 && a !== 0) return -1;
		if (a === 0 && b !== 0) return 1;
		return 0;
	});
	return arr;
};

//console.log(sortNonZeroElements([0, 1, 0, 3, 12]));

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

const sumIdx = (nums, target) => {
	const prevResult = [];
	nums.forEach((num, idxEach) => {
		let base = num;
		const result = nums
			.map((el, idxMap) => {
				if (idxEach !== idxMap && el + base === target) {
					return [idxEach, idxMap];
				}
			})
			.filter((el) => el !== undefined)
			.flat();
		prevResult.push(result);
	});

	const finalResult = [...new Set(prevResult.flat())];
	return finalResult;
};

// console.log(sumIdx([2, 7, 11, 15], 9));
// console.log(sumIdx([3, 2, 4], 6));
// console.log(sumIdx([3, 3], 6));
// console.log(sumIdx([3, 2, 3], 6));
