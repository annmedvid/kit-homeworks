var arr = [4, 3, 1, 6, -1, 5, 75, 12, -5]

// 1
var	min = arr[0],
	max = min

for (var i = 1; i < arr.length; i++) {
	if (arr[i] > max) max = arr[i]
	else if (arr[i] < min) min = arr[i]
}

console.log(max + "&" + min)

// 2
var odd = []
j = 0
for (var i = 0; i < arr.length; i++) {
	if (arr[i] % 2 == 0) {
		odd[j] = arr[i]
		j++
	}
}

console.log(odd)

// 3
var sum
for (var i = 0; i < arr.length; i++) {
	sum += arr[i]
}

console.log(sum)

//string compare
function stringCompare(stringFirst, stringSecond) {
	var res = {}

	for (var i = 0; i < stringFirst.length; i++) {
		if (stringFirst[i] == stringSecond[i]) res[i] = true
		else res[i] = false
	}

	return res
}

stringCompare("abcd", "sbcf")

//RegExp
function addArticle(str) {
	if (/[aieouy]/.test(str[0])) return `an ${str}`
	return `a ${str}`
}

addArticle(`function`) //`a function`
addArticle(`object`) //`an object`
