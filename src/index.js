module.exports = function toReadable (number) {
  var number;
const unit = {
    0: "zero",
    1: "one", 
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    };

    const exeption = {
    0: "ten",
    1: "eleven",
    2: "twelve",
    3: "thirteen",
    4: "fourteen",
    5: "fifteen",
    6: "sixteen",
    7: "seventeen",
    8: "eighteen",
    9: "nineteen",
    };

    const ten = {
    2: "twenty",
    3: "thirty",
    4: "forty",
    5: "fifty",
    6: "sixty",
    7: "seventy",
    8: "eighty", 
    9: "ninety",
  };

  const hundred = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
  };

if(number > 999)
{
alert ("The number should be under 1000.");
} else {
    let firstNum = Number(number.toString()[0]);
    let secondNum = Number(number.toString()[1]);
    let thirdNum = Number(number.toString()[2]);
    if (number < 10){
        let result = unit[firstNum];
        return (result.trim());
    } else if (number < 100) {
    if (number < 20){
        let result = exeption[secondNum];
        return (result.trim());
    } else {if (secondNum ===0){
        let result = ten[firstNum];
        return (result.trim());
    }else {let result = ten[firstNum] + ' ' + unit[secondNum];
     return (result.trim());}
    }
} else {
    let tensOfNumber = Number.parseInt(number.toString()[1] + number.toString()[2]);
    if (tensOfNumber === 0){
        let result = hundred[firstNum] + ' hundred';
        return (result.trim());
    } else if (tensOfNumber < 10){
        let result = hundred[firstNum] + ' hundred ' + unit[thirdNum];
        return (result.trim());
    } else if (tensOfNumber < 20){
        let result = hundred[firstNum] + ' hundred ' + exeption[thirdNum];
        return (result.trim());
    } else if (thirdNum === 0){
        let result = hundred[firstNum] + ' hundred ' + ten[secondNum];
        return (result.trim());
    } else
    { let result = hundred[firstNum] + ' hundred ' + ten[secondNum] + ' ' + unit[thirdNum];
    return (result.trim());
    }     
    
}}
}
