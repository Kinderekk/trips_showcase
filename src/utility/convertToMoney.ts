export default function convertToMoney(number: number, currency: string): string {
  let numberString = number.toString();
  numberString = numberString.split('').reverse().join('').replace(/(.{3})/g,"$1,").split('').reverse().join('');
  if (numberString[0] === ',') {
    const splittedString = numberString.split('');
    numberString = splittedString.splice(1, splittedString.length - 1).join('')
  }
  return `${currency}${numberString}`
}