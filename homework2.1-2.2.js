let name1 = "Ihor";
let reversedString = name1.split('').reverse().join('');

console.log(reversedString);

//--Ex1

function polindrom(str) {
    return str === str.split("").reverse().join('');
}

console.log(polindrom("tenet"));

//--Ex2

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numbersCouples = numbers.filter(number => number % 2 === 0);
let reversedNumbers = numbersCouples.reverse();
console.log(reversedNumbers);

//--Ex3

function couple(arr) {
    for (let i = arr.lenght-1; i >= 0; i-- ) {
        if (arr % 2 === 0) {
            console.log(arr.reverse());
        }
        else{
            continue
        }
    }
}
couple(numbers);
//--3.1

// let longestCommonPrefix = function (strs) {
//     let output = "";
//     for (let i = 0; i < strs[0].length; i++) {
//         if(strs.every(str => str[i] === strs[0][i])) output += strs[0][i];
//         else break;
//     }
//     return output;
// };
// console.log(longestCommonPrefix("fly","flywer","flyrrfSDF","flysagaf"));

// var longestCommonPrefixMostPopular = function (strs) {
//     if (strs.length === 0) {
//         return "";
//     }

//     let prefix = strs[0];

//     for (let word of strs) {
//         while (word.indexOf(prefix) !== 0) {
//             prefix = prefix.slice(0, -1);
//             if (prefix === '') return ''
//         }
//     }
//     return prefix;
// };
// console.log(longestCommonPrefixMostPopular("fly","flysdg","fyydbvhdz","flyvdbzz"));

let longestCommonPrefixMostPopularVadym = (srts) => {
    if (strs.length === 0) {
        return "";
    }
    let finalResult = ""
    let firstElement = srts[0]

    for (word in srts){
        for (let i = 0; i<finalResult.lenght(); i++){
            if(word[i] === finalResult[i]){
                finalResult += word[i];
            }else{
                finalResult = finalResult.substring(0, i-1)
            }
        }
    }

    return finalResult
}
console.log(longestCommonPrefixMostPopularVadym("fly","flyper","flyy"))