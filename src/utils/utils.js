export function commaSeparatedNumbers(x) {
  if (isNaN(x)) {
    throw new Error('Please use numbers');
  }
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
