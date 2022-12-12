export default function getProperString(number: number, stringForOne: string, stringForMultiple: string): string {
  const countryString = number === 1 ? stringForOne : stringForMultiple;
  return `${number} ${countryString}`;
}