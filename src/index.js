module.exports = function toReadable(number) {
  const unit = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
  };

  const exeption = {
    0: 'ten',
    1: 'eleven',
    2: 'twelve',
    3: 'thirteen',
    4: 'fourteen',
    5: 'fifteen',
    6: 'sixteen',
    7: 'seventeen',
    8: 'eighteen',
    9: 'nineteen',
  };

  const ten = {
    2: 'twenty',
    3: 'thirty',
    4: 'forty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety',
  };

  const hundred = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
  };

  if (number > 999) {
    return 'The number should be under 1000.';
  }
  const firstNum = Number(number.toString()[0]);
  const secondNum = Number(number.toString()[1]);
  const thirdNum = Number(number.toString()[2]);
  if (number < 10) {
    const result = unit[firstNum];
    return result.trim();
  }
  if (number < 100) {
    if (number < 20) {
      const result = exeption[secondNum];
      return result.trim();
    }
    if (secondNum === 0) {
      const result = ten[firstNum];
      return result.trim();
    }
    const result = `${ten[firstNum]} ${unit[secondNum]}`;
    return result.trim();
  }
  const tensOfNumber = Number.parseInt(
    number.toString()[1] + number.toString()[2],
    10
  );
  if (tensOfNumber === 0) {
    const result = `${hundred[firstNum]} hundred`;
    return result.trim();
  }
  if (tensOfNumber < 10) {
    const result = `${hundred[firstNum]} hundred ${unit[thirdNum]}`;
    return result.trim();
  }
  if (tensOfNumber < 20) {
    const result = `${hundred[firstNum]} hundred ${exeption[thirdNum]}`;
    return result.trim();
  }
  if (thirdNum === 0) {
    const result = `${hundred[firstNum]} hundred ${ten[secondNum]}`;
    return result.trim();
  }
  const result = `${hundred[firstNum]} hundred ${ten[secondNum]} ${unit[thirdNum]}`;
  return result.trim();
};
